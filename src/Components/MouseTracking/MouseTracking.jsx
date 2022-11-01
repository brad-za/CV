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
	const [textPanAmount, setTextPanAmount] = useState({
		panX: -2000,
		panY: 800,
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
		// console.log({
		// 	panX: (window.innerWidth / 4) * -1,
		// 	panY: (window.innerHeight / 4) * -1,
		// });
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
		setTextPanAmount(
			getPanAmount(
				getDecimalMousePosition(mousePosition.x, mousePosition.y),
				maxGallerySize
			)
		);
		if (windowSize.width > "1024") {
			setPanAmount(
				getPanAmount(
					getDecimalMousePosition(mousePosition.x, mousePosition.y),
					maxGallerySize
				)
			);
		} else {
			setPanAmount({
				panX: 0,
				panY: 0,
			});
		}
	}, [mousePosition]);

	return (
		<div className="bg-chipDarkBlue md:overflow-hidden">
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
					console.log(panAmount.panX);
					// console.log(e.pageX, e.pageY);
					setMousePosition({
						x: e.pageX,
						y: e.pageY,
					});
				}}
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
					<GalleryElements panAmount={panAmount} />
				</div>
			</div>
		</div>
	);
};

export default MouseTracking;
