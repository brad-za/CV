import React from "react";
import GalleryCard from "./GalleryCard";

interface FunCardProps {
  mouseOverElementHandler: (name: string | null) => void;
  mobileOrder?: number;
}

const FunCard: React.FC<FunCardProps> = ({
  mouseOverElementHandler,
  mobileOrder,
}) => {
  return (
    <GalleryCard
      right="24%"
      top="35%"
      mdHeight="20%"
      mdWidth="10%"
      background="bg-[#df2b2b]"
      mouseOverElementHandler={mouseOverElementHandler}
      name="Desk"
      label="DESK"
      labelDirection="down"
      mobileOrder={mobileOrder}
      actionLabel="Click me →"
      to="/blog/cad/hardware/standing-desk"
      content="Check out my custom standing desk build!"
    />
  );
};

export default FunCard;
