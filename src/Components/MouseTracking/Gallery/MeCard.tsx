import React from "react";
import me from "../../../assets/links/me.jpg";
import partyHat from "../../../assets/links/party-hat.svg";
import GalleryCard from "./GalleryCard";

interface MeCardProps {
  mouseOverElementHandler: (name: string | null) => void;
}

const calculateAge = (birthDate: Date): number => {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
};

const MeCard: React.FC<MeCardProps> = ({ mouseOverElementHandler }) => {
  const birthDate = new Date(1997, 2, 12); // March 12, 1997
  const age = calculateAge(birthDate);
  const isMyBirthday =
    new Date().getMonth() === birthDate.getMonth() &&
    new Date().getDate() === birthDate.getDate();

  return (
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
    >
      <div className="flex flex-col items-center gap-2">
        <p className="text-3xl">
          I am an avid learner. I am an intermediate programmer but an expert
          problem solver.
        </p>
      </div>
    </GalleryCard>
  );
};

export default MeCard;
