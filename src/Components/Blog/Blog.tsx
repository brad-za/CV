import React, { useState } from "react";
import Header from "./Header";
import Widgets from "./Widgets";
import BlogNavigation from "./BlogNavigation";
import { TableOfContentItem } from "../../types/blog";

const Blog: React.FC = () => {
  const [tableOfContents, setTableOfContents] = useState<TableOfContentItem[]>(
    []
  );

  return (
    <>
      <Header />
      <div className="flex justify-center w-full px-2 md:px-4">
        <div className="relative flex flex-col gap-4 lg:flex-row w-full lg:max-w-[1200px]">
          {/* <div className="grid grid-cols-1  text-center lg:grid-cols-12"> */}
          <div className="w-full">
            <BlogNavigation setTableOfContents={setTableOfContents} />
          </div>
          <div className="w-full lg:w-auto">
            <Widgets tableOfContents={tableOfContents} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
