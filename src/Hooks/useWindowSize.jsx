import React, { useEffect, useState } from "react";

const useWindowSize = () => {
	const [windowSize, setWindowSize] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});

	useEffect(() => {
		const setDimension = () => {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};
		window.addEventListener("resize", setDimension);

		return () => {
			window.removeEventListener("resize", setDimension);
		};
	}, []);

	return windowSize;
};

export default useWindowSize;
