import React, { useState, useEffect, useRef, useMemo } from "react";

function TypeAnimation({
	sequence,
	wrapper: Wrapper = "p",
	cursor = true,
	delay = 1000,
	active = true,
}) {
	const delayTime = useMemo(
		() => (typeof delay === "number" ? delay : parseInt(delay, 10)),
		[delay],
	);
	const [displayText, setDisplayText] = useState("");
	const [index, setIndex] = useState(0);
	const [subIndex, setSubIndex] = useState(0);
	const [reverse, setReverse] = useState(false);
	const [isWaiting, setIsWaiting] = useState(false);

	const timeoutRef = useRef(null);
	const getTypingSpeed = () => Math.floor(Math.random() * (75 - 50 + 1)) + 50;

	useEffect(() => {
		if (
			!active &&
			!isWaiting &&
			subIndex === sequence[index].length &&
			!reverse
		) {
			clearTimeout(timeoutRef.current);
		} else {
			timeoutRef.current = setTimeout(
				() => {
					if (!reverse && subIndex === sequence[index].length) {
						setReverse(true);
						setIsWaiting(true);
						setTimeout(() => {
							setIsWaiting(false);
						}, delayTime);
						return;
					}

					if (reverse && subIndex === 0) {
						setReverse(false);
						setIndex(prevIndex =>
							prevIndex === sequence.length - 1
								? 0
								: prevIndex + 1,
						);
					}

					setDisplayText(prevText =>
						reverse
							? prevText.slice(0, prevText.length - 1)
							: sequence[index].slice(0, subIndex + 1),
					);

					setSubIndex(
						prevSubIndex => prevSubIndex + (reverse ? -1 : 1),
					);
				},
				isWaiting ? delayTime : getTypingSpeed(),
			);
		}

		return () => clearTimeout(timeoutRef.current);
	}, [
		displayText,
		index,
		subIndex,
		reverse,
		sequence,
		delayTime,
		active,
		isWaiting,
	]);

	return (
		<Wrapper>
			{displayText}
			{cursor ? <span className="animate-blink">|</span> : ""}
		</Wrapper>
	);
}

export default TypeAnimation;
