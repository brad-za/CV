import React from "react";

const Decisions = () => {
	return (
		<div
			id="decisions"
			className="bg-emerald- absolute top-[200vh] left-0 flex h-[100vh] w-1/2 flex-col  text-center text-3xl"
		>
			<span className="decisions" />
			<div className="mt-20">
				<h1>Components</h1>
				<div className="mt-10 text-2xl [&>h3]:mt-2">
					<h3>Lets start with the rotary encoder</h3>
					<h3>I don't like moving my hands to my mouse</h3>
					<h3>naturally the only answer was two encoders</h3>
					<h3>right is for volume control and play/pause</h3>
					<h3>left functions as a scroll wheel</h3>
				</div>
				<div className="mt-20">These are without a doubt my</div>
				<div>favourite addition to the keyboard</div>
			</div>
		</div>
	);
};

export default Decisions;
