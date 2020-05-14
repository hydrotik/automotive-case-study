/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack');
const purgecss = require('@fullhuman/postcss-purgecss');
const optimizedImages = require('next-optimized-images');
const withSass = require('@zeit/next-sass');

const isProd = (process.env.NODE_ENV || 'production') === 'production';
const isGHProd = (process.env.GHPAGES_ENV) === 'true';
const isVercel = (process.env.VERCEL_ENV) === 'true';
const assetPrefix = ((isProd && isVercel) || !isProd) ? '' : '/hydrotik';

console.log(`production: ${isProd}`);
console.log(`GH Pages: ${isGHProd}`);
console.log(`Vercel: ${isVercel}`);

module.exports = {
	'process.env.BACKEND_URL': assetPrefix,
	exportPathMap: () => ({
		'/': { page: '/' },
		'/about': { page: '/about' },
		'/visualization': { page: '/visualization' },
		'/terms': { page: '/terms' },
		'/privacy': { page: '/privacy' },

	}),
	assetPrefix,
	webpack(config, { dev, isServer }) {
		config.plugins.push(
			new webpack.DefinePlugin({
				'process.env.ASSET_PREFIX': JSON.stringify(assetPrefix),
				'process.env.IS_GITHUBPAGES': isGHProd,
				'process.env.BACKEND_URL': JSON.stringify(assetPrefix),
			}),
		);
		config.module.rules.push({
			test: /\.(ts|tsx|js|jsx)$/,
			enforce: 'pre',
			exclude: /node_modules/,
			use: [
				{
					loader: 'eslint-loader',
					options: {
						emitWarning: !isProd,
					},
				},
			],
		});

		return config;
	},
};
