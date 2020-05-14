import { NextPage } from 'next';
import React from 'react';
import ProgressiveImage from 'react-progressive-image';
import Layout from '../components/global/layout';


type Props = {
	dynProp: string;
}

type SrcSetProps = {
	srcSet: string;
	sizes: string;
}

const Home: NextPage<{ dynProp: string }> = ({
	dynProp,
}) => (
	<Layout>
		<div className="bg-gray-400">
			<ProgressiveImage
				src="images/636796262266615614VS.jpg"
				srcSetData={{
					srcSet: 'images/636796262266615614VS.jpg 320w, images/636796262266615614VS.jpg 700w, images/636796262266615614VS.jpg 2000w',
					sizes: '(max-width: 2000px) 100vw, 2000px',
				}}
				placeholder="images/636796262266615614VS.jpg"
			>
				{(src: string, _loading: boolean, srcSetData: SrcSetProps): JSX.Element => (
					<img
						src={src}
						srcSet={srcSetData.srcSet}
						sizes={srcSetData.sizes}
						alt="Exterior of car"
						className="object-cover w-full"
					/>
				)}
			</ProgressiveImage>
		</div>

		<main className="flex-1 w-full max-w-4xl p-4 mx-auto md:px-8 md:py-16">
			<div className="flex flex-col md:items-left md:justify-left">
				<h1 className="my-8 text-lg md:text-2xl">
					{` ${dynProp} `}
					<br />
					<br />
				</h1>
			</div>
		</main>
	</Layout>
);

Home.getInitialProps = async (): Promise<Props> => {
	const dynProp = 'Take the ride of your life';
	return { dynProp };
};

export default Home;
