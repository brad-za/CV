import React from "react";
import me from "../../assets/links/me.jpg";
import { projects } from "./projectsData";
import ProjectCard from "./ProjectCard";

interface WelcomeScreenProps {}

const WelcomeScreen: React.FC<WelcomeScreenProps> = () => {
  return (
    <div className="flex h-full flex-col rounded-lg">
      <div className="rounded-xl p-5 font-bold text-chipWhite duration-[2000ms] ease-in-out">
        <p className="text-center">Welcome to my interactive CV</p>
        <p className="text-center">
          Explore my projects and see what I've been working on
        </p>
      </div>
      <div className="flex flex-1 flex-col md:flex-row rounded-xl text-chipWhite duration-[2000ms] ease-in-out">
        {/* Left column - Profile */}
        <div className="flex w-full md:w-1/2 flex-col items-center justify-center p-4">
          <img
            src={me}
            className="mb-4 w-2/3 min-w-[180px] max-w-[250px] rounded-full shadow-lg duration-[2000ms] ease-in-out"
            alt="Profile"
          />

          <div className="text-center">
            <p className="text-xl font-bold text-chipWhite md:text-2xl">
              My name is Brad
            </p>
            <p className="mt-2 text-sm text-chipWhite md:text-base">
              I like to write code and solve problems
            </p>
          </div>
        </div>

        {/* Right column - Projects */}
        <div className="flex w-full md:w-1/2 flex-col justify-center p-4">
          <h2 className="mb-4 text-center text-xl font-bold">My Projects</h2>
          <ul className="flex flex-col space-y-4">
            {projects.map((project) => (
              <li
                key={project.id}
                className="flex cursor-pointer items-center rounded-lg bg-gray-800 p-3 shadow-md transition-all duration-300 hover:shadow-lg"
              >
                <div className="mr-3 h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center text-lg font-bold">
                  {project.id}
                </div>
                <div>
                  <h3 className="text-lg font-bold">{project.name}</h3>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="rounded-full bg-gray-700 px-2 py-0.5 text-xs text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
