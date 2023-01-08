import React, { Suspense, useRef } from "react";

import Scene from "./Scene";
import Decisions from "./Info/Decisions";
import Intro from "./Info/Intro";
import StartingPoint from "./Info/StartingPoint";

const Keyboard = () => {
	const storyRef = useRef();

	return (
		// <Suspense fallback={null}>
		<div ref={storyRef} className="relative h-[300vh]">
			<Scene storyRef={storyRef} />
			<div className="story">
				<Intro />
				<StartingPoint />
				<Decisions />
			</div>
		</div>
		// </Suspense>
	);
};

export default Keyboard;
