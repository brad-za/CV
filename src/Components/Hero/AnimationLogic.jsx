import React, { useEffect, useRef, useState } from "react";
import AppScreen from "./AppsScreen.jsx";
import WelcomeScreen from "./WelcomeScreen.jsx";
import AnimationWindow from "./AnimationWindow.jsx";
import { HeroAnimationSettings } from "../../Hooks/useHeroAnimationSettings.jsx";

function AnimationLogic({}) {
	const [size, setSize] = useState(false); // bool value for which size to be, mobile / desktop

	const [windowSize, setWindowSize] = useState(" h-[620px] w-[1000px] ");
	const [moveScreenVert, setMoveScreenVert] = useState(" ");
	const [moveScreenHorz, setMoveScreenHorz] = useState(true);
	const [animationState, setAnimationState] = useState("");
	const animationIter = useRef(0);

	const {
		isOpen,
		changeSize,
		moveVertically,
		moveHorizontally,
		textAnimation,
		sizeTiming,
		verticalTiming,
		horizontaltiming,
		textTiming,
	} = HeroAnimationSettings();

	const delay = ms => new Promise(res => setTimeout(res, ms));

	const animationLoop = async () => {
		console.log(
			`animation iteration ${animationIter.current} : \n ${moveScreenVert} | ${windowSize}`,
		);
		console.log({ changeSize, moveVertically });
		if (changeSize) {
			await delay(sizeTiming);
			changeWindowSize();
		}

		if (moveVertically) {
			await delay(verticalTiming);
			moveScreenVertical();
		}

		animationIter.current += 1;
	};

	const changeWindowSize = () => {
		// reponsible for making the window size bigger / smaller
		// variable windowSize is a bool that will be true if big and false if small

		// if (animationIter.current !== 1) {
		if (true) {
			if (windowSize == "h-[620px] w-[1000px] ") {
				setWindowSize("h-[580px] w-[300px] ");
			} else setWindowSize("h-[620px] w-[1000px] ");
		}
	};

	const moveScreenVertical = () => {
		// responsible for moving the screen up / down
		// wait for the first iteration cycle
		// variable moveScreenVert is a text value that will hold the tailwind animation string

		if (animationIter.current !== 1) {
			if (moveScreenVert == " animate-moveScreenUp") {
				setMoveScreenVert(" animate-moveScreenDown");
			} else setMoveScreenVert(" animate-moveScreenUp");
		}
	};

	const moveScreenHorizontal = () => {
		// responsible for moving the screen left / right
		// wait for the x iteration cycle
		// variable moveScreenHorz is a bool that will go up if true and down if false
	};

	useEffect(() => {
		animationLoop();
	}, [animationIter.current]);

	const perspectiveStyle = {
		transform: "rotateY(11deg)",
		perspective: "1000px",
	};

	return (
		<>
			<div style={perspectiveStyle} className=" bg-blue- mb-24">
				<AnimationWindow
					perspectiveStyle={perspectiveStyle}
					windowSize={windowSize}
					moveScreenVert={moveScreenVert}
				>
					<WelcomeScreen />
					<AppScreen />
				</AnimationWindow>
			</div>
		</>
	);
}

export default AnimationLogic;
