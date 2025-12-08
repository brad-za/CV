import React, { useState } from "react";
import SkillsCard from "./Gallery/SkillsCard";
import { useNavigate } from "react-router-dom";
import GithubCard from "./Gallery/GithubCard";
import FunCard from "./Gallery/FunCard";
import TeamCard from "./Gallery/TeamCard";
import ToolsCard from "./Gallery/ToolsCard";
import QualityCard from "./Gallery/QualityCard";
import BioCard from "./Gallery/BioCard";
import BlogCard from "./Gallery/BlogCard";
import NavCard from "./Gallery/NavCard";
import MeCard from "./Gallery/MeCard";

interface PanAmount {
  panX: number;
  panY: number;
}

interface GalleryElementsProps {
  mouseOverElementHandler: (name: string | null) => void;
  panAmount: PanAmount;
}

// Keyboard card that mirrors the GitHub card hover behavior
import GalleryCard from "./Gallery/GalleryCard";
// direct navigation to blog language routes

const KeyboardCard: React.FC<{
  mouseOverElementHandler: (name: string | null) => void;
}> = ({ mouseOverElementHandler }) => {
  const navigate = useNavigate();

  const navigateToCategory = (categoryKey: string) => {
    mouseOverElementHandler(null);
    // Navigate directly to the language route as requested (e.g. /blog/zmk)
    navigate(`/blog/${categoryKey}`);
  };

  return (
    <GalleryCard
      bottom="35%"
      left="25%"
      mdHeight="24%"
      mdWidth="18%"
      background="bg-[#ff7519]"
      mouseOverElementHandler={mouseOverElementHandler}
      name="Keyboard"
      label="KEYBOARD"
      labelDirection="up"
      image={{ src: "/keyboard.svg", alt: "keyboard" }}
    >
      <div className="flex gap-2 flex-col h-full w-full">
        <button
          onMouseMove={() => mouseOverElementHandler(null)}
          onClick={() => navigateToCategory("zmk")}
          className="flex items-center justify-center w-full h-full border-b-2 border-transparent text-[3vmin] font-normal tracking-wider hover:border-black"
        >
          <span>ZMK</span>
        </button>
        <button
          onMouseMove={() => mouseOverElementHandler(null)}
          onClick={() => navigateToCategory("qmk")}
          className="flex items-center justify-center w-full h-full border-b-2 border-transparent text-[3vmin] font-normal tracking-wider hover:border-black"
        >
          <span>QMK</span>
        </button>
      </div>
    </GalleryCard>
  );
};

const GalleryElements: React.FC<GalleryElementsProps> = ({
  mouseOverElementHandler,
  panAmount,
}) => {
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);

  const handleMouseOver = (name: string): void => {
    setHoveredElement(name);
    mouseOverElementHandler(name);
  };

  return (
    <React.Fragment>
      {/* [&>*]: is an arbitrary selector that styles all children */}
      <NavCard mouseOverElementHandler={handleMouseOver} />
      <SkillsCard mouseOverElementHandler={handleMouseOver} />
      <FunCard mouseOverElementHandler={handleMouseOver} />
      <GithubCard mouseOverElementHandler={handleMouseOver} />
      <TeamCard mouseOverElementHandler={handleMouseOver} />
      <ToolsCard mouseOverElementHandler={handleMouseOver} />
      <QualityCard mouseOverElementHandler={handleMouseOver} />
      <BioCard mouseOverElementHandler={handleMouseOver} />
      <MeCard mouseOverElementHandler={handleMouseOver} />
      {/* <BlogCard mouseOverElementHandler={handleMouseOver} /> */}
      {/* KEYBOARD chooser */}
      <KeyboardCard mouseOverElementHandler={handleMouseOver} />
      {/* CONTACT */}
      <div
        className="group"
        onMouseOver={() => {
          mouseOverElementHandler("call me ;)");
        }}
        onMouseOut={() => mouseOverElementHandler(null)}
      >
        <div className=" bottom-[8%] right-[17%]  block items-center justify-center overflow-hidden  rounded-3xl bg-[#FF511B] text-3xl font-extrabold text-black md:absolute md:h-[9%] md:w-[20%]">
          <div className=" p-3 duration-200 group-hover:translate-y-[-100%]">
            <p className="">CONTACT</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default GalleryElements;
