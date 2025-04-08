import React from "react";
import { Project } from "./projectsData";

interface ProjectCardProps {
  project: Project;
  onClick: (id: number) => void;
  isMobile: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onClick,
  isMobile,
}) => {
  return (
    <div
      className={`m-2 flex cursor-pointer flex-col rounded-lg bg-gray-800 p-4 shadow-md transition-all duration-300 hover:shadow-lg ${
        isMobile ? "w-full" : "w-[calc(50%-1rem)]"
      }`}
      onClick={() => onClick(project.id)}
    >
      <div className="mb-3 h-24 w-full bg-gray-700 flex items-center justify-center">
        {project.image ? (
          <img
            src={project.image}
            alt={project.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="text-center text-gray-400">Project Image</div>
        )}
      </div>

      <h3 className="mb-2 text-lg font-bold text-chipWhite">{project.name}</h3>

      <p className="mb-3 text-sm text-gray-300 line-clamp-2">
        {project.description}
      </p>

      <div className="mt-auto flex flex-wrap gap-1">
        {project.technologies.slice(0, 3).map((tech, index) => (
          <span
            key={index}
            className="rounded-full bg-gray-700 px-2 py-1 text-xs text-gray-300"
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 3 && (
          <span className="rounded-full bg-gray-700 px-2 py-1 text-xs text-gray-300">
            +{project.technologies.length - 3}
          </span>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
