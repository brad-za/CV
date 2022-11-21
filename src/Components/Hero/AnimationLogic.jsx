import React, { useEffect, useRef, useState } from "react";
import AppScreen from "./AppsScreen.jsx";
import WelcomeScreen from "./WelcomeScreen.jsx";
import AnimationWindow from "./AnimationWindow.jsx";

function AnimationLogic({}) {
	const [size, setSize] = useState(false);
	const [moveScreenUp, setMoveScreenUp] = useState(true);
	const moveScreenDown = useRef(false);
	const animationIter = useRef(0);
	const screenSizeChanging = useRef(false);
	const ScreenSizeChangingTimer = useRef(0);
	const moveScreenDownTimer = useRef(0);
	const busyAnimationTimer = useRef(0);

	const animationLoop = () => {
		// console.log(
		//   `step 1: screen SIZE countdown has started (${animationIter.current})`
		// );
		ScreenSizeChangingTimer.current = setTimeout(() => {
			//   console.log("step 2: screen SIZE animation should be taking place");
			setSize(!size);
			screenSizeChanging.current = true;
			busyAnimationTimer.current = setTimeout(() => {
				animationIter.current++;
				setMoveScreenUp(!moveScreenUp);
				// console.log(
				//   `step 3: screen slide ${
				//     moveScreenUp ? "up" : "down"
				//   } animation should be taking place for 5 seconds.`
				// );
			}, "5000");
		}, "12000");
	};

	useEffect(() => {
		animationLoop();

		return () => {
			clearTimeout(ScreenSizeChangingTimer.current);
			clearTimeout(busyAnimationTimer.current);
		};
	}, [animationIter.current]);
	const perspectiveStyle = {
		transform: "rotateY(11deg)",
		perspective: "1000px",
	};
	return (
		<div style={perspectiveStyle} className=" bg-blue- mb-24">
			<AnimationWindow perspectiveStyle={perspectiveStyle} size={size}>
				<div
					style={{ animationFillMode: "forwards" }}
					className={`bg-slate- h-full rounded-lg
                    ${
						animationIter.current > 1 &&
						(moveScreenUp
							? " animate-moveScreenUp"
							: " animate-moveScreenDown")
					}
                    `}
				>
					<WelcomeScreen moveScreenUp={moveScreenUp} size={size} />
					<AppScreen moveScreenUp={moveScreenUp} size={size} />
				</div>
			</AnimationWindow>
		</div>
	);
}

export default AnimationLogic;
