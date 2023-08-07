import React from "react";
import StarRating from "./StarRating";

function Skills({ col }) {
	let skills = [
		{
			name: "React",
			stars: 4,
		},
		{
			name: "Node",
			stars: 4,
		},
		{
			name: "Tailwind",
			stars: 4,
		},
		{
			name: "JSON",
			stars: 4,
		},
		{
			name: "Rust",
			stars: 1,
		},
		{
			name: "Python",
			stars: 4,
		},
		{
			name: "CSS",
			stars: 4,
		},
		{
			name: "JavaScript",
			stars: 4,
		},
		{
			name: "SEO",
			stars: 3,
		},
		{
			name: "SQL",
			stars: 2,
		},
	];
	return (
		<div className="bg-green- w-full  text-center ">
			<ul
				className={`bg-red- grid gap-x-5 ${
					col ? "grid-cols-1 " : " grid-cols-2 gap-x-20"
				}`}
			>
				{skills.map(skill => (
					<li
						key={skill.name}
						className={`group flex flex-wrap items-center justify-between rounded-lg p-1 hover:bg-[#e2e2e27f] ${
							col ? " " : " h-[3rem]"
						}`}
					>
						<p>{skill.name}</p>
						<StarRating stars={skill.stars} />
					</li>
				))}
			</ul>
		</div>
	);
}

export default Skills;
