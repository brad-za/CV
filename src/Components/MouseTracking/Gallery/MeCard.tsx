import React from "react";
import GalleryCard from "./GalleryCard";

interface MeCardProps {
  mouseOverElementHandler: (name: string | null) => void;
  mobileOrder?: number;
}

const MeCard: React.FC<MeCardProps> = ({
  mouseOverElementHandler,
  mobileOrder,
}) => (
  <GalleryCard
    right="20%"
    top="10%"
    mdHeight="20%"
    mdWidth="24%"
    background="bg-[#FF4ED8]"
    mouseOverElementHandler={mouseOverElementHandler}
    name="Me"
    label="ME"
    labelDirection="down"
    mobileOrder={mobileOrder}
    content="I am an avid learner. I am an intermediate programmer but an expert problem solver."
  />
);

export default MeCard;
