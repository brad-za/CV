import React from "react";
import me from "../assets/links/me.jpg";

function About() {
	return (
		<div
			href="about"
			className="m-auto flex max-h-[600px] max-w-[950px] items-center justify-center rounded-3xl bg-[#bdc0c238] px-4 py-4 shadow-xl hover:shadow-2xl"
		>
			<img src={me} className="h-96 rounded-full shadow-lg" />
			<div className="mx-16 h-[200px] w-[1px]" />
			<div className="bg- w-1/3 flex-row items-center justify-center">
				<h2 className="py-2 text-2xl font-semibold">About me</h2>
				<p className="py-1">
					I am an avid learner. I am an intermediate programmer but an
					expert problem solver.
				</p>
				<p className="py-1">
					I stand for quality and strive to exceed expectations. I
					love to spend time on the smaller details and optimizations.
				</p>
				<p className="py-1">
					I enjoy working on a team and learning from my peers and
					leaders. I believe I am a fast learner and I am ready to
					take on any challenge.
				</p>
				<h2 className="py-2 text-2xl font-semibold underline">
					Details
				</h2>
				<div className="flex flex-row">
					<p className="py-1 font-bold">Name:</p>
					<p className="py-1 pl-2">Bradley Simon</p>
				</div>
				<div className="flex flex-row">
					<p className="py-1 font-bold">Age:</p>
					<p className="py-1 pl-2">26</p>
				</div>
				<div className="flex flex-row">
					<p className="py-1 font-bold">Location:</p>
					<p className="py-1 pl-2">Cape Town</p>
				</div>
			</div>
		</div>
	);
}

export default About;
