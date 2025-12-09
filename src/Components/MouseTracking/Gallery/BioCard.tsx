import React from "react";
import GalleryCard from "./GalleryCard";
import me from "../../../assets/links/me.jpg";
import partyHat from "../../../assets/links/party-hat.svg";

interface BioCardProps {
  mouseOverElementHandler: (name: string | null) => void;
  mobileOrder?: number;
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

const BioCard: React.FC<BioCardProps> = ({
  mouseOverElementHandler,
  mobileOrder,
}) => {
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
      mobileOrder={mobileOrder}
      profileImage={{
        src: me,
        alt: "Profile",
        birthdayOverlay: {
          src: partyHat,
          alt: "party hat",
          isBirthday: isMyBirthday,
        },
      }}
      content={["Name : Brad Simon", `Age : ${age}`, "Location : Cape Town"]}
    />
  );
};

export default BioCard;
