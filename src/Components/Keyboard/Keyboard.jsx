import React, { Suspense, useRef } from "react";

import Scene from "./Scene";
import Rotary from "./Info/Rotary";
import Intro from "./Info/Intro";
import StartingPoint from "./Info/StartingPoint";
import ThumbCluster from "./Info/ThumbCluster";
import { Leva } from "leva";

const Keyboard = () => {
	const storyRef = useRef();

	return (
		// <Suspense fallback={null}>
		<div ref={storyRef} className="relative h-[400vh]">
			<Scene storyRef={storyRef} />
			<Leva
				collapsed // default = false, when true the GUI is collpased
			/>
			<div className="story">
				<Intro />
				<StartingPoint />
				<Rotary />
				<ThumbCluster />
			</div>
		</div>
		// </Suspense>
	);
};

export default Keyboard;
