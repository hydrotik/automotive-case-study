import Link from 'next/link';
import { useState } from 'react';
import Head from 'next/head';


function Header(): JSX.Element {
	const [isExpanded, toggleExpansion] = useState(false);
	const userFirstName = 'John';
	return (
		<header className="bg-gray-900">

			<Head>
				<title>Use Case</title>
				<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
				<link rel="icon" href="/favicon.ico" type="image/x-icon" />
				<meta name="description" content="This is the description for the project" />
				<meta name="keywords" content="These are keywords for the project" />
				<meta name="author" content="Author will show up here" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />

				<style>
					{`
					@font-face {
						font-family: 'amazon_emberbold';
						src: url('/fonts/amazonember_bd-webfont.woff2') format('woff2'),
							url('/fonts/amazonember_bd-webfont.woff') format('woff');
						font-weight: normal;
						font-style: normal;
					
					}

					@font-face {
						font-family: 'amazon_emberbold_italic';
						src: url('/fonts/amazonember_bdit-webfont.woff2') format('woff2'),
							url('/fonts/amazonember_bdit-webfont.woff') format('woff');
						font-weight: normal;
						font-style: normal;
					
					}

					@font-face {
						font-family: 'amazon_emberheavy';
						src: url('/fonts/amazonember_he-webfont.woff2') format('woff2'),
							url('/fonts/amazonember_he-webfont.woff') format('woff');
						font-weight: normal;
						font-style: normal;
					
					}

					@font-face {
						font-family: 'amazon_emberheavy_italic';
						src: url('/fonts/amazonember_heit-webfont.woff2') format('woff2'),
							url('/fonts/amazonember_heit-webfont.woff') format('woff');
						font-weight: normal;
						font-style: normal;
					
					}

					@font-face {
						font-family: 'amazon_emberlight';
						src: url('/fonts/amazonember_lt-webfont.woff2') format('woff2'),
							url('/fonts/amazonember_lt-webfont.woff') format('woff');
						font-weight: normal;
						font-style: normal;
					
					}

					@font-face {
						font-family: 'amazon_emberlight_italic';
						src: url('/fonts/amazonember_ltit-webfont.woff2') format('woff2'),
							url('/fonts/amazonember_ltit-webfont.woff') format('woff');
						font-weight: normal;
						font-style: normal;
					
					}

					@font-face {
						font-family: 'amazon_embermedium';
						src: url('/fonts/amazonember_md-webfont.woff2') format('woff2'),
							url('/fonts/amazonember_md-webfont.woff') format('woff');
						font-weight: normal;
						font-style: normal;
					
					}

					@font-face {
						font-family: 'amazon_embermedium_italic';
						src: url('/fonts/amazonember_mdit-webfont.woff2') format('woff2'),
							url('/fonts/amazonember_mdit-webfont.woff') format('woff');
						font-weight: normal;
						font-style: normal;
					
					}

					@font-face {
						font-family: 'amazon_emberregular';
						src: url('/fonts/amazonember_rg-webfont.woff2') format('woff2'),
							url('/fonts/amazonember_rg-webfont.woff') format('woff');
						font-weight: normal;
						font-style: normal;
					
					}

					@font-face {
						font-family: 'amazon_emberitalic';
						src: url('/fonts/amazonember_rgit-webfont.woff2') format('woff2'),
							url('/fonts/amazonember_rgit-webfont.woff') format('woff');
						font-weight: normal;
						font-style: normal;
					
					}

					@font-face {
						font-family: 'amazon_emberthin';
						src: url('/fonts/amazonember_th-webfont.woff2') format('woff2'),
							url('/fonts/amazonember_th-webfont.woff') format('woff');
						font-weight: normal;
						font-style: normal;
					
					}
					
					@font-face {
						font-family: 'amazon_emberthin_italic';
						src: url('/fonts/amazonember_thit-webfont.woff2') format('woff2'),
							url('/fonts/amazonember_thit-webfont.woff') format('woff');
						font-weight: normal;
						font-style: normal;
					
					}
					`}
				</style>
			</Head>

			<header className="flex flex-wrap md:flex-no-wrap items-center justify-between bg-coolblack">

				<Link href={`${process.env.BACKEND_URL}/`}>
					{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
					<a className="text-white text-xl">
						<img src="images/logo.png" className="pd-0" alt="Amazon Logo" />
					</a>
				</Link>

				<img src="images/search_left.png" className="pd-0" alt="Amazon Logo" />

				<img src="images/search_bg.png" className="pd-0 flex-grow" alt="Amazon Logo" />

				<img src="images/search_right.png" className="pd-0" alt="Amazon Logo" />

				<img
					className="md:flex flex-col md:flex-row md:items-center md:justify-right text-sm w-full md:w-auto"
					src="images/nav_right.png"
					alt="Amazon navigation"
				/>

			</header>


			<nav className="flex flex-wrap md:flex-no-wrap items-center justify-between bg-bluebeacon">
				<button aria-label="Home Link" className="block md:hidden border border-white flex items-center px-3 py-2 rounded text-white" onClick={(): void => toggleExpansion(!isExpanded)}>
					<svg role="img" className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
						<title>Menu</title>
						<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
					</svg>
				</button>
				<img src="images/subhead_left.png" className="mr-2" alt="Amazon navigation" />
				<ul className="text-xs justify-left flex-grow items-left flex-no-wrap flex overflow-hidden whitespace-no-wrap">
					{[
						{ title: 'Fresh', route: `${process.env.BACKEND_URL}/` },
						{ title: 'Whole Foods', route: `${process.env.BACKEND_URL}/` },
						{ title: 'Prime Video', route: `${process.env.BACKEND_URL}/` },
						{ title: `${userFirstName}'s Amazon.com`, route: `${process.env.BACKEND_URL}/` },
						{ title: 'Sell', route: `${process.env.BACKEND_URL}/` },
						{ title: 'Help', route: `${process.env.BACKEND_URL}/` },
						{ title: 'Browsing History', route: `${process.env.BACKEND_URL}/` },
						{ title: 'Find a Gift', route: `${process.env.BACKEND_URL}/` },
						{ title: 'Buy Again', route: `${process.env.BACKEND_URL}/` },
						{ title: 'Best Sellers', route: `${process.env.BACKEND_URL}/` },
						{ title: 'Today\'s Deals', route: `${process.env.BACKEND_URL}/` },
						{ title: 'New Releases', route: `${process.env.BACKEND_URL}/` },
						{ title: 'Gift Cards', route: `${process.env.BACKEND_URL}/` },
					].map((navigationItem) => (
						<li className="mr-6 justify-around" key={navigationItem.title}>
							<Link href={navigationItem.route}>
								{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
								<a className="block text-subgray whitespace-no-wrap" href="">{navigationItem.title}</a>
							</Link>
						</li>
					))}
				</ul>
				<img src="images/subhead_right.png" alt="Amazon navigation" className="md:flex flex-col md:flex-row md:items-center md:justify-right text-sm w-full md:w-auto" />
			</nav>
		</header>
	);
}

export default Header;
