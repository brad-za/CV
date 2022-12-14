import React from "react";
import { Perf } from "r3f-perf";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { PlaneGeometry } from "three";
import keybR from "../../assets/keyboard/rightKeyb.glb";
import keybL from "../../assets/keyboard/leftKeyb.glb";

const Keyboard = () => {
	const rightKeyb = useGLTF(keybR);
	const leftKeyb = useGLTF(keybL);

	return (
		<div className="h-screen ">
			<Canvas>
				<Perf position="top-left" />

				<OrbitControls makeDefault />

				<directionalLight
					castShadow
					position={[1, 2, 3]}
					intensity={1.5}
				/>
				<ambientLight intensity={0.5} />
				{/* 
				<mesh
					receiveShadow
					position-y={-1}
					rotation-x={-Math.PI * 0.5}
					scale={10}
				>
					<planeGeometry />
					<meshStandardMaterial color="greenyellow" />
				</mesh> */}
				<primitive object={rightKeyb.scene} scale={0.02} />
				<primitive object={leftKeyb.scene} scale={0.02} />
			</Canvas>
		</div>
	);
};

export default Keyboard;
