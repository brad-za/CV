import React from "react";
import Tools from "../../Tools";
import GalleryCard from "./GalleryCard";

interface ToolsCardProps {
  mouseOverElementHandler: (name: string | null) => void;
}

const ToolsCard: React.FC<ToolsCardProps> = ({ mouseOverElementHandler }) => {
  return (
    <GalleryCard
      bottom="10%"
      left="3.75%"
      mdHeight="40%"
      mdWidth="18%"
      background="bg-[#C059FF]"
      mouseOverElementHandler={mouseOverElementHandler}
      name="Tools"
      label="TOOLS"
      labelDirection="right"
    >
      <Tools col />
    </GalleryCard>
  );
};

export default ToolsCard;
