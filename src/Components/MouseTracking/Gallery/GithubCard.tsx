import React from "react";
import github from "../../../assets/links/icons8-github.svg";
import GalleryCard from "./GalleryCard";

interface GithubCardProps {
  mouseOverElementHandler: (name: string | null) => void;
}

const GithubCard: React.FC<GithubCardProps> = ({ mouseOverElementHandler }) => {
  return (
    <GalleryCard
      bottom="23%"
      right="25%"
      mdHeight="17%"
      mdWidth="15%"
      background="bg-[#54EAFF]"
      mouseOverElementHandler={mouseOverElementHandler}
      name="Github"
      image={{
        src: github,
        alt: "github logo",
      }}
    >
      <a
        onMouseMove={() => mouseOverElementHandler(null)}
        target="_blank"
        href="https://github.com/brad-za"
        className="grid h-full w-full place-items-center text-3xl leading-9"
      >
        Take a look at my github profile and the way I like to code.
      </a>
    </GalleryCard>
  );
};

export default GithubCard;
