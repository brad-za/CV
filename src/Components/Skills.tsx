import React from "react";
import StarRating from "./StarRating.tsx";

interface SkillsProps {
  col?: boolean;
}

interface Skill {
  name: string;
  stars: number;
}

const Skills: React.FC<SkillsProps> = ({ col }) => {
  const skills: Skill[] = [
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
      name: "GIT",
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
      name: "JS",
      stars: 4,
    },
    {
      name: "TS",
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
    <div className="bg-green- w-full text-center">
      <ul
        className={`bg-red- grid gap-x-5 ${
          col ? "grid-cols-1 " : " grid-cols-2 gap-x-20"
        }`}
      >
        {skills.map((skill) => (
          <li
            key={skill.name}
            className={`group flex flex-wrap items-center justify-between rounded-lg p-1 hover:bg-[#e2e2e27f] ${
              col ? " " : " h-[3rem]"
            }`}
          >
            <p>{skill.name}</p>
            <StarRating stars={skill.stars} compact={col} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
