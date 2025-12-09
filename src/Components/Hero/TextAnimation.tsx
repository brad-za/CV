import React from "react";
import TypeAnimation from "./TypeAnimation.tsx";
import { HeroAnimationSettings } from "../../Hooks/useHeroAnimationSettings.tsx";
import profileImage from "../../assets/links/me.jpg";

interface TextAnimationProps {}

const TextAnimation: React.FC<TextAnimationProps> = () => {
  const { textTiming, textAnimation } = HeroAnimationSettings();

  return (
    <div className="m-auto flex flex-col content-center items-center justify-center px-4 font-bold text-chipWhite">
      <img
        src={profileImage}
        alt="Profile"
        className="mb-4 h-40 w-40 rounded-full object-cover sm:h-48 sm:w-48 md:h-56 md:w-56"
      />
      <div
        className={`flex w-full max-w-[800px] flex-col space-y-2 text-6xl sm:ml-6 sm:flex-row sm:space-x-3 sm:space-y-0 sm:text-7xl md:text-8xl`}
      >
        <h1>I like to </h1>
        {/* Text to Animate */}
        <h1 className="bg-yellow-400 px-1 pb-2 text-black sm:pb-3 md:pb-4 lg:pb-5">
          <TypeAnimation
            sequence={["code", "tinker", "learn", "engage"]}
            delay={textTiming}
            cursor={false}
            repeat={Infinity}
            active={textAnimation}
          />
        </h1>
      </div>
    </div>
  );
};

export default TextAnimation;
