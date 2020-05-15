import { NextPage } from 'next';
import React from 'react';
import Slider from 'react-slick';
// import ProgressiveImage from 'react-progressive-image';
import Layout from '../components/global/layout';


type Props = {
	dynProp: string;
}

type SrcSetProps = {
	srcSet: string;
	sizes: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SampleNextArrow = (props: any): JSX.Element => {
	const { onClick } = props;
	return (
		<div
			className="arrow arrow--right slick-next"
			tabIndex={0}
			role="button"
			aria-label="Slide Right"
			onClick={onClick}
			onKeyDown={onClick}
		>
			<span />
		</div>
	);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SamplePrevArrow = (props: any): JSX.Element => {
	const { onClick } = props;
	return (
		<div
			className="arrow arrow--left slick-prev"
			tabIndex={-1}
			role="button"
			aria-label="Slide Left"
			onClick={onClick}
			onKeyDown={onClick}
		>
			<span />
		</div>
	);
};

const Home: NextPage<{ dynProp: string }> = ({
	dynProp,
}) => {
	const settings = {
		customPaging(i: number): JSX.Element {
			return (
				<button>
					{ `Slide ${i + 1}` }
				</button>
			);
		},
		dots: true,
		dotsClass: 'slick-dots slick-thumb',
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	};

	return (
		<Layout>
			<div className="max-h-hero">
				<Slider {...settings}>
					<div className="pd-0 m-0 h-auto">
						<img src="images/636796262266615614VS.jpg" alt="Slide 1" className=" w-full" />
					</div>
					<div className="pd-0 m-0 h-auto">
						<img src="images/636681046005411490KM.jpg" alt="Slide 2" className=" w-full" />
					</div>
					<div className="pd-0 m-0 h-auto">
						<img src="images/636796262266615614VS.jpg" alt="Slide 3" className=" w-full" />
					</div>
					<div className="pd-0 m-0 h-auto">
						<img src="images/636681046005411490KM.jpg" alt="Slide 4" className=" w-full" />
					</div>
				</Slider>
				{/* <ProgressiveImage
					src="images/636796262266615614VS.jpg"
					srcSetData={{
						srcSet: 'images/636796262266615614VS.jpg 320w, images/636796262266615614VS.jpg 700w,
							images/636796262266615614VS.jpg 2000w',
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
				</ProgressiveImage> */}
			</div>

			<main className="flex-1 w-full max-w-4xl p-4 mx-auto md:px-8 md:py-16">
				<div className="flex flex-col md:items-center md:justify-center">
					<h1 className="my-8 text-lg md:text-2xl">
						{` ${dynProp} `}
						<br />
						<br />
					</h1>
				</div>
			</main>
		</Layout>
	);
};

Home.getInitialProps = async (): Promise<Props> => {
	const dynProp = 'Take the ride of your life';
	return { dynProp };
};

export default Home;
