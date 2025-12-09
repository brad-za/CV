import React from "react";
import TextAnimation from "./Hero/TextAnimation";
import ScrollAnimation from "./Hero/ScrollAnimation";
import HeroAnimationSettingsProvider from "../Hooks/useHeroAnimationSettings";

const Hero: React.FC = () => {
  return (
    <HeroAnimationSettingsProvider>
      {/* Wrap the content with the provider */}
      <div className="bg-pink- relative flex h-[82vh] flex-wrap items-center justify-center">
        <TextAnimation />
        <ScrollAnimation />
      </div>
    </HeroAnimationSettingsProvider>
  );
};

export default Hero;
