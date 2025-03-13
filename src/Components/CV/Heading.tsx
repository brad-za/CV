import React from "react";

interface HeadingProps {
  position: string;
  date: string;
}

const Heading: React.FC<HeadingProps> = ({ position, date }) => {
  return (
    <>
      <div className=" bg-emerald- flex justify-between pb-2">
        <h1 className="bg-green- text-2xl font-semibold">{position}</h1>
        <p className="p-">{date}</p>
      </div>
    </>
  );
};

export default Heading;
