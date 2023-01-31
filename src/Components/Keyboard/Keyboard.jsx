import React, { Suspense, useRef } from "react";

import Scene from "./Scene";
import Rotary from "./Info/Rotary";
import Intro from "./Info/Intro";
import StartingPoint from "./Info/StartingPoint";
import ThumbCluster from "./Info/ThumbCluster";
import { Leva } from "leva";
import Columnar from "./Info/Columnar";

const Keyboard = () => {
	const storyRef = useRef();

	return (
		// <Suspense fallback={null}>
		<div ref={storyRef} className="relative h-[500vh]">
			<Scene storyRef={storyRef} />
			<Leva
				collapsed // default = false, when true the GUI is collpased
			/>
			<div className="story">
				<Intro />
				<StartingPoint />
				<Rotary />
				<ThumbCluster />
				<Columnar />
			</div>
		</div>
		// </Suspense>
	);
};

export default Keyboard;
