import Link from 'next/link';
// import React, { useState } from 'react';
import Head from 'next/head';


function Header(): JSX.Element {
	// const [isExpanded, toggleExpansion] = useState(false);
	const userFirstName = 'John';

	let sInput = '';

	const handleSearchClick = (): void => {
		window.location.href = `https://www.amazon.com/s?k=${sInput}`;
	};

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const handleChange = (e: any): void => {
		const { value } = e.target;
		sInput = value;
	};

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
						src: url('https://m.media-amazon.com/images/G/01/AUIClients/AmazonUIFont-amazonember_bd-46b91bda68161c14e554a779643ef4957431987b._V2_.woff2') format('woff2'),
							url('https://m.media-amazon.com/images/G/01/AUIClients/AmazonUIFont-amazonember_bd-46b91bda68161c14e554a779643ef4957431987b._V2_.woff') format('woff');
						font-weight: normal;
						font-style: normal;
					
					}

					@font-face {
						font-family: 'amazon_emberregular';
						src: url('https://m.media-amazon.com/images/G/01/AUIClients/AmazonUIFont-amazonember_rg-cc7ebaa05a2cd3b02c0929ac0475a44ab30b7efa._V2_.woff2') format('woff2'),
							url('https://m.media-amazon.com/images/G/01/AUIClients/AmazonUIFont-amazonember_rg-cc7ebaa05a2cd3b02c0929ac0475a44ab30b7efa._V2_.woff') format('woff');
						font-weight: normal;
						font-style: normal;
					
					}
					`}
				</style>
			</Head>

			<header className="relative top-0 z-50 flex flex-no-wrap items-center md:justify-between bg-coolblack">

				<Link href={`${process.env.BACKEND_URL}/`}>
					{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
					<a className="text-white text-xl mr-0 md:mr-10">
						<img src="images/logo.png" width="175" className="pd-0 min-w-1/2" alt="Amazon Logo" />
					</a>
				</Link>

				<img src="images/search_left.png" width="75" alt="Amazon Logo" className="flex-none flex-shrink-0" />

				<input onChange={handleChange} className="flex-grow border-none focus-none pd-0 m-0 text-l search-input min-w-0" alt="Amazon Logo" />

				<button
					onClick={handleSearchClick}
					onKeyDown={handleSearchClick}
					className="flex-none flex-shrink-0"
				>
					<img
						src="images/search_right.png"
						width="74"
						alt="Amazon Logo"
					/>
				</button>

				<img
					className="justify-right items-left flex-no-wrap lg:flex hidden lg:visible"
					src="images/nav_right.png"
					alt="Amazon navigation"
					width="350"
				/>

			</header>


			<nav className="relative top-0 z-50 flex flex-no-wrap items-center justify-left bg-bluebeacon">
				<img src="images/subhead_left.png" width="220" className="mr-2" alt="Amazon navigation" />
				<ul className="h-4 block text-xs whitespace-no-wrap overflow-hidden overflow-y">
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
						<li className="mr-6 justify-around float-left" key={navigationItem.title}>
							<Link href={navigationItem.route}>
								{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
								<a className="block text-subgray whitespace-no-wrap" href="">{navigationItem.title}</a>
							</Link>
						</li>
					))}
					<li className="mr-6 justify-around float-left clearfix">
						<a href="/gp/help/customer/accessibility" aria-label="Click to call our Disability Customer Support line, or reach us directly at 1-888-283-1678" className="nav-hidden-aria hidden">Disability Customer Support</a>
					</li>
				</ul>
				<div className="flex-grow" />
				<img src="images/subhead_right.png" width="227" alt="Amazon promo navigation" className="md:flex flex-col md:justify-right" />
			</nav>
		</header>
	);
}

export default Header;
