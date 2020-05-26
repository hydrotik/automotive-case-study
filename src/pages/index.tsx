import React from 'react';
import Slider from 'react-slick';
import CSS from 'csstype';
import dynamic from 'next/dynamic';
import Layout from '../components/global/layout';
import { numberWithCommas, currency } from '../utils/Numbers';

const Map = dynamic(() => import('../components/ui/Map'), { ssr: false });


type HomeProps = {
}

type HomeState = {
	tagline: string;
	userLat: number;
	userLong: number;
	nearestLat: number;
	nearestLong: number;
	nearestName: string;
	vehicles: CarModelProps[];
	features: FeatureProps[];
}

// type PlacesProps = {
// 	geometry: {
// 		location: {
// 			lat: number;
// 			lng: number;
// 		};
// 		viewport: {
// 			northeast: {
// 				lat: number;
// 				lng: number;
// 			};
// 			southwest: {
// 				lat: number;
// 				lng: number;
// 			};
// 		};
// 	};
// 	name: string;
// }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SampleNextArrow = (props: any): JSX.Element => {
	const { onClick } = props;
	const nullClick = (): null => null;
	return (
		<div
			className="arrow arrow--right slick-next"
			tabIndex={0}
			role="button"
			aria-label="Slide Right"
			onClick={onClick}
			onKeyDown={nullClick}
		>
			<span />
		</div>
	);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SamplePrevArrow = (props: any): JSX.Element => {
	const { onClick } = props;
	const nullClick = (): null => null;
	return (
		<div
			className="arrow arrow--left slick-prev"
			tabIndex={-1}
			role="button"
			aria-label="Slide Left"
			onClick={onClick}
			onKeyDown={nullClick}
		>
			<span />
		</div>
	);
};

type CarModelProps = {
	key: string;
	model: string;
	price: number | string;
	shortdescription: string;
	thumbimage: string;
	exploreurl: string;
	buildurl: string;
	accessories: string;
}

const CarModelItem = (props: CarModelProps): JSX.Element => {
	const {
		model,
		price,
		shortdescription,
		thumbimage,
		exploreurl,
		buildurl,
		accessories,
	} = props;
	return (
		<div className="md:w-1/3 md:px-2 mb-20 md:mb-0">
			<div className="md:rounded md:overflow-hidden md:shadow-lg">
				<img className="w-full" src={thumbimage} alt={model} />
				<div className="px-6 py-4 md:min-h-16 mb-4 md:mb-0">
					<div className="font-bold text-xl mb-2">{ model }</div>
					<p className="text-gray-700 text-base mb-4">
						{ shortdescription }
					</p>
					<div className="text-gray-600 text-sm mb-2">{ `Starts at $${price}` }</div>
				</div>
				<div className="px-6 md:py-4">
					<button data-reference={exploreurl} className="mb-2 block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Explore</button>
					<button data-reference={buildurl} className="mb-2 block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Build Your own</button>
					<button data-reference={accessories} className="mb-2 block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{ `${model} Accessories on Amazon` }</button>
				</div>
			</div>
		</div>
	);
};

type FeatureProps = {
	key: string;
	title: string;
	price: number | string;
	thumbimage: string;
	url: string;
}

const FeatureItem = (props: FeatureProps): JSX.Element => {
	const {
		title,
		price,
		thumbimage,
		url,
	} = props;
	return (
		<div className="w-1/3 px-2">
			<div className="">
				<img className="w-full feature-card-img" src={thumbimage} alt={title} />
				<div className="py-4">
					<div className="font-bold text-xl mb-2">{ title }</div>
					<div className="mb-2">{ `${price}` }</div>
				</div>
				<div className="py-4">
					<button data-reference={url} className="mb-2 block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Add To Cart</button>
				</div>
			</div>
		</div>
	);
};


type TestCTAProps = {
	nearestName: string;
	tagline: string;
}

const TestCTA = (props: TestCTAProps): JSX.Element => {
	const {
		nearestName,
		tagline,
	} = props;

	if (nearestName === '') {
		return (
			<>
				{` ${tagline}.`}
			</>
		);
	}
	return (
		<>
			{` ${tagline} `}
			with
			<br />
			{ ` ${nearestName}` }
		</>
	);
};

interface PositionCallback {
	(position: LocationResponseProps): void;
}

interface LocationComplete {
	(lng: number, lat: number): void;
}

type LocationResponseProps = {
	coords: {
		longitude: number;
		latitude: number;
	};
}

class Home extends React.Component<HomeProps, HomeState> {
	constructor(props: HomeProps) {
		super(props);

		this.state = {
			tagline: '',
			userLat: 0,
			userLong: 0,
			nearestLat: 0,
			nearestLong: 0,
			nearestName: '',
			vehicles: [],
			features: [],
		};
	}

	async componentDidMount(): Promise<void> {
		// const apiDirectionsURL = `https://maps.googleapis.com/maps/api/directions/json?origin=Disneyland&destination=Universal+Studios+Hollywood&key=${process.env.GOOGLE_API_KEY}`

		this.getLocationData((lng: number, lat: number) => {
			const apiPlaceURL = `/api/places?lng=${lng}&lat=${lat}`;
			this.getNearestDealerData(apiPlaceURL);
		});

		const apiContentURL = `${process.env.DOMAIN}data/content.json`;
		this.getContentData(apiContentURL);

		const tagline = 'Register to take the ride of your life';
		this.setState({
			tagline,
		});
	}

	getLocationData = (complete: LocationComplete): void => {
		if (!navigator.geolocation) {
			// eslint-disable-next-line no-console
			console.warn('No Geolocation supported');
		} else {
			navigator.geolocation.getCurrentPosition((position: LocationResponseProps) => {
				this.resolveLocationData(position.coords.latitude, position.coords.longitude);
				complete(position.coords.latitude, position.coords.longitude);
			}, () => {
				// eslint-disable-next-line no-console
				console.error('Location error!');
			});
		}
	}

	resolveLocationData = (userLat: number, userLong: number): void => {
		this.setState({
			userLong,
			userLat,
		});
	}

	getNearestDealerData = async (url: string): Promise<void> => {
		const response = await fetch(url);
		const data = await response.json();
		const { candidates } = data;
		const [cand] = candidates;
		const { geometry, name } = cand;
		const { location } = geometry;
		const { lat, lng } = location;
		this.resolveNearestDealerData(lat, lng, name);
	}

	resolveNearestDealerData = (
		nearestLat: number,
		nearestLong: number,
		nearestName: string,
	): void => {
		this.setState({
			nearestLat,
			nearestLong,
			nearestName,
		});
	}

	getContentData = async (url: string): Promise<void> => {
		const response = await fetch(url);
		const data = await response.json();
		const { content } = data;
		this.resolveContentData(content.vehicles, content.features);
	}

	resolveContentData = (vehicles: CarModelProps[], features: FeatureProps[]): void => {
		this.setState({
			vehicles,
			features,
		});
	}

	render(): JSX.Element {
		const settings = {
			accessibility: false,
			dots: false,
			infinite: true,
			speed: 500,
			autoplay: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			nextArrow: <SampleNextArrow />,
			prevArrow: <SamplePrevArrow />,
		};

		const divStyle: CSS.Properties = {
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
			boxSizing: 'border-box',
			width: '100%',
			height: '500px',
			backgroundColor: '#434343',
		};

		const {
			tagline,
			userLat,
			userLong,
			nearestLat,
			nearestLong,
			nearestName,
			vehicles,
			features,
		} = this.state;

		return (
			<Layout>
				<div className="relative">
					<div className="top-0 left-0 lg:ml-32 z-10 absolute py-4 px-8 bg-white bg-opacity-50">
						<img src="images/rr_marker.png" width="100" alt="Land Rover Logo" />
					</div>
					<div className="hero-container">
						<Slider {...settings}>
							<div className="relative">
								<div style={{ ...divStyle, backgroundImage: `url(${'images/636796262266615614VS.jpg'})`, backgroundPosition: 'right' }}>
									<div className="flex content-end flex-wrap">
										<div className="lg:w-1/2 text-right lg:text-center lg:p-24 w-full h-full">
											<h2 className="text-black lg:bg-white py-8 p-8 lg:mt-24 lg:ml-8 lg:bg-opacity-50 lg:w-2/3">
												Sign up for a contactless
												<br />
												test drive.
											</h2>
										</div>
										<div className="lg:w-1/2 text-center hidden lg:visible" />
									</div>
								</div>
							</div>
							<div className="">
								<div style={{ ...divStyle, backgroundImage: `url(${'images/636681046005411490KM.jpg'})`, backgroundPosition: 'center' }}>
									<div className="m-auto flex content-end flex-wrap lg:ml-48 lg:p-12 lg:justify-end">
										<div className="lg:w-1/2 hidden lg:visible" />
										<div className="lg:w-1/2 pl-16 sm:pl-24 md:pl-24 lg:pl-0 mt-24 lg:mt-0 text-right lg:mr-1/3 w-full h-full">
											<Map
												userLat={userLat}
												userLong={userLong}
												nearestLat={nearestLat}
												nearestLong={nearestLong}
											/>
										</div>
									</div>
								</div>
							</div>
							<div className="">
								<div style={{ ...divStyle, backgroundImage: `url(${'images/636796262266615614VS.jpg'})`, backgroundPosition: 'center' }}>
									Slide 3
								</div>
							</div>
							<div className="">
								<div style={{ ...divStyle, backgroundImage: `url(${'images/636681046005411490KM.jpg'})`, backgroundPosition: 'center' }}>
									Slide 4
								</div>
							</div>
						</Slider>
					</div>

					<div className="w-full max-w-6xl p-4 mx-auto md:px-8 md:py-16 justify-center items-center">
						<div className="w-full mb-4 text-center justify-center items-center">
							<h1 className="my-8 text-lg md:text-2xl">
								<TestCTA
									tagline={tagline}
									nearestName={nearestName}
								/>
							</h1>
						</div>

						<div className="flex mb-24 max-w-md justify-center items-center m-auto">
							<div className="w-2/3 px-2">
								<input className="input-reset bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" type="email" placeholder="Your email" />
							</div>
							<div className="w-1/3 px-2">
								<button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
									Sign Up
								</button>
							</div>
						</div>

						<div className="md:px-2">
							<div className="md:flex md:-mx-2 md:mb-12">
								{
									vehicles && vehicles.map((item: CarModelProps) => (
										<CarModelItem
											key={item.key}
											model={item.model}
											price={numberWithCommas(item.price)}
											shortdescription={item.shortdescription}
											thumbimage={item.thumbimage}
											exploreurl={item.exploreurl}
											buildurl={item.buildurl}
											accessories={item.accessories}
										/>
									))
								}
							</div>
						</div>
					</div>


					<div>
						<div className="md:flex mb-24 md:justify-center items-center bg-gray-200">
							<div className="md:w-2/3">
								<img src="images/637251633853208257CN.jpg" alt="Range Rover Gear" />
							</div>
							<div className="p-8 md:w-1/3 px-2 py-1/2 text-center">
								Get Range Rover branded gear on Amazon
								<br />
								<button type="submit" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
									Shop Now
								</button>
							</div>
						</div>
					</div>

					<div className="w-full max-w-6xl p-4 mx-auto md:px-8 md:py-16 justify-center items-center">

						<div className="px-2">
							<div className="flex -mx-2">
								{
									features && features.map((item: FeatureProps) => (
										<FeatureItem
											key={item.key}
											title={item.title}
											price={currency(item.price)}
											thumbimage={item.thumbimage}
											url={item.url}
										/>
									))
								}
							</div>
						</div>
					</div>
				</div>
			</Layout>
		);
	}
}
export default Home;
