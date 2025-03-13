import React from "react";
import Seperator from "./Seperator.tsx";
import Skills from "./Skills.tsx";
import StarRating from "./StarRating.tsx";
import Tools from "./Tools.tsx";

const Abilities: React.FC = () => {
  return (
    <div className=" bg-gray- flex flex-col items-center">
      <h2 className="text-center text-7xl">Abilities</h2>
      <Skills col={false} />
      <Seperator />
      <Tools col={false} />
    </div>
  );
};

export default Abilities;
