import React from "react";
import Seperator from "./Seperator";
import Skills from "./Skills";
import StarRating from "./StarRating";
import Tools from "./Tools";

function Abilities() {
  return (
    <div className=" bg-gray- flex flex-col items-center">
      <h2 className="text-center text-7xl">Abilities</h2>
      <Skills />
      <Seperator />
      <Tools />
    </div>
  );
}

export default Abilities;
