import * as React from 'react';

type FooterProps = {
}

type FooterState = {
}

class Footer extends React.Component<FooterProps, FooterState> {
	componentDidMount(): void {
		// document.addEventListener('scroll', this.trackScrolling);
	}

	componentWillUnmount(): void {
		// document.removeEventListener('scroll', this.trackScrolling);
	}


	// trackScrolling = (): void => {
	// 	const wrappedElement: HTMLElement | null = document.querySelector('.content-container');
	// 	if (this.isBottom(wrappedElement)) {
	// 		// eslint-disable-next-line no-console
	// 		console.log('footer bottom reached');
	// 		// document.removeEventListener('scroll', this.trackScrolling);
	// 	}

	// 	// eslint-disable-next-line no-console
	// 	console.log(this.isBottom(wrappedElement));
	// };

	// isBottom = (el: HTMLElement | null): boolean => (
	// 	(el as HTMLElement).getBoundingClientRect().bottom <= window.innerHeight
	// );


	render(): JSX.Element {
		const date = (new Date()).getFullYear();

		return (
			<footer className="bg-forestgreendarkest w-full">
				<ul className="flex items-center justify-center max-w-4xl mx-auto p-4 md:p-8 text-xs text-white">
					<li className="text-center">
						Range Rover is a registered trademark of Jaguar Land Rover North America, LLC.
						<br />
						{ `All rights reserved. \u00A9 ${date} Jaguar Land Rover North America, LLC.` }
					</li>
				</ul>
			</footer>
		);
	}
}

export default Footer;
