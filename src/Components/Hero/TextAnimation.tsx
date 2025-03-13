import React from "react";
import TypeAnimation from "./TypeAnimation.tsx";
import { HeroAnimationSettings } from "../../Hooks/useHeroAnimationSettings.tsx";

interface TextAnimationProps {}

const TextAnimation: React.FC<TextAnimationProps> = () => {
  const { textTiming, textAnimation } = HeroAnimationSettings();

  return (
    <div className=" m-auto flex content-center items-center justify-center font-bold text-chipWhite">
      <div className={`ml-6 flex w-[800px] space-x-3 text-8xl `}>
        <h1>I like to </h1>
        {/* Text to Animate */}
        <h1 className="bg-yellow-400 px-1 pb-5 text-black">
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
