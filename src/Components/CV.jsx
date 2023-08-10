import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Skills from "./Skills";
import aboutMe from "./CV/aboutMe.json";
import jobs from "./CV/jobs.json";
import education from "./CV/education.json";
import Separator from "./Seperator.jsx";
import Seperator from "./Seperator.jsx";
import Heading from "./CV/Heading";
import List from "./CV/List";

gsap.registerPlugin(ScrollTrigger);

const CV = () => {
	const sectionRefs = useRef({
		"About Me": useRef(null),
		"Technical Profile": useRef(null),
		Education: useRef(null),
		"Work History": useRef(null),
	});

	const handleClick = section => {
		sectionRefs.current[section].current.scrollIntoView({
			behavior: "smooth",
		});
	};
	return (
		<div className="mx-28 my-10 w-2/3 p-4">
			<div className=" grid  grid-cols-3  gap-4 gap-y-32 ">
				{/* About Me */}
				<div className="relative col-span-1 ">
					<h1
						ref={sectionRefs.current["About Me"]}
						className="bg-whit sticky top-1/2 -translate-y-1/2 transform text-xl font-bold underline"
					>
						About Me
					</h1>
				</div>
				<div className="col-span-2">
					{aboutMe.map(paragraph => (
						<div key={paragraph}>
							{paragraph}
							<br />
							<br />
						</div>
					))}
					<p>
						Please explore my{" "}
						<a
							className="text-blue-500"
							target="_blank"
							href="https://github.com/putintin420"
						>
							github
						</a>{" "}
						profile to see some of the work I have done and the
						progress I have made in my coding journey.
					</p>
					<br />
					<p>
						I am especially happy with my performance in the 2022
						Advent of Code challenge,{" "}
						<a
							className="text-blue-500"
							target="_blank"
							href="https://github.com/putintin420/AOC"
						>
							found here
						</a>
					</p>
				</div>
				<Seperator />
				{/* Technical Profile */}
				<div className="relative col-span-1">
					<h1
						ref={sectionRefs.current["Technical Profile"]}
						className="bg-whit sticky top-1/2 -translate-y-1/2 transform text-xl font-bold underline"
					>
						Technical Profile
					</h1>
				</div>
				<div className="col-span-2">
					<Skills />
				</div>
				<Seperator />
				{/* Education */}
				<div className="relative col-span-1">
					<h1
						ref={sectionRefs.current["Education"]}
						className="bg-whit sticky top-1/2 -translate-y-1/2 transform text-xl font-bold underline"
					>
						Education
					</h1>
				</div>
				<div className="col-span-2">
					{education.map((topic, idx) => (
						<div key={idx} className="bg-fuchsia- m-10 p-4">
							<Heading
								position={topic.subject}
								date={topic.year}
							/>
							<p>{topic.about}</p>
							{topic.courses && <List items={topic.courses} />}
						</div>
					))}
				</div>
				<Seperator />
				{/* Work History */}
				<div className="relative col-span-1">
					<h1
						ref={sectionRefs.current["Work History"]}
						className="bg-whit sticky top-1/2 -translate-y-1/2 transform text-xl font-bold underline"
					>
						Work History
					</h1>
				</div>
				<div className="col-span-2">
					{jobs.map((job, idx) => (
						<div
							key={idx}
							className="gap-y- m- bg-fuchsia- my-10 p-4"
						>
							<Heading position={job.position} date={job.date} />
							<p className="bg-gray- pb-3 pl-3 italic">
								{job.company}
							</p>
							<p className="bg-red-">{job.about}</p>
							{/* <ul className="bg-orange-80 mt-4 list-disc space-y-2 pl-6">
								{job.duties.map((duty, dutyIdx) => (
									<li className="bg-teal-" key={dutyIdx}>
										{duty}
									</li>
								))}
							</ul> */}
							<List items={job.duties} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default CV;
