import React, { createRef } from 'react';
import Slider from 'react-slick';
import CSS from 'csstype';
import dynamic from 'next/dynamic';
import {
	Twitter,
	Facebook,
	Pinterest,
} from 'react-social-sharing';
// import { Spring, animated } from 'react-spring';
import StarRatingComponent from 'react-star-rating-component';
import Layout from '../components/global/layout';
import EmailSignup from '../components/ui/EmailSignup';
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
		<div className="w-full lg:w-1/3 md:px-2 mb-20 md:mb-10 lg:mb-0">
			<div className="md:overflow-hidden md:shadow-lg bg-white">
				<img className="w-full" src={thumbimage} alt={model} />
				<div className="px-6 py-4 lg:min-h-16 mb-4 md:mb-0">
					<div className="font-bold text-xl mb-2">{ model }</div>
					<p className="text-gray-700 text-base mb-4">
						{ shortdescription }
					</p>
					<div className="text-gray-600 text-sm mb-2">{ `Starts at $${price}` }</div>
				</div>
				<div className="px-6 md:py-4">
					<a href={exploreurl} target="_blank" rel="noreferrer" className="hover:bg-forestgreendark hover:text-white mb-2 block bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mr-2">Explore</a>
					<a href={buildurl} target="_blank" rel="noreferrer" className="hover:bg-forestgreendark hover:text-white mb-2 block bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mr-2">Build Your own</a>
					<a href={accessories} className="hover:bg-forestgreendark hover:text-white mb-2 block bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mr-2">{ `${model} Accessories on Amazon` }</a>
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
	inventory: number;
	rating: number;
	reviews: number;
}

const FeatureItem = (props: FeatureProps): JSX.Element => {
	const {
		title,
		price,
		thumbimage,
		url,
		inventory,
		rating,
		reviews,
	} = props;

	const [pref, suf] = (price as string).split('.');

	return (
		<div className="w-full p-6 sm:w-1/2 md:w-1/2 lg:w-1/4 flex flex-col justify-center items-center max-w-sm mx-auto my-8">
			<div
				style={{
					backgroundImage: `url("${thumbimage}")`,
				}}
				className="bg-gray-300 h-64 w-full shadow-md bg-cover bg-center"
			/>
			<div className="w-64 sm:w-56 md:w-64 lg:w-56 bg-white -mt-10 shadow-lg overflow-hidden">
				<div className="py-2 text-center font-bold uppercase tracking-wide text-gray-800">
					<a href={url}>
						{ title }
					</a>
				</div>
				<div className="flex items-center justify-between py-2 px-3 bg-gray-400 bg-opacity-50">
					{/* <h2 className="text-gray-800 font-bold ">{ `${price}` }</h2> */}
					<span
						className="inline-block font-weight-400 text-black text-2xl"
						aria-label={`$${price}`}
					>
						<span className="align-top">
							<span className="relative text-xs align-top top-3/5">$</span>
							<span className="relative align-bottom">{ pref }</span>
							<span className="hidden">.</span>
							<span className="relative text-xs align-top top-3/5">{ suf }</span>
						</span>
					</span>
					<a href={url} className="mt-2 bg-forestgreenlight hover:bg-forestgreendark text-white font-bold py-1 px-4 rounded">Add to cart</a>
				</div>
				<div className="text-sm text-gray-700 flex items-center justify-between py-2 px-3 bg-gray-400 bg-opacity-50">
					<span className="align-top relative">
						<StarRatingComponent
							name="rate1"
							editing={false}
							starColor="#ffb400"
							emptyStarColor="#aaaaaa"
							renderStarIcon={(): JSX.Element => <span>★</span>}
							starCount={5}
							value={rating}
						/>
						<span className="relative bottom-2/5">{ ` ${reviews}`}</span>
					</span>
					<span className="text-xs relative bottom-1/5">{ `${inventory} available` }</span>
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
interface RefObject<T> {
	// immutable
	readonly current: T | null;
}

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

// const urlParallax = (name: string, wrap = false): string => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`;

class Home extends React.Component<HomeProps, HomeState> {
	private parallax = createRef();

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
				<div className="content-container relative">
					<div className="top-0 left-0 lg:ml-32 z-10 absolute py-4 px-8 bg-white bg-opacity-50">
						<img src="images/rr_marker.png" width="100" alt="Land Rover Logo" />
					</div>
					<div className="hero-container">
						<Slider {...settings}>
							<div className="relative">
								<div style={{ ...divStyle, backgroundImage: `url(${'images/636796262266615614VS.jpg'})` }} className="bg-right">
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
								<div style={{ ...divStyle, backgroundImage: `url(${'images/636681046005411490KM.jpg'})` }} className="bg-center">
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

						<EmailSignup />

					</div>


					<div className="md:w-full md:max-w-6xl md:p-4 md:mx-auto md:px-8 md:py-16 md:justify-center md:items-center">

						<div className="md:px-2">
							<div className="lg:flex md:-mx-2 md:mb-12">
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
						<div className="bg-gray-200 mb-12">
							<div className="">
								<a
									href="https://www.amazon.com/LEGO-Technic-Defender-Building-Overbox/dp/B07VFDRT8B/"
								>
									<img src="images/xlr_LEGO_NewDefender90_profile_D.jpg.pagespeed.ic.5mc54arMVF.jpg" width="100%" alt="Range Rover Gear" />
								</a>
							</div>
							<div className="p-8 text-center py-16">
								<p className="mb-8">Get official Range Rover branded gear on Amazon</p>
								<a
									href="https://www.amazon.com/stores/Land+Rover/page/897DDE0C-BEFA-4079-ACE5-08525C8AEA2A"
									className="mt-4 bg-forestgreenlight hover:bg-forestgreendark text-white font-bold py-2 px-4 rounded"
								>
									Shop Now
								</a>
							</div>
						</div>
					</div>

					<div className="w-full max-w-6xl p-4 lg:p-1 mx-auto md:px-8 md:py-16 md:py-16 justify-center items-center mb-20">

						<div className="px-2">
							<div className="flex -mx-2 flex-wrap">
								{
									features && features.map((item: FeatureProps) => (
										<FeatureItem
											key={item.key}
											title={item.title}
											price={currency(item.price, false)}
											thumbimage={item.thumbimage}
											url={item.url}
											inventory={item.inventory}
											rating={item.rating}
											reviews={item.reviews}
										/>
									))
								}
							</div>
						</div>
					</div>

					<div className="w-full max-w-6xl p-4 lg:p-1 mx-auto md:px-8 md:py-16 md:py-16 text-center align-center mb-48">
						<h2 className="mb-4">Share</h2>
						<h3 className="mb-4">Share this page with your friends.</h3>
						<div className="px-2">
							<div className="flex justify-center items-center text-4xl">
								<Twitter simple link="https://www.amazon.com/range-rover-test-drive" />
								<Facebook simple link="https://www.amazon.com/range-rover-test-drive" />
								<Pinterest simple link="https://www.amazon.com/range-rover-test-drive" />
							</div>
						</div>
					</div>

					{/* <Spring
						native
						from={{ y: 0 }}
						to={{ y: 20 }}
					>
						{({ y }): JSX.Element => (
							<animated.div
								style={{
									// If you can, use plain animated values like always, ...
									// You would do that in all cases where values "just fit"
									transform: y?.interpolate((dy) => `translateY(${dy}px`),
									backgroundImage: `url(${'images/15232292419_af49a4e0f3_o.jpg'})`,
									backgroundRepeat: 'no-repeat',
									backgroundSize: 'cover',
									width: '100%',
									height: '100%',
									zIndex: -1,
									position: 'absolute',
									top: 0,
									bottom: 0,
									left: 0,
									right: 0,
									opacity: '15%',
								}}
							>
								Hello
							</animated.div>
						)}
					</Spring> */}
				</div>
			</Layout>
		);
	}
}
export default Home;
