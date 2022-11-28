import React, { useEffect, useRef, useState } from "react";
import BabyNavbar from "./BabyNavbar.jsx";
import AppScreen from "./AppsScreen.jsx";
import WelcomeScreen from "./WelcomeScreen.jsx";

function AnimationWindow({ children, size, perspectiveStyle }) {
  return (
    <div
      style={{
        ...perspectiveStyle,
      }}
      className={`bg-blue- relative ml-20 flex w-[1000px] justify-center rounded-xl `}
    >
      <div
        style={{
          // offsetX, offsetY, blur-radius, colour
          borderBottomRightRadius: "8px",
          boxShadow: "10px 40px 40px -20px #888888",
        }}
      >
        <div
          style={{ clipPath: "inset(0 0 0 0 round 0% 0% 0.5rem 0%)" }}
          className={`bg-red- flex content-center items-center justify-center rounded-lg duration-[5000ms] ease-in-out ${
            size ? "h-[580px] w-[300px]" : "h-[620px] w-[1000px]"
          }`}
        >
          <div
            className={`absolute bottom-0 right-0 rounded-br-lg bg-yellow-400 px-8 py-6`}
          >
            <p className="text-2xl font-bold text-black">scroll</p>
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
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimationWindow;
