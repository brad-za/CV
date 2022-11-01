import React, { useState } from "react";
import Header from "./Header";
import Widgets from "./Widgets";
import BlogNavigation from "../Blog/BlogNavigation";

const Blog = () => {
	const [tableOfContents, setTableOfContents] = useState([]);

	return (
		<>
			<Header />
			<div className=" md:flex- relative flex flex-col justify-center gap-4 lg:flex-row">
				{/* <div className="grid grid-cols-1  text-center lg:grid-cols-12"> */}
				<div className="">
					<BlogNavigation setTableOfContents={setTableOfContents} />
				</div>
				<div className="">
					<Widgets tableOfContents={tableOfContents} />
				</div>
			</div>
		</>
	);
};

export default Blog;
