import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Animations = ({ keybRef, storyRef, keyCapsRef }) => {
	const contextRef = useRef();
	const count = useRef(0);

	useEffect(() => {
		const keyCapsR = keyCapsRef.current;
		// console.log(keyCapsR.children);

		if (keybRef.current) {
			const keyb = keybRef.current;

			contextRef.current = gsap.context(() => {
				gsap.registerPlugin(ScrollTrigger);

				gsap.to(keyb.position, {
					x: -5,
					scrollTrigger: {
						trigger: "#starting",
						markers: true,
						scrub: true,
						start: "top bottom",
						end: "bottom bottom",
						id: "starting",
					},
				});
				let tl = gsap.timeline({
					scrollTrigger: {
						trigger: "#decisions",
						markers: true,
						scrub: true,
						start: "top bottom",
						end: "bottom bottom",
						id: "decisions",
					},
				});

				tl.to(keyb.position, {
					x: -1,
					z: -2,
				});

				tl.to(
					keyb.rotation,
					{
						x: -0.2,
						z: 0,
					},
					">",
				);

				keyCapsR.children.forEach(child => {
					// if (child.className == "thumbKey") {
					// 	console.log(child);
					// 	tl.to(
					// 		child.position,
					// 		{
					// 			y: 1,
					// 		},
					// 		"+=50%",
					// 	);
					// }
					if (
						child.className == "thumbCluster" ||
						child.className == "thumbKey"
					) {
						count.current++;
						// console.log(count.current, child);
						tl.to(
							child.position,
							{
								y: count.current,
							},
							">",
						);
					}
				});
			}, storyRef.current);
		}
		return () => {
			contextRef.current && contextRef.current.revert();
		};
	}, [keybRef.current]);
};

export default Animations;
