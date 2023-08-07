import React from "react";

const Intro = () => {
	return (
		<div
			id="intro"
			className="bg-green- absolute   h-[80vh] w-full   text-3xl"
		>
			<div className="-mt-20 flex h-full flex-col items-center justify-center text-center">
				<span className="intro" />
				<h1>
					A story about the time I couldn't find a keyboard I liked
				</h1>
				<h1>So I made one</h1>
				<h2 className="mt-10">
					There were quite a few hurdles to get over
				</h2>
				<h2> but that has never stopped me</h2>
				<div className="absolute bottom-8 flex flex-col items-center justify-center">
					<div className="flex h-20 w-10 justify-center rounded-full border-2 border-chipWhite">
						<div className="mt-3 h-2 w-2 rounded-full bg-white motion-safe:animate-scrollWheel" />
					</div>
					<h1 className="mt-3 text-xl">Scroll for to learn more</h1>
				</div>
			</div>
		</div>
	);
};

export default Intro;
