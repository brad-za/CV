import React, { useEffect } from "react";
import { useAnimation } from "./AnimationContext";
import gsap from "gsap";

const Animations = () => {
	const {
		hasAnimated,
		hasThumbClusterAnimated,
		rotaryRef,
		keyCapsRef,
		animateRotary,
		animateThumbCluster,
		animateColumnar,
	} = useAnimation();

	// rotary encoder

	useEffect(() => {
		// Check if the rotaryRef is available and has children
		if (rotaryRef.current && rotaryRef.current.children.length) {
			// Determine the direction based on animateRotary and whether the animation has played
			const direction = animateRotary ? 1 : -1;

			// Apply animations only if it's the first time or if animateRotary is true
			if (animateRotary || hasAnimated.current) {
				rotaryRef.current.children.forEach(child => {
					// Identify the child and apply the appropriate animation
					if (child.className === "rotaryEncoder") {
						gsap.to(child.position, {
							y: `+=${18 * direction}`,
							duration: 1,
						});
					} else if (child.className === "rotaryKnob") {
						gsap.to(child.position, {
							y: `+=${36 * direction}`,
							duration: 1,
						});
					}
				});

				// Mark that an animation has occurred
				hasAnimated.current = true;
			}
		}
	}, [animateRotary]);

	// thumb cluster

	useEffect(() => {
		const baseMovement = 0.5; // The starting movement distance for the first keycap
		const staggerIncrement = 0.1; // Additional distance added for each keycap
		// Check if the keyCapsRef is available and has children
		if (keyCapsRef.current && keyCapsRef.current.children.length) {
			// Only apply animations if it's the first time or if animateThumbCluster is true
			if (animateThumbCluster || hasThumbClusterAnimated.current) {
				keyCapsRef.current.children.forEach((child, index) => {
					if (
						child.className.includes("thumbCluster") ||
						child.className.includes("thumbKey")
					) {
						const yPos = baseMovement + staggerIncrement * index;

						if (animateThumbCluster) {
							// Animate up with adjusted material properties:
							gsap.to(child.position, {
								y: `+=${yPos}`,
								duration: 1,
								ease: "Power2.easeInOut", // Consider easing functions for a smoother effect
							});
							gsap.to(child.material, {
								opacity: 0.9,
								roughness: 0.4,
								duration: 1,
							});
						} else {
							// Animate down and revert properties:
							gsap.to(child.position, {
								y: `-=${yPos}`,
								duration: 1,
								ease: "Power2.easeInOut",
							});
							gsap.to(child.material, {
								opacity: 0.4,
								roughness: 0,
								duration: 1,
							});
						}
					}
				});

				// Mark that an animation has occurred
				hasThumbClusterAnimated.current = true;
			}
		}
	}, [animateThumbCluster, keyCapsRef]);

	// columnar

	useEffect(() => {
		if (keyCapsRef.current && keyCapsRef.current.children.length) {
			const baseMovement = 0.5; // The starting movement distance for the first keycap
			const staggerIncrement = 0.1; // Additional distance added for each keycap

			keyCapsRef.current.children.forEach((child, index) => {
				if (child.className.includes("column")) {
					const yPos = baseMovement + staggerIncrement * index;

					if (animateColumnar) {
						// Animate forward
						gsap.to(child.position, {
							y: `+=${yPos}`,
							duration: 1,
							ease: "Power2.easeInOut",
						});
						gsap.to(child.material, {
							opacity: 0.9,
							roughness: 0.4,
							duration: 1,
						});
					} else {
						// Animate backward
						gsap.to(child.position, {
							y: `-=${yPos}`,
							duration: 1,
							ease: "Power2.easeInOut",
						});
						// Assuming you want to revert opacity and roughness to initial values
						gsap.to(child.material, {
							opacity: 0.4,
							roughness: 0,
							duration: 1,
						});
					}
				}
			});

			// Optionally, set a flag or update state to indicate the animation has completed
			// if needed here...
		}
	}, [animateColumnar, keyCapsRef]);

	return null;
};

export default Animations;
