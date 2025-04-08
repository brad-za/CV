import React from "react";

interface BabyNavbarProps {
  isMobile?: boolean;
}

const BabyNavbar: React.FC<BabyNavbarProps> = ({ isMobile }) => {
  return (
    <div className="flex h-8 w-full items-center justify-between bg-gray-800 px-2">
      <div className="flex items-center">
        <div className="mr-2 h-3 w-3 rounded-full bg-red-500"></div>
        <div className="mr-2 h-3 w-3 rounded-full bg-yellow-500"></div>
        <div className="h-3 w-3 rounded-full bg-green-500"></div>
      </div>
      <div className="h-4 w-32 rounded bg-gray-700"></div>
      <div className="h-4 w-4"></div>
    </div>
  );
};

export default BabyNavbar;
