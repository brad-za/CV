import React from "react";
import StarRating from "./StarRating";

function Skills({ col }) {
	let skillsRight = [
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
	];
	let skillsLeft = [
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
		<div className="bg-green- text-center ">
			<div className={`bg-red- flex ${col && "flex-col-reverse"}`}>
				<ul className="bg-pink- px-10">
					{skillsLeft.map(skill => (
						<li
							key={skill.name}
							className="bg-blue- group my-2 flex h-[40px] w-[300px] items-center justify-between rounded-lg p-2 hover:bg-[#e2e2e27f]"
						>
							<p>{skill.name}</p>
							<StarRating stars={skill.stars} />
						</li>
					))}
				</ul>
				<ul className="bg-pink- -my-2 px-10">
					{skillsRight.map(skill => (
						<li
							key={skill.name}
							className="bg-blue- group my-2 flex h-[40px] w-[300px] items-center justify-between rounded-lg p-2 hover:bg-[#e2e2e27f]"
						>
							<p>{skill.name}</p>
							<StarRating stars={skill.stars} />
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default Skills;
