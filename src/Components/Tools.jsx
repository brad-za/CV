import React from "react";
import StarRating from "./StarRating";

function Tools() {
  let toolsRight = [
    {
      name: "Windows",
      stars: 4,
    },
    {
      name: "Mac",
      stars: 4,
    },
    {
      name: "Visual Studio Code",
      stars: 4,
    },
    {
      name: "Git",
      stars: 4,
    },
    {
      name: "Github",
      stars: 1,
    },
  ];
  let toolsLeft = [
    {
      name: "Figma",
      stars: 4,
    },
    {
      name: "MS Office",
      stars: 4,
    },

    {
      name: "Excel",
      stars: 4,
    },
    {
      name: "Internet",
      stars: 3,
    },
    {
      name: "Postman",
      stars: 2,
    },
  ];
  return (
    <div className="bg-green- text-center ">
      <h2 className="bg-red-">Tools</h2>
      <div className="bg-red- flex">
        <ul className="bg-pink- px-10">
          {toolsLeft.map((tools) => (
            <li
              key={tools.name}
              className=" bg-blue- group flex h-[40px] w-[300px] items-center justify-between rounded-lg p-2 hover:bg-[#9b99995b]"
            >
              <p>{tools.name}</p>
              <StarRating stars={tools.stars} />
            </li>
          ))}
        </ul>
        <ul className="bg-pink- px-10">
          {toolsRight.map((tools) => (
            <li
              key={tools.name}
              className=" bg-blue- group flex h-[40px] w-[300px] items-center justify-between rounded-lg p-2 hover:bg-[#9b99995b]"
            >
              <p>{tools.name}</p>
              <StarRating stars={tools.stars} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Tools;
