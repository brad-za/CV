import { useState, useLayoutEffect, useEffect } from "react";
import useMousePosition from "./useMousePosition";
import useWindowSize from "./useWindowSize";

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

interface MouseTrackingLayout {
  panAmount: PanAmount;
  textPanAmount: PanAmount;
  gallerySize: GallerySize;
}

const useMouseTrackingLayout = (): MouseTrackingLayout => {
  const mousePosition = useMousePosition();
  const windowSize = useWindowSize();

  const [panAmount, setPanAmount] = useState<PanAmount>({
    panX: (window.innerWidth / 4) * -1,
    panY: (window.innerHeight / 4) * -1,
  });

  const [textPanAmount, setTextPanAmount] = useState<PanAmount>({
    panX: -1600,
    panY: 600,
  });

  const [gallerySize, setGallerySize] = useState<GallerySize>({
    width: window.innerWidth * 1.4,
    height: window.innerHeight * 1.4,
  });

  const [maxGallerySize, setMaxGallerySize] = useState<GallerySize>({
    width: 0,
    height: 0,
  });

  // Initialize dimensions - only focus on fixing the resizing issue
  const initializeDimensions = () => {
    // Calculate gallery size based on current window dimensions
    const baseWidth = window.innerWidth * 1.4;
    const baseHeight = window.innerHeight * 1.4;

    setGallerySize({
      width: baseWidth,
      height: baseHeight,
    });

    setMaxGallerySize({
      width: baseWidth - window.innerWidth,
      height: baseHeight - window.innerHeight,
    });
  };

  // Initial setup
  useLayoutEffect(() => {
    initializeDimensions();
  }, []);

  // Handle window resize - this is the key fix
  useEffect(() => {
    const handleResize = () => {
      initializeDimensions();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Update pan amounts based on mouse position
  useEffect(() => {
    if (windowSize.width > 1024) {
      const decimalX = mousePosition.x / windowSize.width;
      const decimalY = mousePosition.y / windowSize.height;

      // Calculate pan amounts without constraints to match original behavior
      const panX = maxGallerySize.width * decimalX * -1;
      const panY = maxGallerySize.height * decimalY * -1;

      setPanAmount({
        panX,
        panY,
      });

      // Use the original text panning calculation
      setTextPanAmount({
        panX: maxGallerySize.width * decimalX * -1,
        panY: maxGallerySize.height * decimalY * -1,
      });
    } else {
      // For mobile, center the content
      setPanAmount({ panX: 0, panY: 0 });
      setTextPanAmount({ panX: 0, panY: 0 });
    }
  }, [mousePosition, windowSize, maxGallerySize]);

  return {
    panAmount,
    textPanAmount,
    gallerySize,
  };
};

export default useMouseTrackingLayout;
