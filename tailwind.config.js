/* eslint-disable quote-props */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
// const defaultTheme = require("tailwindcss/defaultTheme");
const indentTheme = require("tailwindcss-text-indent");
const plugin = require('tailwindcss/plugin');

module.exports = {
	theme: {
		minHeight: {
			'0': '0',
			'1/4': '25%',
			'1/2': '50%',
			'3/4': '75%',
			'full': '100%',
			'16': '16rem',
		},
		maxHeight: {
			hero: '50%',
		},
		extend: {
			colors: {
				coolblack: '#131921',
				bluebeacon: '#232f3e',
				subgray: '#cccccc',
			},
		},
		textIndent: (theme, { negative }) => ({
			...{
				// sm: '2rem',
				// md: '3rem',
				// lg: '4rem',
			},
			...negative({
				// sm: '2rem',
				// md: '3rem',
				// lg: '4rem',
			}),
		}),
	},
	variants: {
		textIndent: ['responsive'],
	},
	plugins: [
		indentTheme(),
		plugin(({ addBase, config }) => {
			addBase({
				h1: {
					fontSize: config('theme.fontSize.2xl'),
					fontWeight: config('theme.fontWeight.bold'),
				},
				h2: {
					fontSize: config('theme.fontSize.xl'),
					fontWeight: config('theme.fontWeight.bold'),
				},
				// h3: { fontSize: config('theme.fontSize.lg') },
			});
		}),
	],
};
