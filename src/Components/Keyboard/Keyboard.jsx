import React, { useRef, Suspense } from "react";
import Scene from "./Scene";
import Intro from "./Info/Intro";
import { Leva } from "leva";
import { AnimationProvider } from "./AnimationContext";
import Animations from "./Animations";

const Keyboard = () => {
	return (
		<div className="flex h-[200vh] flex-col">
			<div className="bg-violet- flex h-screen items-center justify-center">
				<Intro />
			</div>

			<div className="bg-violet- relative w-full">
				<AnimationProvider>
					<Animations />
					<Scene />
				</AnimationProvider>

				<Leva collapsed />
			</div>
		</div>
	);
};

export default Keyboard;
