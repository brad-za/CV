import React from "react";
import Skills from "../../Skills";
import GalleryCard from "./GalleryCard";

interface SkillsCardProps {
  mouseOverElementHandler: (name: string | null) => void;
  mobileOrder?: number;
}

const SkillsCard: React.FC<SkillsCardProps> = ({
  mouseOverElementHandler,
  mobileOrder,
}) => {
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
      mobileOrder={mobileOrder}
    >
      <Skills col />
    </GalleryCard>
  );
};

export default SkillsCard;
