export interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  image?: string;
  githubLink?: string;
  demoLink?: string;
  expanded?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "Project 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    technologies: ["React", "Tailwind", "TypeScript", "Vite"],
    image: "/placeholder.jpg",
    githubLink: "#",
    demoLink: "#",
    expanded: false,
  },
  {
    id: 2,
    name: "Project 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    technologies: ["React", "Tailwind", "TypeScript", "Vite"],
    image: "/placeholder.jpg",
    githubLink: "#",
    demoLink: "#",
    expanded: false,
  },
  {
    id: 3,
    name: "Project 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    technologies: ["React", "Tailwind", "TypeScript", "Vite"],
    image: "/placeholder.jpg",
    githubLink: "#",
    demoLink: "#",
    expanded: false,
  },
];
