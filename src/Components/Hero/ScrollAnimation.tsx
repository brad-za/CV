import React from "react";

const ScrollAnimation: React.FC = () => {
  const handleScrollClick = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex justify-center items-center p-5 w-full absolute bottom-10">
      {/* Mouse outline */}
      <div
        onClick={handleScrollClick}
        className="relative h-16 w-10 border-4 border-chipYellow rounded-[20px] bg-chipDarkBlue/20 overflow-hidden cursor-pointer transition-transform hover:scale-110"
      >
        {/* Scrolling circle */}
        <div className="h-1 w-1 top-4 left-1/2 -ml-0.5 absolute rounded-full bg-white animate-scrollWheel"></div>{" "}
      </div>
    </div>
  );
};

export default ScrollAnimation;
