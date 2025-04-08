import React, { useState } from "react";
import { projects, Project } from "./projectsData";
import ProjectCard from "./ProjectCard";
import ProjectDetail from "./ProjectDetail";

interface AppsScreenProps {
  isMobile: boolean;
}

const AppsScreen: React.FC<AppsScreenProps> = ({ isMobile }) => {
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(
    null
  );

  const handleProjectClick = (id: number) => {
    setSelectedProjectId(id);
  };

  const handleBackClick = () => {
    setSelectedProjectId(null);
  };

  const selectedProject = selectedProjectId
    ? projects.find((p) => p.id === selectedProjectId)
    : null;

  return (
    <div
      style={{ animationFillMode: "forwards" }}
      className={`flex h-full flex-1 flex-wrap duration-[2000ms] ease-in-out`}
    >
      {selectedProject ? (
        <ProjectDetail project={selectedProject} onBack={handleBackClick} />
      ) : (
        <div
          className={`flex h-full w-full flex-col ${isMobile ? "" : "flex-row"}`}
        >
          {!isMobile && (
            <div className="flex w-1/2 flex-col items-center justify-center p-4 text-chipWhite">
              <h2 className="mb-4 text-2xl font-bold">My Projects</h2>
              <p className="mb-2 text-center">
                Here are some of the projects I've built using React, Tailwind,
                TypeScript, and other technologies.
              </p>
              <p className="text-center">
                Click on any project to see more details.
              </p>
            </div>
          )}

          <div
            className={`flex flex-1 flex-wrap ${isMobile ? "justify-center" : "justify-start"} overflow-y-auto p-2`}
          >
            {isMobile && (
              <div className="mb-4 w-full text-center text-chipWhite">
                <h2 className="text-xl font-bold">My Projects</h2>
                <p className="text-sm">
                  Click on any project to see more details
                </p>
              </div>
            )}

            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={handleProjectClick}
                isMobile={isMobile}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AppsScreen;
