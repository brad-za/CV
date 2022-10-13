import React, { useState } from "react";
import Header from "./Header";
import Widgets from "./Widgets";
import BlogNavigation from "../Blog/BlogNavigation";

const Blog = () => {
  const [tableOfContents, setTableOfContents] = useState([]);

  return (
    <>
      <Header />
      {/* <div className="relative flex content-center justify-center gap-6 px-8"> */}
      <div className="grid grid-cols-1  text-center lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          <BlogNavigation setTableOfContents={setTableOfContents} />
        </div>
        <div className="col-span-1 lg:col-span-4">
          <Widgets tableOfContents={tableOfContents} />
        </div>
      </div>
    </>
  );
};

export default Blog;
