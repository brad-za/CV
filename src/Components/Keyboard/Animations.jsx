import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Animations = ({ keybRef, storyRef, keyCapsRef }) => {
	const contextRef = useRef();
	const count = useRef(0);

	useEffect(() => {
		const keyCapsR = keyCapsRef.current;

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

				startingP.to(keyb.position, { x: "-=5" });

				startingP.to(keyb.rotation, {
					x: "+=0.27",
					z: "-=0.1",
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
					x: "+=5",
					z: "-=2",
				});

				tl.to(
					keyb.rotation,
					{
						x: "-=1.57",
					},
					">",
				);

				keyCapsR.children.forEach(child => {
					if (
						child.className == "thumbCluster" ||
						child.className == "thumbKey"
					) {
						count.current++;

						tl.to(
							child.position,
							{
								y: `+= ${count.current * 1.4}`,
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
