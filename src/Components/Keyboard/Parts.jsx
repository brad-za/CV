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
import Animations from "./Animations-old";
import KeycapsRight from "./Parts/KeycapsRight";

const Parts = ({ animateRotary, thumbClusterAnimation }) => {
	const keybRef = useRef();
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
			<Perf position="bottom-left" />
			<Environment {...config} />

			<group
				ref={keybRef}
				// rotation-x={1.3}
				// rotation-z={0}
				// rotation-y={0}
				position={[-4, 1, -1]}
				scale={0.05}
			>
				<group position={[0, 0, 0]}>
					{/* <KeycapsRight keyCapsRef={keyCapsRef} /> */}
					<RightKeycaps
						thumbClusterAnimation={thumbClusterAnimation}
					/>
					<StemClick />
					<BottomHousing />
					<Stem />
					<Contacts />
					<Springs />
					<TopHousing />
					<Rotary animateRotary={animateRotary} />
					<Housing />
					<ProMicro />
				</group>
			</group>
		</>
	);
};

export default Parts;
