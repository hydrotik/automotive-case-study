import { NextPage } from 'next';
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import CSS from 'csstype';
import {
	GoogleMap,
	LoadScript,
	// TrafficLayer,
	// DirectionsRenderer,
	Marker,
} from '@react-google-maps/api';
import Layout from '../components/global/layout';


type Props = {
	dynProp: string;
	nearestDealer: PlacesProps;
	mapCenter?: {
		lng: number;
		lat: number;
	};
}

type PlacesProps = {
	geometry: {
		location: {
			lat: number;
			lng: number;
		};
		viewport: {
			northeast: {
				lat: number;
				lng: number;
			};
			southwest: {
				lat: number;
				lng: number;
			};
		};
	};
	name: string;
}

type SrcSetProps = {
	srcSet: string;
	sizes: string;
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

const Home: NextPage<{ dynProp: string; nearestDealer: PlacesProps }> = ({
	dynProp,
	nearestDealer,
}) => {
	// const [longitude, latitude, onLocationData] = useState({});
	const [longitude, setLongitude] = useState(
		0,
	);

	const [latitude, setLatitude] = useState(
		0,
	);

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

	const mapContainerStyle = {
		width: '85%',
		height: '275px',
	};

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const onClick = (...args: any): void => {
		// eslint-disable-next-line no-console
		console.log('onClick args: ', args);
	};

	interface PositionCalback {
		(position: LocationResponseProps): void;
	}

	const getLocation = (callback: PositionCalback): void => {
		if (window.navigator.geolocation) {
			window.navigator.geolocation.getCurrentPosition(callback);
		} else {
			// eslint-disable-next-line no-console
			console.warn('Geolocation is not supported by this browser.');
		}
	};

	useEffect(() => {
		getLocation((position: LocationResponseProps) => {
			setLatitude(position.coords.latitude);
			setLongitude(position.coords.longitude);
		});
	});

	return (
		<Layout>
			<div className="hero-container">
				<Slider {...settings}>
					<div className="relative">
						<div style={{ ...divStyle, backgroundImage: `url(${'images/636796262266615614VS.jpg'})`, backgroundPosition: 'right' }}>
							<div className="flex content-end flex-wrap py-32">
								<div className="w-1/2 text-center">
									<button className="my-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
										Slide 1 CTA 1
									</button>
									<br />
									<button className="my-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
										Slide 1 CTA 2
									</button>
								</div>
								<div className="w-1/2 text-center" />
							</div>
						</div>
					</div>
					<div className="">
						<div style={{ ...divStyle, backgroundImage: `url(${'images/636681046005411490KM.jpg'})`, backgroundPosition: 'center' }}>
							<div className="flex content-end flex-wrap ml-48 p-12 justify-end">
								<div className="w-1/2 text-center text-white" />
								<div className="w-1/2 text-right mr-1/3">
									<LoadScript
										googleMapsApiKey={process.env.GOOGLE_API_KEY}
									>
										<GoogleMap
											id="bicycling-example"
											mapContainerStyle={mapContainerStyle}
											zoom={10}
											center={{ lng: longitude, lat: latitude }}
											onClick={onClick}
											options={{
												disableDefaultUI: true,
											}}
										>
											{/* <TrafficLayer
												onLoad={onLoad}
											/> */}
											<Marker position={{ lng: longitude, lat: latitude }} />
											<Marker position={{
												lat: nearestDealer.geometry.location.lat,
												lng: nearestDealer.geometry.location.lng,
											}}
											/>
											{/* <DirectionsRenderer directions={route} /> */}
										</GoogleMap>
									</LoadScript>
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

			<main className="flex-1 w-full max-w-4xl p-4 mx-auto md:px-8 md:py-16">
				<div className="flex flex-col md:items-center md:justify-center">
					<h1 className="my-8 text-lg md:text-2xl">
						{` ${dynProp} `}
						with
						{ ` ${nearestDealer.name}` }
						<br />
						<br />
						<input className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" type="email" placeholder="jane@example.com" />
					</h1>
				</div>
			</main>
		</Layout>
	);
};


type ResponseProps = {
	candidates: PlacesProps[];
}

type LocationResponseProps = {
	coords: {
		longitude: number;
		latitude: number;
	};
}

Home.getInitialProps = async (): Promise<Props> => {
	const dynProp = 'Register to take the ride of your life';

	const apiURL = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Land%20Rover&inputtype=textquery&fields=name,geometry&key=${process.env.GOOGLE_API_KEY}`;

	const response = await fetch(apiURL);
	const data = await response.json();
	// eslint-disable-next-line no-console
	console.log(data);
	const { candidates } = (data as ResponseProps);
	const [nearestDealer] = candidates;

	return { dynProp, nearestDealer };
};

export default Home;
