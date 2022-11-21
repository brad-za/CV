import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import TextAnimation from "../Hero/TextAnimation";
import GalleryElements from "./GalleryElements";

const MouseTracking = ({ children }) => {
	4;
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

	let gallerySize;

	useLayoutEffect(() => {
		// get the size of the viewing window in pixels
		gallerySize = {
			width: galleryRef.current.offsetWidth,
			height: galleryRef.current.offsetHeight,
		};

		setMaxGallerySize({
			width: gallerySize.width - windowSize.width,
			height: gallerySize.height - windowSize.height,
		});

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
		<div
			onMouseMove={e => {
				setMousePosition({
					x: e.pageX,
					y: e.pageY,
				});
			}}
		>
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
							panAmount={panAmount}
							mousePosition={mousePosition}
							windowSize={windowSize}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MouseTracking;
