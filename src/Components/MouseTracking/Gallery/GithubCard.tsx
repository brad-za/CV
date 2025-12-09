import React from "react";
import github from "../../../assets/links/icons8-github.svg";
import GalleryCard from "./GalleryCard";

interface GithubCardProps {
  mouseOverElementHandler: (name: string | null) => void;
  mobileOrder?: number;
}

const GithubCard: React.FC<GithubCardProps> = ({
  mouseOverElementHandler,
  mobileOrder,
}) => (
  <GalleryCard
    bottom="23%"
    right="25%"
    mdHeight="17%"
    mdWidth="15%"
    background="bg-[#54EAFF]"
    mouseOverElementHandler={mouseOverElementHandler}
    name="Github"
    mobileOrder={mobileOrder}
    image={{
      src: github,
      alt: "github logo",
    }}
    content="Take a look at my github profile and the way I like to code."
    href="https://github.com/brad-za"
    actionLabel="Click me →"
  />
);

export default GithubCard;
