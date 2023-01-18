import React, { Suspense, useRef } from "react";

import Scene from "./Scene";
import Rotary from "./Info/Decisions";
import Intro from "./Info/Intro";
import StartingPoint from "./Info/StartingPoint";
import { Leva } from "leva";

const Keyboard = () => {
	const storyRef = useRef();

	return (
		// <Suspense fallback={null}>
		<div ref={storyRef} className="relative h-[300vh]">
			<Scene storyRef={storyRef} />
			<Leva
				collapsed // default = false, when true the GUI is collpased
			/>
			<div className="story">
				<Intro />
				<StartingPoint />
				<Rotary />
			</div>
		</div>
		// </Suspense>
	);
};

export default Keyboard;
