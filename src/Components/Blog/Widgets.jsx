import React from "react";
import PostWidget from "./PostWidget";
import CategoriesWidget from "./CategoriesWidget";
import { useParams } from "react-router-dom";
import TableOfContent from "./TableOfContent";

const Widgets = ({ tableOfContents }) => {
	return (
		<div className="relaive top-8 flex md:justify-start lg:sticky ">
			<div className="  ">
				<TableOfContent tableOfContents={tableOfContents} />
				<PostWidget />
				<CategoriesWidget />
			</div>
		</div>
	);
};

export default Widgets;
