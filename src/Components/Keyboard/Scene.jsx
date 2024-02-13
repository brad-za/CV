import React, { Suspense, useLayoutEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";

import Parts from "./Parts";
import { OrbitControls, Preload } from "@react-three/drei";

const Scene = ({ storyRef }) => {
	const [animateRotary, setAnimateRotary] = useState(false);
	const [thumbClusterAnimation, setThumbClusterAnimation] = useState(false);
	const [columnarAnimation, setColumnarAnimation] = useState(false);
	const [switchAnimation, setSwitchAnimation] = useState(false);

	const toggleRotaryAnimation = () => {
		setAnimateRotary(!animateRotary);
	};
	const toggleThumbClusterAnimation = () => {
		setThumbClusterAnimation(!thumbClusterAnimation);
	};

	const toggleColumnarAnimation = () => {
		setColumnarAnimation(!columnarAnimation);
	};

	const toggleSwitchAnimation = () => {
		setSwitchAnimation(!switchAnimation);
	};

	return (
		<div className="bg-blue- absolute flex h-screen w-full items-center justify-center">
			<div className="flex flex-col">
				<button
					className="rounded-md bg-blue-300 p-3"
					onClick={() => toggleRotaryAnimation()}
				>
					Encoder
				</button>{" "}
				<button
					className="rounded-md bg-violet-300 p-3"
					onClick={() => toggleThumbClusterAnimation()}
				>
					ThumbCluster
				</button>
			</div>
			<div className="flex h-full w-2/3 items-center justify-center ">
				<Canvas
					camera={{
						fov: 75,
						near: 0.2,
						far: 1000,
						position: [0, 0, 5.2],
					}}
					className=" bg-"
				>
					<Preload all />
					<OrbitControls />
					<Parts
						storyRef={storyRef}
						thumbClusterAnimation={thumbClusterAnimation}
						animateRotary={animateRotary}
					/>
				</Canvas>
			</div>

			<div className="flex flex-col">
				<button
					className="rounded-md bg-yellow-300 p-3"
					onClick={() => toggleColumnarAnimation()}
				>
					Columnar
				</button>{" "}
				<button
					className="rounded-md bg-orange-300 p-3"
					onClick={() => toggleSwitchAnimation()}
				>
					Switches
				</button>
			</div>
		</div>
	);
};

export default Scene;
