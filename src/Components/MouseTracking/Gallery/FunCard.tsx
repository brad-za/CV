import React from "react";
import GalleryCard from "./GalleryCard";

interface FunCardProps {
  mouseOverElementHandler: (name: string | null) => void;
}

const FunCard: React.FC<FunCardProps> = ({ mouseOverElementHandler }) => {
  return (
    <GalleryCard
      right="24%"
      top="35%"
      mdHeight="20%"
      mdWidth="10%"
      background="bg-[#df2b2b]"
      mouseOverElementHandler={mouseOverElementHandler}
      name="Fun"
      label="FUN"
      labelDirection="left"
    >
      <div />
    </GalleryCard>
  );
};

export default FunCard;
