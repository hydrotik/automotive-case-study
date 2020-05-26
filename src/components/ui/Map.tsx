import React from 'react';

import {
	GoogleMap,
	LoadScript,
	// TrafficLayer,
	// DirectionsRenderer,
	Marker,
} from '@react-google-maps/api';

const Map = (props: {
	userLat: number;
	userLong: number;
	nearestLat: number;
	nearestLong: number;
}): JSX.Element => {
	const {
		userLat,
		userLong,
		nearestLat,
		nearestLong,
	} = props;


	const mapContainerStyle = {
		width: '85%',
		height: '275px',
	};

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const onClick = (...args: any): void => {
		// eslint-disable-next-line no-console
		console.log('onClick args: ', args);
	};

	const icon = {
		url: 'images/rr_marker.png',
		size: {
			width: 160,
			height: 84,
		},
		anchor: {
			x: 40,
			y: 21,
		},
		scaledSize: {
			width: 80,
			height: 42,
		},
	};

	return (
		userLat
		&& userLong
		&& nearestLat
		&& nearestLong
		&& userLat !== 0
		&& userLong !== 0
		&& nearestLat !== 0
		&& nearestLong !== 0
	)
		? (
			<LoadScript
				googleMapsApiKey={process.env.GOOGLE_API_KEY}
			>
				<GoogleMap
					id="bicycling-example"
					mapContainerStyle={mapContainerStyle}
					zoom={10}
					center={{ lat: userLat, lng: userLong }}
					onClick={onClick}
					options={{
						disableDefaultUI: true,
					}}
				>
					{/* <TrafficLayer
						onLoad={onLoad}
					/> */}
					<Marker position={{ lat: userLat, lng: userLong }} />
					<Marker
						position={{
							lat: nearestLat,
							lng: nearestLong,
						}}
						icon={icon}
					/>
					{/* <DirectionsRenderer directions={route} /> */}
				</GoogleMap>
			</LoadScript>
		) : (<></>);
};

export default Map;
