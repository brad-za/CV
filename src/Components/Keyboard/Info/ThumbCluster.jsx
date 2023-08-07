import React from "react";

const ThumbCluster = () => {
	return (
		<div
			id="ThumbCluster"
			className="bg-green- absolute top-[300vh]  h-[100vh] w-1/2   text-3xl"
		>
			<div className="-mt-20 flex h-full flex-col items-center justify-center ">
				<span className="ThumbCluster" />
				<div className="mt-20">
					<h2 className="text-3xl">Can we talk about thumbs?</h2>
					<h3 className="bold italic "> and pinkies</h3>
					<div className="mt-10 text-2xl [&>h3]:mt-3">
						<h3>While thumb clusters are all the rage</h3>
						<h3>very few keyboards have control and shift</h3>
						<h3>in normal places. You know? By your pinkies</h3>

						<h3>
							This is the main reason I took on the task of
							building
						</h3>
						<h3>
							from scratch instead of soldering a pre-existing
							build
						</h3>
						<h3>The sweep is perfectly designed for my reach</h3>
						<h3>copy, paste, undo and redo are all normal</h3>
					</div>
					<div className="mt-20">This is the defining feature</div>
					<div>of my build and what sets it apart</div>
				</div>
			</div>
		</div>
	);
};

export default ThumbCluster;
