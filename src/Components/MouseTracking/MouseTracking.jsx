import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import TextAnimation from "../Hero/TextAnimation";
import GalleryElements from "./GalleryElements";

const MouseTracking = ({ children }) => {
	const [mouseLabel, setMouseLabel] = useState(null);
	const viewWindowRef = useRef(null);
	const galleryRef = useRef(null);
	const [mousePosition, setMousePosition] = useState({});
	const [panAmount, setPanAmount] = useState({
		panX: (window.innerWidth / 4) * -1,
		panY: (window.innerHeight / 4) * -1,
	});
	const [textPanAmount, setTextPanAmount] = useState({
		panX: -1600,
		panY: 600,
	});
	const [maxGallerySize, setMaxGallerySize] = useState({});
	const [windowSize, setWindowSize] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});

	let gallerySize;

	useLayoutEffect(() => {
		// get the size of the viewing window in pixels
		gallerySize = {
			width: galleryRef.current.offsetWidth,
			height: galleryRef.current.offsetHeight,
		};

		setMaxGallerySize(() => {
			return {
				width: gallerySize.width - windowSize.width,
				height: gallerySize.height - windowSize.height,
			};
		});

		return () => {};
	}, [gallerySize]);

	const getDecimalMousePosition = (x, y) => {
		const decimalX = x / windowSize.width;
		const decimalY = y / windowSize.height;

		return { decimalX, decimalY };
	};

	const getPanAmount = (dec, maxSize) => {
		let panX = maxSize.width * dec.decimalX * -1;
		let panY = maxSize.height * dec.decimalY * -1;
		return { panX, panY };
	};

	useEffect(() => {
		setTextPanAmount(() => {
			return getPanAmount(
				getDecimalMousePosition(mousePosition.x, mousePosition.y),
				maxGallerySize,
			);
		});
		if (windowSize.width > "1024") {
			setPanAmount(() => {
				return getPanAmount(
					getDecimalMousePosition(mousePosition.x, mousePosition.y),
					maxGallerySize,
				);
			});
		} else {
			setPanAmount(() => {
				return { panX: 0, panY: 0 };
			});
		}
	}, [mousePosition]);

	const onMousePosChange = event => {
		setMousePosition(() => {
			return { x: event.pageX, y: event.pageY };
		});
	};

	let mouseOverElementHandler = element => {
		setMouseLabel(() => element);
	};

	return (
		<div onMouseMove={onMousePosChange}>
			{/* Mouse Ball */}
			<div className=" pointer-events-none z-30 cursor-none ">
				<div
					style={{
						mixBlendMode: "difference",
						transform: `translate(${
							mousePosition.x >= windowSize.width - 80
								? windowSize.width - 80
								: mousePosition.x >= 80
								? mousePosition.x
								: 80
						}px, ${
							mousePosition.y >= windowSize.height - 80
								? windowSize.height - 80
								: mousePosition.y >= 80
								? mousePosition.y
								: 80
						}px)`,
					}}
					className={`fixed -left-20 -top-20 z-40 grid  h-40 w-40 place-items-center  rounded-full bg-white duration-[75ms] `}
				>
					<p className="mt-16 text-3xl font-black text-black">
						{mouseLabel}
					</p>
				</div>
			</div>
			<div className="bg-chipDarkBlue md:overflow-hidden">
				<div
					ref={viewWindowRef}
					className=" h- relative w-[100vw] md:h-[100vh] md:overflow-hidden"
					// className="-mt-[40px] h-[100vh] w-[100vw] overflow-hidden"
				>
					<div
						style={{
							transform: `translate(${
								textPanAmount.panX * 0.1 * -1
							}px, ${textPanAmount.panY * 0.1 * -1}px)`,
						}}
						className="bg-blue- duration-250 absolute hidden h-full  w-full items-center justify-center ease-in-out  md:flex"
					>
						<div className="">
							<TextAnimation />
						</div>
					</div>
					<div
						ref={galleryRef}
						style={{
							transform: `translate(${panAmount.panX}px, ${panAmount.panY}px)`,
						}}
						className="ease h- relative w-full overflow-hidden duration-150 lg:h-[140vh]  lg:w-[140vw]"
						// className="ease relative h-[100vh] w-[100vw] transition duration-75"
					>
						<GalleryElements
							mouseOverElementHandler={mouseOverElementHandler}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MouseTracking;
