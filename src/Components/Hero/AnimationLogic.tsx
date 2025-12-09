import React, { useEffect, useRef, useState } from "react";
import AppScreen from "./AppsScreen.tsx";
import WelcomeScreen from "./WelcomeScreen.tsx";
import AnimationWindow from "./AnimationWindow.tsx";
import {
  HeroAnimationSettings,
  ScreenType,
} from "../../Hooks/useHeroAnimationSettings";

interface AnimationLogicProps {}

const AnimationLogic: React.FC<AnimationLogicProps> = () => {
  const [moveScreenVert, setMoveScreenVert] = useState<string>("");
  const [moveScreenHorz, setMoveScreenHorz] = useState<boolean>(true);
  const [animationState, setAnimationState] = useState<string>("");
  const animationIter = useRef<number>(0);

  const {
    isOpen,
    animationsEnabled,
    changeSize,
    moveVertically,
    moveHorizontally,
    textAnimation,
    activeScreen,
    isMobile,
    desktopSize,
    mobileSize,
    sizeTiming,
    verticalTiming,
    horizontaltiming,
    textTiming,
    setIsMobile,
  } = HeroAnimationSettings();

  // Compute the current window size based on isMobile
  const windowSize = isMobile ? mobileSize : desktopSize;

  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

  const animationLoop = async () => {
    console.log(
      `animation iteration ${animationIter.current} : \n ${moveScreenVert} | ${windowSize}`
    );
    console.log({ changeSize, moveVertically, animationsEnabled });

    // Only run animations if they are enabled
    if (animationsEnabled) {
      if (changeSize) {
        await delay(Number(sizeTiming));
        changeWindowSize();
      }

      if (moveVertically) {
        await delay(Number(verticalTiming));
        moveScreenVertical();
      }
    }

    animationIter.current += 1;
  };

  const changeWindowSize = () => {
    // responsible for making the window size bigger / smaller
    if (true) {
      setIsMobile?.(!isMobile);
    }
  };

  const moveScreenVertical = () => {
    // responsible for moving the screen up / down
    if (moveScreenVert === "animate-moveScreenUp") {
      setMoveScreenVert("animate-moveScreenDown");
    } else {
      setMoveScreenVert("animate-moveScreenUp");
    }
  };

  useEffect(() => {
    animationLoop();
  }, [animationIter.current]);

  const perspectiveStyle = {
    transform: "rotateY(11deg)",
    perspective: "1000px",
  };

  // Determine which screen to show based on the activeScreen state
  const showWelcomeScreen = activeScreen === "welcome";
  const showProjectsScreen = activeScreen === "projects";

  return (
    <>
      <div style={perspectiveStyle} className="mb-24">
        <AnimationWindow
          perspectiveStyle={perspectiveStyle}
          windowSize={windowSize}
          moveScreenVert={moveScreenVert}
        >
          <div className="relative h-full w-full overflow-hidden">
            {showWelcomeScreen && (
              <div className="h-full w-full">
                <WelcomeScreen />
              </div>
            )}
            {showProjectsScreen && (
              <div className="h-full w-full">
                <AppScreen isMobile={isMobile} />
              </div>
            )}
          </div>
        </AnimationWindow>
      </div>
    </>
  );
};

export default AnimationLogic;
