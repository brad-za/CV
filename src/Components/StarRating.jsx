import React, { useState } from "react";

function StarRating({ stars, key }) {
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
}

export default StarRating;
