import React, { Suspense, useLayoutEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";

import Parts from "./Parts";
import { OrbitControls, Preload } from "@react-three/drei";
import { useAnimation } from "./AnimationContext";
import Loader from "./LoadingScreen";

const Scene = ({ storyRef }) => {
	return (
		<div className="bg-blue- absolute flex h-screen w-full items-center justify-center">
			<div className="flex h-full w-2/3 items-center justify-center ">
				<Canvas
					camera={{
						fov: 75,
						near: 0.2,
						far: 1000,
						position: [0, 0, 5.2],
					}}
				>
					<Preload all />
					<OrbitControls />
					<Parts
						storyRef={storyRef}
						// thumbClusterAnimation={thumbClusterAnimation}
						// animateRotary={animateRotary}
					/>
				</Canvas>
			</div>
		</div>
	);
};

export default Scene;
