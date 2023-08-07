import React, { useState } from "react";
import { useEffect } from "react";

const useMousePosition = () => {
	const [mousePosition, setMousePosition] = useState({});

	useEffect(() => {
		const handleMouseMove = event => {
			// console.log(event.pageX, event.pageY);
			setMousePosition(() => {
				return { x: event.pageX, y: event.pageY };
			});
		};

		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return mousePosition;
};

export default useMousePosition;
