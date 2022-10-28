import React, { useState } from "react";

function StarRating({ stars, key }) {
	return (
		<div className="p-2 text-xl duration-300 ease-in-out group-hover:text-2xl">
			{[...Array(5)].map((star, index) => {
				return (
					<span
						key={index}
						className={`bg-  ${
							index < stars
								? " text-yellow-400 group-hover:text-yellow-300"
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
