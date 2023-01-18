import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Animations = ({ keybRef, storyRef, keyCapsRef, rotaryRef }) => {
	const contextRef = useRef();
	const count = useRef(0);

	useEffect(() => {
		const keyCapsR = keyCapsRef.current;
		const rotaryR = rotaryRef.current;

		if (keybRef.current) {
			const keyb = keybRef.current;

			contextRef.current = gsap.context(() => {
				gsap.registerPlugin(ScrollTrigger);

				let startingP = gsap.timeline({
					scrollTrigger: {
						trigger: "#starting",
						markers: true,
						scrub: true,
						start: "top bottom",
						end: "bottom bottom",
						id: "starting",
					},
				});

				startingP.to(keyb.position, { x: "-7" });

				startingP.to(
					keyb.rotation,
					{
						x: "1.57",
						z: "0",
					},
					"<",
				);

				let tl = gsap.timeline({
					scrollTrigger: {
						trigger: "#decisions",
						markers: true,
						scrub: true,
						start: "top bottom",
						end: "middle middle",
						id: "decisions",
					},
				});

				tl.to(keyb.position, {
					x: "-2",
					// z: "-2",
				});

				tl.to(keyb.rotation, {
					x: "0.3",
				});

				tl.to(
					keyb.position,
					{
						z: "-2",
					},
					"<",
				);

				rotaryR.children.forEach(child => {
					if (child.className == "rotaryEncoder") {
						tl.to(
							child.position,
							{
								y: "+=25",
							},
							"<",
						);
					}
					if (child.className == "rotaryKnob") {
						tl.to(child.position, {
							y: "+=45",
						});
					}
				});

				// keyCapsR.children.forEach(child => {
				// 	if (
				// 		child.className == "thumbCluster" ||
				// 		child.className == "thumbKey"
				// 	) {
				// 		count.current++;

				// 		tl.to(
				// 			child.position,
				// 			{
				// 				y: `${count.current * 1.4}`,
				// 			},
				// 			">",
				// 		);
				// 	}
				// });
			}, storyRef.current);
		}
		return () => {
			contextRef.current && contextRef.current.revert();
		};
	}, [keybRef.current]);
};

export default Animations;
