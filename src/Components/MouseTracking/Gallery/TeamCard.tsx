import React from "react";
import GalleryCard from "./GalleryCard";

interface TeamCardProps {
  mouseOverElementHandler: (name: string | null) => void;
}

const TeamCard: React.FC<TeamCardProps> = ({ mouseOverElementHandler }) => {
  return (
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
    >
      <div className="grid h-full w-full text-3xl place-items-center">
        <p className="">
          I enjoy working on a team and learning from my peers and leaders. I am
          a fast learner and I am ready to take on any challenge.
        </p>
      </div>
    </GalleryCard>
  );
};

export default TeamCard;
