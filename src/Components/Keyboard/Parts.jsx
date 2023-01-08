import React, { useRef } from "react";

import { Perf } from "r3f-perf";
import {  Environment } from "@react-three/drei";
import RightKeycaps from "./Parts/RightKeycaps";
import StemClick from "./Parts/StemClick";
import BottomHousing from "./Parts/BottomHousing";
import Stem from "./Parts/Stem";
import Contacts from "./Parts/Contacts";
import Springs from "./Parts/Springs";
import TopHousing from "./Parts/TopHousing";
import Rotary from "./Parts/Rotary";
import Housing from "./Parts/Housing";
import { useControls } from "leva";
import Animations from "./Animations";

const Parts = ({ storyRef }) => {
	const keybRef = useRef();
	const keyCapsRef = useRef();

	const config = useControls("background config", {
		preset: {
			value: "warehouse",
			options: [
				"apartment",
				"city",
				"dawn",
				"forest",
				"lobby",
				"night",
				"park",
				"studio",
				"sunset",
			],
		},
		background: false,
	});
	return (
		<>
			{/* <OrbitControls /> */}
			<Perf position="bottom-left" />
			<Environment {...config} />
			<group
				// ref={node => {
				// 	keybRef = node;
				// }}
				ref={keybRef}
				rotation-x={1.5708}
				rotation-z={0.2}
				position={[-1.5, 0, 0]}
				scale={0.04}
			>
				<RightKeycaps keyCapsRef={keyCapsRef} />
				<StemClick />
				<BottomHousing />
				<Stem />
				<Contacts />
				<Springs />
				<TopHousing />
				<Rotary />
				<Housing />
			</group>
			<Animations
				storyRef={storyRef}
				keybRef={keybRef}
				keyCapsRef={keyCapsRef}
			/>
		</>
	);
};

export default Parts;
