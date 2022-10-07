import React from "react";
import AnimationLogic from "./Hero/AnimationLogic";
import TextAnimation from "./Hero/TextAnimation";

function Hero() {
  return (
    <div className="jusify-center bg-pink-  relative flex h-[82vh] flex-wrap  items-center">
      <AnimationLogic className="" />
      <TextAnimation />
    </div>
  );
}

export default Hero;
