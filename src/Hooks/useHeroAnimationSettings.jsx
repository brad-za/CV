import React, { createContext, useContext, useState, useMemo } from "react";

const heroAnimationContext = createContext({});

export const HeroAnimationSettings = () => useContext(heroAnimationContext);

const HeroAnimationSettingsProvider = ({ children }) => {
	// states
	const [isOpen, setIsOpen] = useState(false);
	const [changeSize, setChangeSize] = useState(true);
	const [moveVertically, setMoveVertically] = useState(true);
	const [moveHorizontally, setMoveHorizontally] = useState(false);
	const [textAnimation, setTextAnimation] = useState(true);
	const [sizeTiming, setSizeTiming] = useState("5000");
	const [verticalTiming, setVerticalTiming] = useState("6000");
	const [horizontaltiming, setHorizontalTiming] = useState("6000");
	const [textTiming, setTextTiming] = useState("3000");

	const handleMenuOpen = () => {
		setIsOpen(!isOpen);
	};

	const handleChangeSizeChange = e => {
		e.persist();
		setChangeSize(e.target.checked);
	};

	const handleMoveVerticallyChange = e => {
		e.persist();
		setMoveVertically(e.target.checked);
	};

	const handleMoveHorizontallyChange = e => {
		e.persist();
		setMoveHorizontally(e.target.checked);
	};

	const handleTextAnimationChange = e => {
		e.persist();
		setTextAnimation(e.target.checked);
	};

	const handleSizeTimeChange = e => {
		e.preventDefault();
		setSizeTiming(e.target.value * 1000);
	};

	const handleVerticalTimingChange = e => {
		e.preventDefault();
		setVerticalTiming(e.target.value * 1000);
	};

	const handleHorizontalTimingChange = e => {
		e.preventDefault();
		setHorizontalTiming(e.target.value * 1000);
	};

	const handleTextTimingChange = e => {
		e.preventDefault();
		setTextTiming(e.target.value * 1000);
	};

	const contextValue = useMemo(
		() => ({
			isOpen,
			changeSize,
			moveVertically,
			moveHorizontally,
			textAnimation,
			sizeTiming,
			verticalTiming,
			horizontaltiming,
			textTiming,
			handleMenuOpen,
			handleChangeSizeChange,
			handleMoveVerticallyChange,
			handleMoveHorizontallyChange,
			handleTextAnimationChange,
			handleSizeTimeChange,
			handleVerticalTimingChange,
			handleHorizontalTimingChange,
			handleTextTimingChange,
		}),
		[
			isOpen,
			changeSize,
			moveVertically,
			moveHorizontally,
			textAnimation,
			sizeTiming,
			verticalTiming,
			horizontaltiming,
			textTiming,
		],
	);

	return (
		<heroAnimationContext.Provider value={contextValue}>
			{children}
		</heroAnimationContext.Provider>
	);
};

export default HeroAnimationSettingsProvider;
