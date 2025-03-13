import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import useMousePosition from "../../Hooks/useMousePosition.tsx";
import useWindowSize from "../../Hooks/useWindowSize.tsx";
import TextAnimation from "../Hero/TextAnimation.tsx";
import GalleryElements from "./GalleryElements.tsx";

interface MousePosition {
  x: number;
  y: number;
}

interface PanAmount {
  panX: number;
  panY: number;
}

interface GallerySize {
  width: number;
  height: number;
}

interface DecimalMousePosition {
  decimalX: number;
  decimalY: number;
}

const MouseTracking: React.FC = () => {
  const windowRef = useRef<HTMLDivElement>(null);
  const [mouseLabel, setMouseLabel] = useState<string | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  const mousePosition = useMousePosition() as MousePosition;
  const [panAmount, setPanAmount] = useState<PanAmount>({
    panX: (window.innerWidth / 4) * -1,
    panY: (window.innerHeight / 4) * -1,
  });
  const [textPanAmount, setTextPanAmount] = useState<PanAmount>({
    panX: -1600,
    panY: 600,
  });
  const windowSize = useWindowSize() as { width: number; height: number };
  const [maxGallerySize, setMaxGallerySize] = useState<GallerySize>(
    {} as GallerySize
  );
  const [gallerySize, setGallerySize] = useState<GallerySize>({
    width: window.innerWidth * 1.4,
    height: window.innerHeight * 1.4,
  });

  useLayoutEffect(() => {
    // get the size of the viewing window in pixels
    setGallerySize(() => {
      return {
        width: gallerySize.width - windowSize.width,
        height: gallerySize.height - windowSize.height,
      };
    });

    setMaxGallerySize(() => {
      return {
        width: gallerySize.width - windowSize.width,
        height: gallerySize.height - windowSize.height,
      };
    });

    return () => {};
  }, []);

  const getDecimalMousePosition = (
    x: number,
    y: number
  ): DecimalMousePosition => {
    const decimalX = x / windowSize.width;
    const decimalY = y / windowSize.height;

    return { decimalX, decimalY };
  };

  const getPanAmount = (
    dec: DecimalMousePosition,
    maxSize: GallerySize
  ): PanAmount => {
    const panX = maxSize.width * dec.decimalX * -1;
    const panY = maxSize.height * dec.decimalY * -1;
    return { panX, panY };
  };

  useEffect(() => {
    setTextPanAmount(() => {
      return getPanAmount(
        getDecimalMousePosition(mousePosition.x, mousePosition.y),
        maxGallerySize
      );
    });
    if (windowSize.width > 1024) {
      setPanAmount(() => {
        return getPanAmount(
          getDecimalMousePosition(mousePosition.x, mousePosition.y),
          maxGallerySize
        );
      });
    } else {
      setPanAmount(() => {
        return { panX: 0, panY: 0 };
      });
    }
  }, [mousePosition]);

  const mouseOverElementHandler = (element: string | null): void => {
    setMouseLabel(() => element);
  };

  useEffect(() => {
    const setDimension = (): void => {
      setGallerySize(() => {
        return {
          width: gallerySize.width - windowSize.width,
          height: gallerySize.height - windowSize.height,
        };
      });

      setMaxGallerySize(() => {
        return {
          width: gallerySize.width - windowSize.width,
          height: gallerySize.height - windowSize.height,
        };
      });

      setPanAmount(() => {
        return {
          panX: (window.innerWidth / 4) * -1,
          panY: (window.innerHeight / 4) * -1,
        };
      });
    };

    window.addEventListener("resize", setDimension);
    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, []);

  return (
    <div>
      {/* Mouse Ball */}
      <div className=" pointer-events-none z-30 cursor-none ">
        <div
          style={{
            mixBlendMode: "difference",
            transform: `translate(${
              mousePosition.x >= windowSize.width - 80
                ? windowSize.width - 80
                : mousePosition.x >= 80
                  ? mousePosition.x
                  : 80
            }px, ${
              mousePosition.y >= windowSize.height - 80
                ? windowSize.height - 80
                : mousePosition.y >= 80
                  ? mousePosition.y
                  : 80
            }px)`,
          }}
          className={`fixed -left-20 -top-20 z-40 grid  h-40 w-40 place-items-center rounded-full bg-white`}
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
            className="absolute hidden h-full w-full  items-center justify-center  ease-in-out  md:flex"
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
  );
};

export default MouseTracking;
