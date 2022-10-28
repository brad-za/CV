import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import TextAnimation from "../Hero/TextAnimation";
import GalleryElements from "./GalleryElements";

const MouseTracking = ({ children }) => {
	const viewWindowRef = useRef(null);
	const galleryRef = useRef(null);
	const [mousePosition, setMousePosition] = useState({});
	const [panAmount, setPanAmount] = useState({
		panX: (window.innerWidth / 4) * -1,
		panY: (window.innerHeight / 4) * -1,
	});
	const [maxGallerySize, setMaxGallerySize] = useState({});
	const [windowSize, setWindowSize] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});

	//   const resized = () => {
	//     setWindowSize({
	//       width: window.innerWidth,
	//       height: window.innerHeight,
	//     });
	//   };

	let gallerySize;

	useLayoutEffect(() => {
		console.log({
			panX: (window.innerWidth / 4) * -1,
			panY: (window.innerHeight / 4) * -1,
		});
		// get the size of the viewing window in pixels
		gallerySize = {
			width: galleryRef.current.offsetWidth,
			height: galleryRef.current.offsetHeight,
		};

		setMaxGallerySize({
			width: gallerySize.width - windowSize.width,
			height: gallerySize.height - windowSize.height,
		});

		// setPanAmount({
		// 	width: gallerySize.width / 2,
		// 	height: gallerySize.height / 2,
		// });
		// console.log(gallerySize, gallerySize.width / 2);

		return () => {};
	}, []);

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
		console.log(windowSize);
		console.log(windowSize.height - 40);
		console.log(
			mousePosition.y <= windowSize.height - 60
				? windowSize.height - 60
				: mousePosition.y
		);
		return setPanAmount(
			getPanAmount(
				getDecimalMousePosition(mousePosition.x, mousePosition.y),
				maxGallerySize
			)
		);
	}, [mousePosition]);

	return (
		<div className="overflow-hidden bg-chipDarkBlue">
			<div
				// style={{
				// 	transform: `translate(${panAmount.panX * 0.2 * -1}px, ${
				// 		panAmount.panY * 0.2 * -1
				// 	}px)`,
				// }}
				className="ease bg-blue- absolute flex h-full w-full items-center justify-center transition duration-75"
			>
				<div className=" bg- mb-[6%] ml-[15%] w-full">
					<TextAnimation />
				</div>
			</div>
			<div
				style={{
					transform: `translate(${
						mousePosition.x >= windowSize.width - 40
							? windowSize.width - 40
							: mousePosition.x
					}px, ${
						mousePosition.y >= windowSize.height - 40
							? windowSize.height - 40
							: mousePosition.y
					}px)`,
				}}
				className={`ease absolute z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white duration-75 `}
			/>
			<div
				onMouseMove={e => {
					console.log(e.pageX, e.pageY);
					setMousePosition({
						x: e.pageX,
						y: e.pageY,
					});
				}}
				ref={viewWindowRef}
				className=" h-[100vh] w-[100vw] overflow-hidden"
				// className="-mt-[40px] h-[100vh] w-[100vw] overflow-hidden"
			>
				<div
					ref={galleryRef}
					style={{
						transform: `translate(${panAmount.panX}px, ${panAmount.panY}px)`,
					}}
					className="ease relative h-[140vh] w-[140vw] overflow-hidden  duration-150"
					// className="ease relative h-[100vh] w-[100vw] transition duration-75"
					onClick={() => {
						console.log(
							getPanAmount(
								getDecimalMousePosition(
									mousePosition.x,
									mousePosition.y
								),
								maxGallerySize
							)
						);
					}}
				>
					<GalleryElements panAmount={panAmount} />
				</div>
			</div>
		</div>
	);
};

export default MouseTracking;
