import React from "react";
import GalleryCard from "./GalleryCard";

interface TeamCardProps {
  mouseOverElementHandler: (name: string | null) => void;
  mobileOrder?: number;
}

const TeamCard: React.FC<TeamCardProps> = ({
  mouseOverElementHandler,
  mobileOrder,
}) => (
  <GalleryCard
    bottom="6%"
    right="43%"
    mdHeight="26%"
    mdWidth="16%"
    background="bg-[#C2FF42]"
    mouseOverElementHandler={mouseOverElementHandler}
    name="Team"
    label="TEAM"
    labelDirection="up"
    mobileOrder={mobileOrder}
    content="I enjoy working on a team and learning from my peers and leaders. I am a fast learner and I am ready to take on any challenge."
  />
);

export default TeamCard;
