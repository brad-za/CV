import React, { useEffect, useRef } from "react";

import { Perf } from "r3f-perf";
import { Environment, OrbitControls } from "@react-three/drei";
import RightKeycaps from "./Parts/RightKeycaps";
import StemClick from "./Parts/StemClick";
import BottomHousing from "./Parts/BottomHousing";
import Stem from "./Parts/Stem";
import Contacts from "./Parts/Contacts";
import Springs from "./Parts/Springs";
import TopHousing from "./Parts/TopHousing";
import Rotary from "./Parts/Rotary";
import Housing from "./Parts/Housing";
import ProMicro from "./Parts/ProMicro";
import { useControls } from "leva";
import Animations from "./Animations";
import useResetOrigin from "../../Hooks/useResetOrigin";

const Parts = ({ storyRef }) => {
	const keybRef = useRef();
	const keyCapsRef = useRef();
	const rotaryRef = useRef();
	const columnsRef = useRef();

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
				rotation-x={1.3}
				rotation-z={0}
				rotation-y={0}
				position={[-20, 1, 0]}
				scale={0.05}
			>
				<group position={[0, 0, 0]}>
					<RightKeycaps keyCapsRef={keyCapsRef} />
					<StemClick />
					<BottomHousing />
					<Stem />
					<Contacts />
					<Springs />
					<TopHousing />
					<Rotary rotaryRef={rotaryRef} />
					<Housing />
					<ProMicro />
				</group>
			</group>

			<Animations
				storyRef={storyRef}
				keybRef={keybRef}
				keyCapsRef={keyCapsRef}
				rotaryRef={rotaryRef}
			/>
		</>
	);
};

export default Parts;
