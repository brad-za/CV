import React, { ReactNode } from "react";
import BabyNavbar from "./BabyNavbar.tsx";

interface AnimationWindowProps {
  children: ReactNode;
  windowSize: string;
  perspectiveStyle: React.CSSProperties;
  moveScreenVert: string;
}

const AnimationWindow: React.FC<AnimationWindowProps> = ({
  children,
  windowSize,
  perspectiveStyle,
  moveScreenVert,
}) => {
  return (
    <div
      style={{
        ...perspectiveStyle,
      }}
      className={`relative ml-20 flex w-[1000px] justify-center rounded-xl`}
    >
      <div
        style={{
          borderBottomRightRadius: "8px",
          borderBottomLeftRadius: "8px",
          boxShadow: "10px 40px 40px -20px #888888",
        }}
      >
        <div
          style={{ clipPath: "inset(0 0 0 0 round 0% 0% 0.5rem 0%)" }}
          className={`flex content-center items-center justify-center rounded-xl duration-[2000ms] ease-in-out ${windowSize}`}
        >
          <div
            className={`absolute bottom-0 right-0 rounded-br-lg bg-yellow-400 px-8 py-6`}
          >
            <p className="text-2xl font-bold text-black">scroll</p>
          </div>
          <div
            className={`rounded-xl border-2 border-black text-center transition-multiple duration-[2000ms] ${windowSize}`}
          >
            <div
              style={{ animationFillMode: "forwards" }}
              className={`h-full rounded-xl ${moveScreenVert}`}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimationWindow;
