import React from "react";
import Skills from "../../Skills";
import GalleryCard from "./GalleryCard";

interface SkillsCardProps {
  mouseOverElementHandler: (name: string | null) => void;
}

const SkillsCard: React.FC<SkillsCardProps> = ({ mouseOverElementHandler }) => {
  return (
    <GalleryCard
      bottom="25%"
      right="6%"
      mdHeight="32%"
      mdWidth="16%"
      background="bg-[#33D056]"
      mouseOverElementHandler={mouseOverElementHandler}
      name="Skills"
      label="SKILLS"
      labelDirection="up"
    >
      <Skills col />
    </GalleryCard>
  );
};

export default SkillsCard;
