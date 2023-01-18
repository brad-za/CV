import React, { Suspense, useLayoutEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";

import Parts from "./Parts";
import { OrbitControls } from "@react-three/drei";

const Scene = ({ storyRef }) => {
	return (
		<div className="bg-blue- absolute h-full">
			<div className="bg-emerald- sticky top-0 h-screen w-screen ">
				<Canvas
					camera={{
						fov: 75,
						near: 0.1,
						far: 1000,
						position: [0, 0, 5.2],
					}}
					className=" "
				>
					{/* <OrbitControls /> */}
					<Parts storyRef={storyRef} />
				</Canvas>
			</div>
		</div>
	);
};

export default Scene;
