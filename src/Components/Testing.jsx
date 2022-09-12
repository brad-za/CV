import React, { useEffect, useRef, useState } from "react";
import BabyNavbar from "../Components/BabyNavbar.jsx";
import AppScreen from "./Hero/AppsScreen.jsx";
import WelcomeScreen from "./Hero/WelcomeScreen.jsx";

function Testing() {
  const [size, setSize] = useState(false);
  const [moveScreenUp, setMoveScreenUp] = useState(true);
  const moveScreenDown = useRef(false);
  const [animationIter, setAnimationIter] = useState(0);
  const screenSizeChanging = useRef(false);
  const ScreenSizeChangingTimer = useRef(0);
  const moveScreenDownTimer = useRef(0);
  const busyAnimationTimer = useRef(0);

  const animationLogic = () => {
    console.log(
      "step 1: screen SIZE countdown has started 12s until 5s animation, 17s until completely animated"
    );
    ScreenSizeChangingTimer.current = setTimeout(() => {
      console.log("step 2: screen SIZE animation should be taking place");
      setSize(!size);
      screenSizeChanging.current = true;
      busyAnimationTimer.current = setTimeout(() => {
        setMoveScreenUp(!moveScreenUp);
        console.log(
          "step 3: screen slide up animation should be taking place for 5 seconds."
        );
      }, "5000");
    }, "12000");
  };

  useEffect(() => {
    animationLogic();

    return () => {
      clearTimeout(ScreenSizeChangingTimer.current);
      clearTimeout(busyAnimationTimer.current);
    };
  }, [size]);

  return (
    <div
      className={
        "bg-blue- relative flex w-[1000px] content-center justify-center"
      }
    >
      <div
        style={{ clipPath: "inset(0 0 0 0 round 0% 0% 0.5rem 0%)" }}
        className={`bg-blue- flex content-center items-center justify-center rounded-lg duration-[5000ms] ease-in-out ${
          size ? "h-[580px] w-[300px]" : "h-[620px] w-[1000px]"
        }`}
      >
        <div
          className={`absolute bottom-0 right-0 rounded-br-lg bg-blue-200 px-8 py-6`}
        >
          <p className="">scroll</p>
        </div>
        <div
          className={`bg-pink- rounded-xl border-2 border-black transition-multiple duration-[5000ms]
                ${
                  size
                    ? "h-[580px] w-[300px] text-center"
                    : " h-[620px] w-[1000px] "
                }`}
        >
          <BabyNavbar size={size} />
          <div
            style={{ animationFillMode: "forwards" }}
            className={`bg-slate- h-full flex-row  rounded-lg 
            ${
              //   " animation-delay- animate-moveScreen " // works
              moveScreenUp ? " animate-moveScreenUp" : " animate-moveScreenDown"
            }
            `}
          >
            <WelcomeScreen moveScreenUp={moveScreenUp} size={size} />
            <AppScreen moveScreenUp={moveScreenUp} size={size} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testing;
