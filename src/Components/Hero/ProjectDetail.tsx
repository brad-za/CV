import React from "react";
import { Project } from "./projectsData";

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  return (
    <div className="flex h-full flex-col p-4 text-chipWhite">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold">{project.name}</h2>
        <button
          onClick={onBack}
          className="rounded bg-gray-700 px-3 py-1 text-sm hover:bg-gray-600"
        >
          Back to Projects
        </button>
      </div>

      <div className="mb-4 h-48 w-full bg-gray-700 flex items-center justify-center">
        {project.image ? (
          <img
            src={project.image}
            alt={project.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="text-center text-gray-400">
            Project Image Placeholder
          </div>
        )}
      </div>

      <div className="mb-4">
        <p className="text-lg">{project.description}</p>
      </div>

      <div className="mb-4">
        <h3 className="mb-2 text-lg font-semibold">Technologies</h3>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="rounded-full bg-gray-700 px-3 py-1 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-auto flex gap-4">
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded bg-gray-700 px-4 py-2 hover:bg-gray-600"
          >
            GitHub Repository
          </a>
        )}
        {project.demoLink && (
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded bg-blue-600 px-4 py-2 hover:bg-blue-500"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
