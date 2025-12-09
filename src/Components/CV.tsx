import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocation } from "react-router-dom";
import Skills from "./Skills.tsx";
import aboutMe from "./CV/aboutMe.json";
import jobs from "./CV/jobs.json";
import education from "./CV/education.json";
import references from "./CV/references.json";
import Seperator from "./Seperator.tsx";
import Heading from "./CV/Heading.tsx";
import List from "./CV/List.tsx";
import FAQ from "./FAQ.tsx";
import { generateCV } from "../utils/generateCV.ts";
import profileImage from "../assets/links/me.jpg";

gsap.registerPlugin(ScrollTrigger);

// Skills data - kept in sync with Skills component
const skills = [
  { name: "React", stars: 4 },
  { name: "Node", stars: 4 },
  { name: "Tailwind", stars: 4 },
  { name: "GIT", stars: 4 },
  { name: "Rust", stars: 1 },
  { name: "Python", stars: 4 },
  { name: "CSS", stars: 4 },
  { name: "JavaScript", stars: 4 },
  { name: "SEO", stars: 3 },
  { name: "SQL", stars: 2 },
];

// Personal info
const personalInfo = {
  name: "Brad Simon",
  birthDate: new Date(1996, 5, 18), // June 18, 1996 (month is 0-indexed)
  location: "Cape Town",
  github: "github.com/brad-za",
};

interface SectionRefs {
  [key: string]: React.RefObject<HTMLHeadingElement>;
}

const CV: React.FC = () => {
  const [profileImageBase64, setProfileImageBase64] = useState<
    string | undefined
  >(undefined);
  const location = useLocation();

  // Load profile image as base64 on mount
  useEffect(() => {
    const loadImage = async () => {
      try {
        const response = await fetch(profileImage);
        const blob = await response.blob();
        const reader = new FileReader();
        reader.onloadend = () => {
          setProfileImageBase64(reader.result as string);
        };
        reader.readAsDataURL(blob);
      } catch (error) {
        console.warn("Could not load profile image:", error);
      }
    };
    loadImage();
  }, []);

  // Handle hash navigation to scroll to sections
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        // Use setTimeout to ensure the page has loaded
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);

  const sectionRefs = useRef<{
    [key: string]: React.RefObject<HTMLHeadingElement>;
  }>({
    "About Me": useRef(null),
    "Technical Profile": useRef(null),
    Education: useRef(null),
    "Work History": useRef(null),
    References: useRef(null),
  });

  const handleClick = (section: string): void => {
    sectionRefs.current[section].current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleExportPDF = (): void => {
    generateCV(
      aboutMe,
      skills,
      education,
      jobs,
      personalInfo,
      profileImageBase64
    );
  };

  return (
    <div className="mx-4 my-10 w-full p-4 md:mx-28 md:w-2/3">
      {/* Export PDF Button */}
      <div className="mb-8 flex justify-end">
        <button
          onClick={handleExportPDF}
          className="rounded-lg bg-[#2c3e50] px-6 py-3 font-semibold text-white transition-all duration-200 hover:bg-[#34495e] hover:shadow-lg"
        >
          Export as PDF
        </button>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-4 md:gap-y-32">
        {/* About Me */}
        <div className="col-span-1 md:col-span-3 md:contents">
          <div className="relative hidden md:col-span-1 md:block md:border-r-2">
            <h1
              ref={sectionRefs.current["About Me"]}
              className="sticky top-1/2 -translate-y-1/2 transform text-xl font-bold underline"
            >
              About Me
            </h1>
          </div>
          <div className="md:col-span-2 md:my-10 md:mt-4 md:pl-6">
            <h1 className="mb-6 text-center text-2xl font-bold underline md:hidden">
              About Me
            </h1>
            <div className="p-4">
              {aboutMe.map((paragraph: string) => (
                <div key={paragraph}>
                  {paragraph}
                  <br />
                  <br />
                </div>
              ))}
              <p>
                Please explore my{" "}
                <a
                  className="text-blue-500"
                  target="_blank"
                  href="https://github.com/brad-za"
                >
                  github
                </a>{" "}
                profile to see some of the work I have done and the progress I
                have made in my coding journey.
              </p>
              <br />
              <p>
                I am especially happy with my performance in the 2022 Advent of
                Code challenge,{" "}
                <a
                  className="text-blue-500"
                  target="_blank"
                  href="https://github.com/brad-za/AOC"
                >
                  found here
                </a>
              </p>
            </div>
          </div>
        </div>
        <Seperator />
        {/* Technical Profile */}
        <div className="col-span-1 md:col-span-3 md:contents">
          <div className="relative hidden md:col-span-1 md:block md:border-r-2">
            <h1
              ref={sectionRefs.current["Technical Profile"]}
              className="sticky top-1/2 -translate-y-1/2 transform text-xl font-bold underline"
            >
              Technical Profile
            </h1>
          </div>
          <div className="md:col-span-2 md:my-10 md:mt-4 md:pl-6">
            <h1 className="mb-6 text-center text-2xl font-bold underline md:hidden">
              Technical Profile
            </h1>
            <div className="p-4">
              <Skills col={false} />
            </div>
          </div>
        </div>
        <Seperator />
        {/* Education */}
        <div className="col-span-1 md:col-span-3 md:contents">
          <div className="relative hidden md:col-span-1 md:block md:border-r-2">
            <h1
              ref={sectionRefs.current["Education"]}
              className="sticky top-1/2 -translate-y-1/2 transform text-xl font-bold underline"
            >
              Education
            </h1>
          </div>
          <div className="md:col-span-2 md:my-10 md:mt-4 md:pl-6">
            <h1 className="mb-6 text-center text-2xl font-bold underline md:hidden">
              Education
            </h1>
            <div className="p-4">
              {education.map((topic: any, idx: number) => (
                <div key={idx} className="bg-fuchsia- my-10 p-4">
                  <Heading position={topic.subject} date={topic.year} />
                  <div className="px-2">
                    <p>{topic.about}</p>
                    {topic.courses && <List items={topic.courses} />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Seperator />
        {/* Work History */}
        <div className="col-span-1 md:col-span-3 md:contents">
          <div className="relative hidden md:col-span-1 md:block md:border-r-2">
            <h1
              ref={sectionRefs.current["Work History"]}
              className="sticky top-1/2 -translate-y-1/2 transform text-xl font-bold underline"
            >
              Work History
            </h1>
          </div>
          <div className="md:col-span-2 md:my-10 md:mt-4 md:pl-6">
            <h1 className="mb-6 text-center text-2xl font-bold underline md:hidden">
              Work History
            </h1>
            <div className="p-4">
              {jobs.map((job: any, idx: number) => (
                <div key={idx} className="gap-y- m- bg-fuchsia- my-10 p-4">
                  <Heading position={job.position} date={job.date} />

                  <p className="bg-gray- pb-3 pl-3 italic">{job.company}</p>
                  <p className="bg-red-">{job.about}</p>
                  <List items={job.duties} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <Seperator />
        {/* References */}
        <div className="col-span-1 md:col-span-3 md:contents">
          <div className="relative hidden md:col-span-1 md:block md:border-r-2">
            <h1
              ref={sectionRefs.current["References"]}
              className="sticky top-1/2 -translate-y-1/2 transform text-xl font-bold underline"
            >
              References
            </h1>
          </div>
          <div
            id="references"
            className="md:col-span-2 md:my-10 md:mt-4 md:pl-6"
          >
            <h1 className="mb-6 text-center text-2xl font-bold underline md:hidden">
              References
            </h1>
            <div className="p-4">
              {references.map((ref: any, idx: number) => (
                <div key={idx} className="gap-y- m- bg-fuchsia- my-4 p-4">
                  <p className="font-semibold">{ref.name}</p>
                  <a className="text-blue-500" href={`mailto:${ref.email}`}>
                    {ref.email}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-16 flex w-full justify-center">
        <FAQ />
      </div>
    </div>
  );
};

export default CV;
