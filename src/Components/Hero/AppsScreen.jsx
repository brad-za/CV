import React from "react";
import me from "../../assets/links/me.jpg";

function AppScreen({ changePoes, size }) {
  return (
    <div
      style={{ animationFillMode: "forwards" }}
      className={`bg-blue- flex flex-1 flex-wrap justify-center duration-[5000] ease-in-out ${
        !size ? " animate-moveUp" : " animate-moveDown"
      }`}
    >
      <div className="bg-red- m-4 flex flex-wrap items-center justify-center p-2">
        <div className="ml-1 h-24 w-24 rounded-full bg-[#524d4dc7]" />
        <div className="mx-1 flex flex-col py-2">
          <div className="m-[2px] h-4 w-48 bg-gray-200" />
          <div className="m-[2px] h-4 w-52 bg-gray-200" />
          <div className="m-[2px] h-4 w-32 bg-gray-200" />
        </div>
      </div>
      <div className="bg-red- m-4 flex flex-wrap items-center justify-center p-2">
        <div className="ml-1 h-24 w-24 rounded-full bg-[#524d4dc7]" />
        <div className="mx-1 flex flex-col py-2">
          <div className="m-[2px] h-4 w-48 bg-gray-200" />
          <div className="m-[2px] h-4 w-36 bg-gray-200" />
          <div className="m-[2px] h-4 w-44 bg-gray-200" />
        </div>
      </div>
      <div className="bg-red- m-4 flex flex-wrap items-center justify-center p-2">
        <div className="ml-1 h-24 w-24 rounded-full bg-[#524d4dc7]" />
        <div className="mx-1 flex flex-col py-2">
          <div className="m-[2px] h-4 w-32 bg-gray-200" />
          <div className="m-[2px] h-4 w-52 bg-gray-200" />
          <div className="m-[2px] h-4 w-44 bg-gray-200" />
        </div>
      </div>
      <div className="bg-red- m-4 flex flex-wrap items-center justify-center p-2">
        <div className="ml-1 h-24 w-24 rounded-full bg-[#524d4dc7]" />
        <div className="mx-1 flex flex-col py-2">
          <div className="m-[2px] h-4 w-48 bg-gray-200" />
          <div className="m-[2px] h-4 w-52 bg-gray-200" />
          <div className="m-[2px] h-4 w-32 bg-gray-200" />
        </div>
      </div>
    </div>
  );
}

export default AppScreen;
