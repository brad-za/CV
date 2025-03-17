import React, { useRef, useState } from "react";
import useMousePosition from "../../Hooks/useMousePosition.tsx";
import useWindowSize from "../../Hooks/useWindowSize.tsx";
import useMouseTrackingLayout from "../../Hooks/useMouseTrackingLayout.tsx";
import TextAnimation from "../Hero/TextAnimation.tsx";
import GalleryElements from "./GalleryElements.tsx";
import Nav from "../Navbar.tsx";

interface PanAmount {
  panX: number;
  panY: number;
}

const MouseTracking: React.FC = () => {
  const windowRef = useRef<HTMLDivElement>(null);
  const [mouseLabel, setMouseLabel] = useState<string | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  const mousePosition = useMousePosition();
  const windowSize = useWindowSize();
  const { panAmount, textPanAmount, gallerySize } = useMouseTrackingLayout();

  const mouseOverElementHandler = (element: string | null): void => {
    setMouseLabel(() => element);
  };

  return (
    <div className="relative">
      {/* Fixed Navbar for mobile */}
      <div className="lg:hidden">
        <Nav className="fixed top-0 left-0 right-0 z-[9999] bg-chipDarkBlue bg-opacity-80 backdrop-blur-md" />
      </div>

      {/* Add padding to the top to account for the fixed navbar on mobile */}
      <div className="pt-[135px] lg:pt-0">
        {/* Mouse Ball */}
        <div className="pointer-events-none z-30 cursor-none">
          <div
            style={{
              mixBlendMode: "difference",
              transform: `translate(${
                // Constrain mouse ball within window boundaries
                Math.min(Math.max(mousePosition.x, 80), windowSize.width - 80)
              }px, ${Math.min(
                Math.max(mousePosition.y, 80),
                windowSize.height - 80
              )}px)`,
            }}
            className="fixed -left-20 -top-20 z-40 grid h-40 w-40 place-items-center rounded-full bg-white"
          >
            <p className="mt-16 text-3xl font-black text-black">{mouseLabel}</p>
          </div>
        </div>
        <div ref={windowRef} className="bg-chipDarkBlue md:overflow-hidden">
          <div
            className=" h- relative w-[100vw] md:h-[100vh] md:overflow-hidden"
            // className="-mt-[40px] h-[100vh] w-[100vw] overflow-hidden"
          >
            <div
              style={{
                transform: `translate(${
                  textPanAmount.panX * 0.1 * -1
                }px, ${textPanAmount.panY * 0.1 * -1}px)`,
              }}
              className="absolute hidden h-full w-full items-center justify-center ease-in-out md:flex"
            >
              <div className="">
                {/*  */}
                <TextAnimation />
              </div>
            </div>
            <div
              ref={galleryRef}
              style={{
                transform: `translate(${panAmount.panX}px, ${panAmount.panY}px)`,
              }}
              className="relative w-full overflow-hidden  ease-linear lg:h-[140vh]  lg:w-[140vw]"
              // className="ease relative h-[100vh] w-[100vw] transition duration-75"
            >
              <GalleryElements
                panAmount={panAmount}
                mouseOverElementHandler={mouseOverElementHandler}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MouseTracking;
