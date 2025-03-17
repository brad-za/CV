import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Skills from "./Skills.tsx";
import aboutMe from "./CV/aboutMe.json";
import jobs from "./CV/jobs.json";
import education from "./CV/education.json";
import Separator from "./Seperator.tsx";
import Seperator from "./Seperator.tsx";
import Heading from "./CV/Heading.tsx";
import List from "./CV/List.tsx";
import FAQ from "./FAQ.tsx";

gsap.registerPlugin(ScrollTrigger);

interface SectionRefs {
  [key: string]: React.RefObject<HTMLHeadingElement>;
}

const CV: React.FC = () => {
  const sectionRefs = useRef<{
    [key: string]: React.RefObject<HTMLHeadingElement>;
  }>({
    "About Me": useRef(null),
    "Technical Profile": useRef(null),
    Education: useRef(null),
    "Work History": useRef(null),
  });

  const handleClick = (section: string): void => {
    sectionRefs.current[section].current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="mx-28 my-10 w-2/3 p-4">
      <div className=" grid  grid-cols-3  gap-4 gap-y-32 ">
        {/* About Me */}
        <div className="relative col-span-1 border-r-2">
          <h1
            ref={sectionRefs.current["About Me"]}
            className="bg-whit sticky top-1/2 -translate-y-1/2 transform text-xl font-bold underline"
          >
            About Me
          </h1>
        </div>
        <div className="bg-red-  col-span-2 my-10 mt-4 p-4 pl-6">
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
        <Seperator />
        {/* Technical Profile */}
        <div className="relative col-span-1 border-r-2">
          <h1
            ref={sectionRefs.current["Technical Profile"]}
            className="bg-whit sticky top-1/2 -translate-y-1/2 transform text-xl font-bold underline"
          >
            Technical Profile
          </h1>
        </div>
        <div className="bg-red- col-span-2 my-10 mt-4 p-4 pl-6">
          <div className="p-4">
            <Skills col={false} />
          </div>
        </div>
        <Seperator />
        {/* Education */}
        <div className="relative col-span-1 border-r-2">
          <h1
            ref={sectionRefs.current["Education"]}
            className="bg-whit sticky top-1/2 -translate-y-1/2 transform text-xl font-bold underline"
          >
            Education
          </h1>
        </div>
        <div className="bg-red- col-span-2 my-10 mt-4 p-4 pl-6">
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
        <Seperator />
        {/* Work History */}
        <div className="relative col-span-1 border-r-2">
          <h1
            ref={sectionRefs.current["Work History"]}
            className="bg-whit sticky top-1/2 -translate-y-1/2 transform text-xl font-bold underline"
          >
            Work History
          </h1>
        </div>
        <div className="bg-red- col-span-2 my-10 mt-4 p-4 pl-6">
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

      {/* FAQ Section */}
      <div className="mt-16 flex w-full justify-center">
        <FAQ />
      </div>
    </div>
  );
};

export default CV;
