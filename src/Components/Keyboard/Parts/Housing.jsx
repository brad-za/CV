/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { useControls } from "leva";
import middleHousing from "../../../assets/keyboard/middleHousing.glb";

import colour from "../../../assets/keyboard/brushedMetal/Metal009_1K_Color.jpg";
import normal from "../../../assets/keyboard/brushedMetal/Metal009_1K_NormalGL.jpg";
import roughness from "../../../assets/keyboard/brushedMetal/Metal009_1K_Roughness.jpg";
import metal from "../../../assets/keyboard/brushedMetal/Metal009_1K_Metalness.jpg";
import ao from "../../../assets/keyboard/brushedMetal/Metal_Steel_Brushed_001_ambientOcclusion.jpg";

export default function Model(props) {
	const { nodes } = useGLTF(middleHousing);

	const brushedMetal = useTexture({
		map: colour, // colour map
		normalMap: normal,
		roughnessMap: roughness,
		metalnessMap: metal,
		aoMap: ao,
	});

	// useLayoutEffect(() => {
	// 	Object.assign(nodes["bottom_(right)"].material, {
	// 		...brushedMetal,
	// 	});
	// 	Object.assign(nodes["top_(right)_fixed_simple_geo"].material, {
	// 		...brushedMetal,
	// 	});
	// });

	const config = useControls("middle housing", {
		color: "#ffffff",
		metalness: { value: 0, min: 0, max: 1, step: 0.01 },
		roughness: { value: 0, min: 0, max: 1, step: 0.01 },
		transmission: { value: 1, min: 0, max: 2, step: 0.05 },
		ior: { value: 1.5, min: 0, max: 2, step: 0.01 },
		thickness: { value: 0.5, min: 0, max: 2, step: 0.01 },
		specularIntensity: { value: 1, min: 0, max: 2, step: 0.01 },
		specularColor: "#ffffff",
		envMapIntensity: { value: 1, min: 0, max: 2, step: 0.01 },
		lightIntensity: { value: 1, min: 0, max: 2, step: 0.01 },
		exposure: { value: 1, min: 0, max: 2, step: 0.01 },
		depthTest: true,
		depthWrite: true,
	});

	// const config = useControls("housing middle", {
	// 	visible: true,
	// 	transparent: true,
	// 	opacity: { value: 0.4, min: 0, max: 1, step: 0.01 },
	// 	depthTest: true,
	// 	depthWrite: false,
	// 	alphaTest: { value: 0, min: 0, max: 1, step: 0.01 },
	// 	side: {
	// 		value: "THREE.DoubleSided",
	// 		options: ["THREE.FrontSide", "THREE.BackSide"],
	// 	},
	// 	color: "#c0c0c0",
	// 	emissive: "#000000",
	// 	roughness: { value: 1, min: 0, max: 1, step: 0.01 },
	// 	metalness: { value: 0, min: 0, max: 1, step: 0.01 },
	// 	specularColor: "#ffffff",
	// 	fog: true,
	// });
	return (
		<group {...props} dispose={null}>
			<mesh
				geometry={nodes["middle_(right)"].geometry}
				material={nodes["middle_(right)"].material}
				position={[82.33, -27.52, 9.82]}
				rotation={[Math.PI, 0, Math.PI]}
				scale={[1, 3, 1]}
			>
				<meshPhysicalMaterial {...config} />
			</mesh>
			<mesh
				geometry={nodes["top_(right)_fixed_simple_geo"].geometry}
				material={nodes["top_(right)_fixed_simple_geo"].material}
				position={[83.12, -22.53, 7.44]}
				rotation={[Math.PI, 0, Math.PI]}
			>
				<meshStandardMaterial {...brushedMetal} metalness={1} />
			</mesh>
			<mesh
				geometry={nodes["bottom_(right)"].geometry}
				material={nodes["bottom_(right)"].material}
				position={[81.17, -32.5, 4.45]}
				rotation={[Math.PI, 0, Math.PI]}
			>
				<meshStandardMaterial {...brushedMetal} metalness={1} />
			</mesh>
		</group>
	);
}

useGLTF.preload("/middleHousing.glb");
