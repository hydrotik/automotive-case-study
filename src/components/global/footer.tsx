import * as React from 'react';

type Props = {
	footerTitle?: string;
	footerCopyright?: string;
}

const Footer: React.FunctionComponent<Props> = ({
	footerTitle = 'Range Rover is a registered trademark of Jaguar Land Rover North America, LLC.',
	footerCopyright = `All rights reserved. \u00A9 ${(new Date()).getFullYear()} Jaguar Land Rover North America, LLC.`,
}) => (
	<footer className="bg-gray-900">
		<ul className="flex items-center justify-center max-w-4xl mx-auto p-4 md:p-8 text-xs text-white">
			<li className="text-center">
				{ footerTitle }
				<br />
				{ footerCopyright }
			</li>
		</ul>
	</footer>
);

export default Footer;
