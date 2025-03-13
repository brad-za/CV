import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import me from "../../assets/links/me.jpg";
import blog from "../../assets/links/blog.svg";
import SkillsCard from "./Gallery/SkillsCard";
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
      {/* THREE */}
      <div
        className="group"
        onMouseOver={() => {
          mouseOverElementHandler("THREE");
        }}
        onMouseOut={() => mouseOverElementHandler(null)}
      >
        <div className="group bottom-[35%] left-[25%] flex items-center justify-center overflow-hidden rounded-3xl bg-[#ff7519] text-3xl font-extrabold text-black  md:absolute md:h-[24%] md:w-[18%]">
          <div className="ease md:group-hover: bg-red- bottom-2 right-3 duration-200 md:absolute md:group-hover:translate-x-[120%]">
            <p className="">THREE</p>
          </div>
        </div>
      </div>
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
