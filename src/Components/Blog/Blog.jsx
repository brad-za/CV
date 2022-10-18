import React, { useState } from "react";
import Header from "./Header";
import Widgets from "./Widgets";
import BlogNavigation from "../Blog/BlogNavigation";

const Blog = () => {
  const [tableOfContents, setTableOfContents] = useState([]);

  return (
    <>
      <Header />
      <div className=" relative flex flex-col content-center justify-center gap-4 md:flex-row">
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
