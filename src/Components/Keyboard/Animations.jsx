import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Animations = ({ keybRef, storyRef, keyCapsRef, rotaryRef }) => {
	const contextRef = useRef();
	let count = 0;
	let colCount = 0;
	// const count = useRef({ count: 0 });

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
						// id: "starting",
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

				// rotatry encoder

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

				tl.to(keyb.position, {
					y: "-0.2",
				});

				// console.log(keyb.position.z);

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
						console.log(child.position.y);

						tl.to(
							child.position,
							{
								y: "18",
							},
							"<",
						);
					}
					if (child.className == "rotaryKnob") {
						tl.to(child.position, {
							y: "50",
						});
					}
				});

				// thumb cluster

				let thumbTimeLine = gsap.timeline({
					scrollTrigger: {
						trigger: "#ThumbCluster",
						markers: true,
						scrub: true,
						start: "top bottom",
						end: "top middle",
						id: "thumbCluster",
					},
				});

				thumbTimeLine.to(keyb.position, {
					y: "1.2",
				});

				rotaryR.children.forEach(child => {
					if (child.className == "rotaryEncoder") {
						thumbTimeLine.to(
							child.position,
							{
								y: "-21.41",
							},
							"<",
						);
					}
					if (child.className == "rotaryKnob") {
						thumbTimeLine.to(
							child.position,
							{
								y: "-14.18",
							},
							">",
						);
					}
				});

				keyCapsR.children.forEach(child => {
					if (
						child.className == "thumbCluster" ||
						child.className == "thumbKey"
					) {
						// console.log(count.current.count);
						count++;
						// count.current.count++;
						// console.log(count.current.count);

						thumbTimeLine.to(child.material, {
							opacity: 0.9,
							roughness: 0.4,
						});

						thumbTimeLine.to(
							child.position,
							{
								y: `+=${count * 2}`,
							},
							"<",
						);
					}
				});
				// Columnar

				let columnTL = gsap.timeline({
					scrollTrigger: {
						trigger: "#Columnar",
						markers: true,
						scrub: true,
						start: "top bottom",
						end: "bottom bottom",
						id: "Columnar",
					},
				});

				columnTL.to(keyb.rotation, {
					x: "1.2",
				});

				// 	tl.to(keyb.rotation, {
				// 	x: "0.3",
				// });
				keyCapsR.children
					.slice()
					.reverse()
					.forEach(child => {
						if (
							child.className == "thumbCluster" ||
							child.className == "thumbKey"
						) {
							// console.log(count.current.count);
							count--;
							// count.current.count++;
							// console.log(count.current.count);

							columnTL.to(child.material, {
								opacity: 0.4,
								roughness: 0,
							});

							columnTL.to(
								child.position,
								{
									y: `-=${count * 2}`,
								},
								"<",
							);
						}
					});

				columnTL.to(keyb.position, {
					x: "-7",
				});

				columnTL.to(
					keyb.position,
					{
						z: "0",
					},
					">",
				);

				keyCapsR.children
					.slice()
					.reverse()
					.forEach(child => {
						console.log(
							child.material.opacity,
							child.material.roughness,
						);
						if (child.className == "column") {
							// console.log(count.current.count);
							colCount++;
							// count.current.count++;
							// console.log(count.current.count);

							columnTL.to(child.material, {
								opacity: 0.9,
								roughness: 0.4,
							});

							columnTL.to(
								child.position,
								{
									y: `+=${colCount * 1}`,
								},
								"<",
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
