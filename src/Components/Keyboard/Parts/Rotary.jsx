/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import rotary from "../../../assets/keyboard/rotary.glb";

import colourS from "../../../assets/keyboard/brushedMetal/Metal009_1K_ColorS.jpg";
import colour from "../../../assets/keyboard/brushedMetal/Metal009_1K_Color.jpg";
import normal from "../../../assets/keyboard/brushedMetal/Metal009_1K_NormalGL.jpg";
import roughness from "../../../assets/keyboard/brushedMetal/Metal009_1K_Roughness.jpg";
import metal from "../../../assets/keyboard/brushedMetal/Metal009_1K_Metalness.jpg";
import ao from "../../../assets/keyboard/brushedMetal/Metal_Steel_Brushed_001_ambientOcclusion.jpg";

import colourC from "../../../assets/keyboard/copperMetal/Metal047A_1K_Color.jpg";
import normalC from "../../../assets/keyboard/copperMetal/Metal047A_1K_NormalGL.jpg";
import roughnessC from "../../../assets/keyboard/copperMetal/Metal047A_1K_Roughness.jpg";
import metalC from "../../../assets/keyboard/copperMetal/Metal047A_1K_Metalness.jpg";
import gsap from "gsap";
import { useAnimation } from "../AnimationContext";
// import aoC from "../../../assets/keyboard/brushedMetal/Metal_Steel_Brushed_001_ambientOcclusion.jpg";

export default function Model() {
	const { nodes, materials } = useGLTF(rotary);
	const { rotaryRef } = useAnimation();

	const brushedMetal = useTexture({
		map: colour, // colour map
		normalMap: normal,
		roughnessMap: roughness,
		metalnessMap: metal,
		aoMap: ao,
	});
	const brushedMetalS = useTexture({
		map: colourS, // colour map
		normalMap: normal,
		roughnessMap: roughness,
		metalnessMap: metal,
		aoMap: ao,
	});

	const copperMetal = useTexture({
		map: colourC, // colour map
		normalMap: normalC,
		roughnessMap: roughnessC,
		metalnessMap: metalC,
		// aoMap: aoC,
	});

	// useEffect(() => {
	// 	// Check if the rotaryRef is available and has children
	// 	if (rotaryRef.current && rotaryRef.current.children.length) {
	// 		// Determine the direction based on animateRotary and whether the animation has played
	// 		const direction = animateRotary ? 1 : -1;

	// 		// Apply animations only if it's the first time or if animateRotary is true
	// 		if (animateRotary || hasAnimated.current) {
	// 			rotaryRef.current.children.forEach(child => {
	// 				// Identify the child and apply the appropriate animation
	// 				if (child.className === "rotaryEncoder") {
	// 					gsap.to(child.position, {
	// 						y: `+=${18 * direction}`,
	// 						duration: 1,
	// 					});
	// 				} else if (child.className === "rotaryKnob") {
	// 					gsap.to(child.position, {
	// 						y: `+=${36 * direction}`,
	// 						duration: 1,
	// 					});
	// 				}
	// 			});

	// 			// Mark that an animation has occurred
	// 			hasAnimated.current = true;
	// 		}
	// 	}
	// }, [animateRotary]);

	return (
		<group ref={rotaryRef} dispose={null}>
			<mesh
				className="rotaryKnob"
				geometry={nodes.Cylinder.geometry}
				// material={nodes.Cylinder.material}
				position={[24.57, -14.18, 11.95]}
				rotation={[-Math.PI, 0, 0]}
				scale={12.67}
			>
				<meshStandardMaterial {...brushedMetal} metalness={1} />
			</mesh>
			<mesh
				className="rotaryEncoder"
				geometry={nodes.imagetostl_mesh001.geometry}
				// material={nodes.imagetostl_mesh001.material}
				position={[24.57, -21.41, 12.89]}
				rotation={[1.57, 0, 0]}
			>
				<meshStandardMaterial {...brushedMetalS} metalness={1} />
			</mesh>
			<mesh
				className="rotaryEncoder"
				// two contact
				geometry={nodes.imagetostl_mesh002.geometry}
				material={nodes.imagetostl_mesh002.material}
				position={[24.57, -21.41, 12.89]}
				rotation={[1.57, 0, 0]}
			>
				<meshStandardMaterial {...copperMetal} metalness={1} />
			</mesh>
			<mesh
				className="rotaryEncoder"
				// two contact
				geometry={nodes.imagetostl_mesh003.geometry}
				material={nodes.imagetostl_mesh003.material}
				position={[24.57, -21.41, 12.89]}
				rotation={[1.57, 0, 0]}
			>
				<meshStandardMaterial {...copperMetal} metalness={1} />
			</mesh>
			<mesh
				className="rotaryEncoder"
				// three contact
				geometry={nodes.imagetostl_mesh004.geometry}
				material={nodes.imagetostl_mesh004.material}
				position={[24.57, -21.41, 12.89]}
				rotation={[1.57, 0, 0]}
			>
				<meshStandardMaterial {...copperMetal} metalness={1} />
			</mesh>
		</group>
	);
}

useGLTF.preload("/rotary.glb");
