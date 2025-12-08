import React from "react";
import GalleryCard from "./GalleryCard";

interface QualityCardProps {
  mouseOverElementHandler: (name: string | null) => void;
}

const QualityCard: React.FC<QualityCardProps> = ({
  mouseOverElementHandler,
}) => {
  return (
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
    >
      <div className="grid h-full w-full place-items-center">
        <p className="lg:text-3xl">
          I stand for quality and strive to exceed expectations. I love to spend
          time on the smaller details and optimizations.
        </p>
      </div>
    </GalleryCard>
  );
};

export default QualityCard;
