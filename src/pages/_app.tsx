import '../css/index.scss';
import 'pure-react-carousel/dist/react-carousel.es.css';
import React from 'react';
// import { render } from 'preact';
// import { PureComponent } from 'preact/compat';
import App from 'next/app';

class MyApp extends App {
	render(): JSX.Element {
		const { Component, pageProps } = this.props;
		return <Component {...pageProps} />;
	}
}

export default MyApp;
