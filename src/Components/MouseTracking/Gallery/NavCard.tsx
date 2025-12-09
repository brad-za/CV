import React from "react";
import GalleryCard from "./GalleryCard";

interface NavCardProps {
  mouseOverElementHandler: (name: string | null) => void;
  mobileOrder?: number;
}

const NavCard: React.FC<NavCardProps> = ({
  mouseOverElementHandler,
  mobileOrder,
}) => (
  <GalleryCard
    right="4%"
    top="2%"
    mdHeight="34%"
    mdWidth="12%"
    background="bg-[#FFEC45]"
    mouseOverElementHandler={mouseOverElementHandler}
    name="NAV"
    label="NAV"
    labelDirection="down"
    mobileOrder={mobileOrder}
    menuItems={[
      { label: "Home", href: "/", end: true },
      { label: "Blog", href: "/blog" },
      { label: "CV", href: "/CV", end: true },
    ]}
  />
);

export default NavCard;
