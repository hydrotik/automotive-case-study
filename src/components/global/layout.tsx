import * as React from 'react';
import classnames from 'classnames';
import dynamic from 'next/dynamic';

import Header from './header';

const Footer = dynamic(() => import('./footer'), { ssr: false });

type Props = {
	className?: string;
}

const Layout: React.FunctionComponent<Props> = ({
	children,
	className,
}) => (
	<div className={classnames('relative flex flex-col min-h-screen', className)}>
		<Header />
		{ children }
		<Footer />
	</div>
);

export default Layout;
