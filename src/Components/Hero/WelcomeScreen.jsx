import React from "react";
import me from "../../assets/links/me.jpg";

function WelcomeScreen({ changePoes, size }) {
  return (
    <div
      className={`bg-slate- h-full flex-row rounded-lg  ${
        !size ? " px-24" : " px-10"
      } 
    `}
    >
      <div
        className={`text- bg-purple- rounded-xl font-bold text-white duration-[5000ms] ease-in-out ${
          !size ? " text-7xl leading-[60px]" : " min-w-[200px] text-2xl"
        }`}
      >
        <p className="mt-4">Welcome to my interactive CV</p>
      </div>
      <div
        className={`bg-green- mt-24 flex flex-wrap content-center items-center rounded-xl text-white duration-[5000ms] ease-in-out ${
          !size ? " ml-10 text-2xl font-bold " : " justify-center"
        }`}
      >
        <img
          src={me}
          className={`rounded-full shadow-lg duration-[5000ms] ease-in-out ${
            !size ? "max-w-[200px]" : " max-w-[100px] "
          }`}
        />
        <p className={`${!size ? "ml-10" : " mt-10 min-w-[120px]"}`}>
          My name is Brad
        </p>
      </div>
    </div>
  );
}

export default WelcomeScreen;
