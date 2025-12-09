import React from "react";

interface StarRatingProps {
  stars: number;
  compact?: boolean;
}

const StarRating: React.FC<StarRatingProps> = ({ stars, compact = false }) => {
  if (compact) {
    return (
      <div className="text-xl duration-300 ease-in-out group-hover:text-2xl flex items-center gap-0.5">
        <span className="text-yellow-500 flex gap-2 group-hover:text-yellow-400">
          <p className="text-black">{stars}</p>&#9733;
        </span>
      </div>
    );
  }

  return (
    <div className=" text-xl duration-300 ease-in-out group-hover:text-2xl">
      {[...Array(5)].map((star, index) => {
        return (
          <span
            key={index}
            className={`bg- content-{&#9733;}  ${
              index < stars
                ? " text-yellow-500 group-hover:text-yellow-400"
                : " text-gray-500"
            }`}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
