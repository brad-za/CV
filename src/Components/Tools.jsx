import React from "react";
import StarRating from "./StarRating";

function Tools({ col }) {
	let tools = [
		{
			name: "Windows",
			stars: 4,
		},
		{
			name: "Mac",
			stars: 4,
		},
		{
			name: "Visual Studio Code",
			stars: 4,
		},
		{
			name: "Git",
			stars: 4,
		},
		{
			name: "Github",
			stars: 1,
		},

		{
			name: "Figma",
			stars: 4,
		},
		{
			name: "MS Office",
			stars: 4,
		},

		{
			name: "Docker",
			stars: 3,
		},
		{
			name: "Internet",
			stars: 3,
		},
		{
			name: "Postman",
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
				{tools.map(tool => (
					<li
						key={tool.name}
						className={`group flex flex-wrap items-center justify-between rounded-lg p-1 hover:bg-[#e2e2e27f] ${
							col ? " " : " h-[3rem]"
						}`}
					>
						<p>{tool.name}</p>
						<StarRating stars={tool.stars} />
					</li>
				))}
			</ul>
		</div>
	);
}

export default Tools;
