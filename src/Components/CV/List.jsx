import React from "react";

const List = ({ items }) => {
	return (
		<>
			<ul className="bg-orange-80 mt-4 list-disc space-y-2 pl-6">
				{items.map((item, itemIdx) => (
					<li className="bg-teal-" key={itemIdx}>
						{item}
					</li>
				))}
			</ul>
		</>
	);
};

export default List;
