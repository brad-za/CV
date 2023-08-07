import React from "react";
import AnimationLogic from "./Hero/AnimationLogic";
import TextAnimation from "./Hero/TextAnimation";
import AnimationSettings from "./Hero/AnimationSettings";
import HeroAnimationSettingsProvider from "../Hooks/useHeroAnimationSettings";

function Hero() {
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
}

export default Hero;
