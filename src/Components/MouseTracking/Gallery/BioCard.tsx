import React from "react";
import GalleryCard from "./GalleryCard";
import me from "../../../assets/links/me.jpg";
import partyHat from "../../../assets/links/party-hat.svg";

interface BioCardProps {
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

const BioCard: React.FC<BioCardProps> = ({ mouseOverElementHandler }) => {
  const birthDate = new Date(1996, 6, 18); // June 18, 1996
  const age = calculateAge(birthDate);
  const isMyBirthday =
    new Date().getMonth() === birthDate.getMonth() &&
    new Date().getDate() === birthDate.getDate();

  return (
    <GalleryCard
      left="35%"
      top="4%"
      mdHeight="32%"
      mdWidth="14%"
      background="bg-[#55FFAD]"
      mouseOverElementHandler={mouseOverElementHandler}
      name="About me"
      label="BIO"
      labelDirection="down"
    >
      <div className="flex h-full flex-col justify-center">
        <div className="relative grid place-items-center">
          <div className="relative">
            <img
              src={me}
              className="mt-8 w-40 rounded-full shadow-lg"
              alt="Profile"
            />
            {isMyBirthday && (
              <img
                src={partyHat}
                alt="party hat"
                className="absolute top-3 left-1/2 h-14 w-14 -translate-x-1/2 animate-bounce"
              />
            )}
          </div>
        </div>
        <div className="mt-8 flex items-center">
          <div className="grid h-full w-full place-items-center">
            <div className="flex flex-col flex-nowrap">
              <p className="text-3xl leading-10">
                Name : Brad Simon
                <br />
                Age : {age}
                <br />
                Location : Cape Town
              </p>
            </div>
          </div>
        </div>
      </div>
    </GalleryCard>
  );
};

export default BioCard;
