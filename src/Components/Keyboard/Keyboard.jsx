import React, { useRef } from "react";
import Scene from "./Scene";
import Intro from "./Info/Intro";
import { Leva } from "leva";

const Keyboard = () => {
	return (
		<div className="flex h-[200vh] flex-col">
			<div className="bg-violet- flex h-screen items-center justify-center">
				<Intro />
			</div>

			<div className="bg-violet- relative w-full">
				<Scene />
				<Leva collapsed />
			</div>
		</div>
	);
};

export default Keyboard;
