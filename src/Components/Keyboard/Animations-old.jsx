import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const createTimelineForStarting = keyb => {
	const startTimeline = gsap.timeline({
		scrollTrigger: {
			trigger: "#starting",
			markers: true,
			scrub: true,
			start: "top bottom",
			end: "bottom bottom",
		},
	});

	startTimeline
		.to(keyb.position, { x: "-7" })
		.to(keyb.rotation, { x: "1.57", z: "0" }, "<");

	return startTimeline;
};

const createTimelineForDecisions = (keyb, rotaryR) => {
	const decisionTimeline = gsap.timeline({
		scrollTrigger: {
			trigger: "#decisions",
			markers: true,
			scrub: true,
			start: "top bottom",
			end: "middle middle",
		},
	});

	decisionTimeline
		.to(keyb.position, { x: "-2" })
		.to(keyb.position, { y: "-0.2" })
		.to(keyb.rotation, { x: "0.3" })
		.to(keyb.position, { z: "-2" }, "<");

	rotaryR.children.forEach(child => {
		if (child.className === "rotaryEncoder") {
			decisionTimeline.to(child.position, { y: "18" }, "<");
		}
		if (child.className === "rotaryKnob") {
			decisionTimeline.to(child.position, { y: "50" });
		}
	});

	return decisionTimeline;
};

const createTimelineForThumbCluster = (keyb, rotaryR, keyCapsR) => {
	let count = 0;

	const thumbTimeline = gsap.timeline({
		scrollTrigger: {
			trigger: "#ThumbCluster",
			markers: true,
			scrub: true,
			start: "top bottom",
			end: "top middle",
			id: "thumbCluster",
		},
	});

	thumbTimeline.to(keyb.position, { y: "1.2" });

	rotaryR.children.forEach(child => {
		if (child.className === "rotaryEncoder") {
			thumbTimeline.to(child.position, { y: "-21.41" }, "<");
		}
		if (child.className === "rotaryKnob") {
			thumbTimeline.to(child.position, { y: "-14.18" }, ">");
		}
	});

	keyCapsR.children.forEach(child => {
		if (
			child.className === "thumbCluster" ||
			child.className === "thumbKey"
		) {
			thumbTimeline.to(child.material, { opacity: 0.9, roughness: 0.4 });
			thumbTimeline.to(child.position, { y: `+=${count++ * 2}` }, "<");
		}
	});

	return thumbTimeline;
};

const createTimelineForColumnar = (keyb, keyCapsR, colCount) => {
	let count = 0;

	let columnarTimeline = gsap.timeline({
		scrollTrigger: {
			trigger: "#Columnar",
			markers: true,
			scrub: true,
			start: "top bottom",
			end: "top top", // extended end to allow more scroll to complete the animations
			id: "Columnar",
		},
	});

	// Undo transformations from ThumbCluster animation
	keyCapsR.children.forEach(child => {
		if (
			child.className === "thumbCluster" ||
			child.className === "thumbKey"
		) {
			columnarTimeline
				.to(child.position, { y: `-= ${count++ * 2}` }) // Opposite transformation
				.to(
					child.material,
					{
						opacity: 0.4,
						roughness: 0,
					},
					">",
				);
		}
	});

	columnarTimeline
		.to(keyb.rotation, { x: "1.2" })
		.to(keyb.position, { x: "-7", z: "0" }, "<");
	// .to(keyb.position, { x: "-7" }, ">")
	// .to(keyb.position, { z: "0" }, ">");

	keyCapsR.children
		.slice()
		.reverse()
		.forEach(child => {
			if (child.className == "column") {
				colCount++;
				columnarTimeline
					.to(child.material, { opacity: 0.9, roughness: 0.4 }, ">")
					.to(child.position, { y: `+=${colCount * 1}` }, "<");
			}
		});

	return columnarTimeline;
};

const Animations = ({ keybRef, storyRef, keyCapsRef, rotaryRef }) => {
	const contextRef = useRef();
	let colCount = 0;
	useEffect(() => {
		if (keybRef.current) {
			const keyb = keybRef.current;
			const rotaryR = rotaryRef.current;
			const keyCapsR = keyCapsRef.current;

			contextRef.current = gsap.context(() => {
				gsap.registerPlugin(ScrollTrigger);
				createTimelineForStarting(keyb);
				createTimelineForDecisions(keyb, rotaryR);
				createTimelineForThumbCluster(keyb, rotaryR, keyCapsR);
				createTimelineForColumnar(keyb, keyCapsR, colCount);
			}, storyRef.current);
		}

		return () => {
			contextRef.current && contextRef.current.revert();
		};
	}, [keybRef.current]);

	return null;
};

export default Animations;
