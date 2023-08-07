import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Skills from "./Skills";
import aboutMe from "./CV/aboutMe.json";
import jobs from "./CV/jobs.json";
import education from "./CV/education.json";

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
		<div className="h- bg- grid grid-cols-1 gap-y-40 md:grid-cols-3 md:px-20">
			<div
				ref={sectionRefs.current["About Me"]}
				onClick={() => handleClick("About Me")}
				className="bg-gray- animate items- flex cursor-pointer justify-center p-4 md:col-span-1"
			>
				<h1 className="text-3xl font-bold underline underline-offset-4">
					A little bit about me
				</h1>
			</div>
			<div className="bg-gray- overflow-auto p-4 md:col-span-2">
				<div className="flex flex-col gap-2">
					{aboutMe.map(paragraph => {
						return <p className="">{paragraph}</p>;
					})}
				</div>
			</div>

			<div
				ref={sectionRefs.current["Technical Profile"]}
				onClick={() => handleClick("Technical Profile")}
				className="bg-gray- animate items- flex cursor-pointer justify-center p-4 md:col-span-1"
			>
				<h1 className="text-3xl font-bold underline underline-offset-4">
					Technical Profile
				</h1>
			</div>
			<div className="bg-gray- overflow-auto p-4 md:col-span-2">
				<div className="flex flex-col gap-2">
					<Skills />
				</div>
			</div>

			<div
				ref={sectionRefs.current["Education"]}
				onClick={() => handleClick("Education")}
				className="bg-gray- animate items- flex cursor-pointer justify-center p-4 md:col-span-1"
			>
				<h1 className="text-3xl font-bold underline underline-offset-4">
					Education
				</h1>
			</div>
			<div className="bg-gray- overflow-auto p-4 md:col-span-2">
				<div className="flex flex-col gap-4">
					{education.map(topic => {
						return (
							<div className="flex flex-col gap-x-2">
								<div className="bg-green- mb-2 flex w-full justify-between gap-x-4">
									<h1 className="text-xl font-semibold underline underline-offset-2">
										{topic.subject}
									</h1>
									<p className="text-sm">{topic.year}</p>
								</div>
								<p className="text- px-2 pr-5">{topic.about}</p>
							</div>
						);
					})}
				</div>
			</div>

			<div
				ref={sectionRefs.current["Work History"]}
				onClick={() => handleClick("Work History")}
				className="bg-gray- animate items- flex cursor-pointer justify-center px-4 md:col-span-1"
			>
				<h1 className="text-3xl font-bold underline underline-offset-4">
					Work History
				</h1>
			</div>
			<div className="bg-gray- overflow-auto p-4 md:col-span-2">
				<div className="flex flex-col gap-4">
					{jobs.map(job => {
						return (
							<div className="flex flex-col gap-x-2">
								<div className="bg-green- mb-2 flex w-full justify-between gap-x-10">
									<h1 className="text-xl font-semibold underline underline-offset-2">
										{job.position}
									</h1>
									<p className="text-sm">{job.date}</p>
								</div>
								<p className="font- mb-2 text-right text-sm italic">
									{job.company}
								</p>
								<p className="text- mb-5 px-2 pr-5">
									{job.about}
								</p>
								<div className="flex flex-col gap-2 whitespace-nowrap px-5">
									{job.duties.map(duty => {
										return (
											<div>
												<p>{`\u25cf ${duty}`}</p>
											</div>
										);
									})}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default CV;
