import React from "react";
import GalleryCard from "./GalleryCard";

interface QualityCardProps {
  mouseOverElementHandler: (name: string | null) => void;
  mobileOrder?: number;
}

const QualityCard: React.FC<QualityCardProps> = ({
  mouseOverElementHandler,
  mobileOrder,
}) => (
  <GalleryCard
    left="8%"
    top="13%"
    mdHeight="20%"
    mdWidth="22%"
    background="bg-[#FF4179]"
    mouseOverElementHandler={mouseOverElementHandler}
    name="Quality"
    label="QUALITY"
    labelDirection="up"
    mobileOrder={mobileOrder}
    content="I stand for quality and strive to exceed expectations. I love to spend time on the smaller details and optimizations."
  />
);

export default QualityCard;
