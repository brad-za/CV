import React, { useEffect, useState } from "react";

const useScrollPosition = () => {
	const [scrollPosition, setScrollPositon] = useState(window.scrollX);

	useEffect(() => {
		const setScroll = () => {
			setScrollPositon(window.scrollY);
		};
		window.addEventListener("scroll", setScroll);

		return () => {
			window.removeEventListener("scroll", setScroll);
		};
	}, []);
	return scrollPosition;
};

export default useScrollPosition;

// useEffect(() => {
// 	const setDimension = () => {
// 		setWindowSize({
// 			width: window.innerWidth,
// 			height: window.innerHeight,
// 		});
// 	};
// 	window.addEventListener("resize", setDimension);

// 	return () => {
// 		window.removeEventListener("resize", setDimension);
// 	};
// }, []);

// return windowSize;
