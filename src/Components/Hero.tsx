import React from "react";
import AnimationLogic from "./Hero/AnimationLogic.tsx";
import TextAnimation from "./Hero/TextAnimation.tsx";
import AnimationSettings from "./Hero/AnimationSettings.tsx";
import HeroAnimationSettingsProvider from "../Hooks/useHeroAnimationSettings.tsx";

const Hero: React.FC = () => {
  return (
    <HeroAnimationSettingsProvider>
      {/* Wrap the content with the provider */}
      <div className="bg-pink- relative flex h-[82vh] flex-wrap items-center justify-center">
        <AnimationSettings />
        <AnimationLogic />
        <TextAnimation />
      </div>
    </HeroAnimationSettingsProvider>
  );
};

export default Hero;
