import React, { useState } from "react";
import SkillsCard from "./Gallery/SkillsCard";
import { useNavigate } from "react-router-dom";
import GithubCard from "./Gallery/GithubCard";
import FunCard from "./Gallery/FunCard";
import TeamCard from "./Gallery/TeamCard";
import ToolsCard from "./Gallery/ToolsCard";
import QualityCard from "./Gallery/QualityCard";
import BioCard from "./Gallery/BioCard";
import NavCard from "./Gallery/NavCard";
import MeCard from "./Gallery/MeCard";
import GalleryCard from "./Gallery/GalleryCard";

interface PanAmount {
  panX: number;
  panY: number;
}

interface GalleryElementsProps {
  mouseOverElementHandler: (name: string | null) => void;
  panAmount: PanAmount;
}

// Keyboard card using prop-driven API
const KeyboardCard: React.FC<{
  mouseOverElementHandler: (name: string | null) => void;
  mobileOrder?: number;
}> = ({ mouseOverElementHandler, mobileOrder }) => {
  const navigate = useNavigate();

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
      mobileOrder={mobileOrder}
      image={{ src: "/keyboard.svg", alt: "keyboard" }}
      menuItems={[
        {
          label: "ZMK",
          onClick: () => {
            mouseOverElementHandler(null);
            navigate("/blog/zmk");
          },
        },
        {
          label: "QMK",
          onClick: () => {
            mouseOverElementHandler(null);
            navigate("/blog/qmk");
          },
        },
      ]}
    />
  );
};

const GalleryElements: React.FC<GalleryElementsProps> = ({
  mouseOverElementHandler,
  panAmount,
}) => {
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleMouseOver = (name: string): void => {
    setHoveredElement(name);
    mouseOverElementHandler(name);
  };

  return (
    <div className="flex flex-col gap-6 p-4 md:block md:p-0">
      {/* Mobile: flex column with gaps. Desktop (md+): block layout, no gaps, absolute positioning takes over */}
      <NavCard mouseOverElementHandler={handleMouseOver} mobileOrder={1} />
      <MeCard mouseOverElementHandler={handleMouseOver} mobileOrder={2} />
      <BioCard mouseOverElementHandler={handleMouseOver} mobileOrder={3} />
      <SkillsCard mouseOverElementHandler={handleMouseOver} mobileOrder={4} />
      <ToolsCard mouseOverElementHandler={handleMouseOver} mobileOrder={5} />
      <GithubCard mouseOverElementHandler={handleMouseOver} mobileOrder={6} />
      <KeyboardCard mouseOverElementHandler={handleMouseOver} mobileOrder={7} />
      <QualityCard mouseOverElementHandler={handleMouseOver} mobileOrder={8} />
      <TeamCard mouseOverElementHandler={handleMouseOver} mobileOrder={9} />
      <FunCard mouseOverElementHandler={handleMouseOver} mobileOrder={10} />
      {/* <BlogCard mouseOverElementHandler={handleMouseOver} /> */}
      {/* CONTACT */}
      <GalleryCard
        bottom="3%"
        right="17%"
        mdHeight="17%"
        mdWidth="20%"
        background="bg-[#FF511B]"
        mouseOverElementHandler={handleMouseOver}
        name="call me ;)"
        label="CONTACT"
        labelDirection="up"
        mobileOrder={11}
        menuItems={[
          {
            label: "Email",
            externalHref: "mailto:br4ds1mon@gmail.com",
          },
          {
            label: "Discord",
            externalHref: "https://discord.com/users/202008244397277184",
          },
          {
            label: "Refs",
            onClick: () => {
              mouseOverElementHandler(null);
              navigate("/CV#references");
            },
          },
        ]}
      />
    </div>
  );
};

export default GalleryElements;
