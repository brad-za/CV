import React from "react";
import StarRating from "./StarRating.tsx";

interface ToolsProps {
  col?: boolean;
}

interface Tool {
  name: string;
  stars: number;
}

const Tools: React.FC<ToolsProps> = ({ col }) => {
  const tools: Tool[] = [
    {
      name: "VSC",
      stars: 4,
    },
    {
      name: "Git",
      stars: 4,
    },
    {
      name: "Github",
      stars: 4,
    },
    {
      name: "CAD",
      stars: 3,
    },
    {
      name: "KiCad",
      stars: 4,
    },
    {
      name: "Figma",
      stars: 3,
    },
    {
      name: "Docker",
      stars: 4,
    },
    {
      name: "Postman",
      stars: 2,
    },
  ];

  return (
    <div className="bg-green- w-full text-center">
      <ul
        className={`bg-red- grid gap-x-5 ${
          col ? "grid-cols-1 " : " grid-cols-2 gap-x-20"
        }`}
      >
        {tools.map((tool) => (
          <li
            key={tool.name}
            className={`group flex flex-wrap items-center justify-between rounded-lg p-1 hover:bg-[#e2e2e27f] ${
              col ? " " : " h-[3rem]"
            }`}
          >
            <p>{tool.name}</p>
            <StarRating stars={tool.stars} compact={col} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tools;
