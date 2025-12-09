import React from "react";
import PostWidget from "./PostWidget";
import CategoriesWidget from "./CategoriesWidget";
import { useParams } from "react-router-dom";
import TableOfContent from "./TableOfContent";
import { TableOfContentItem } from "../../types/blog";

interface WidgetsProps {
  tableOfContents: TableOfContentItem[];
}

const Widgets: React.FC<WidgetsProps> = ({ tableOfContents }) => {
  return (
    <div className="relaive top-8 flex md:justify-start lg:sticky w-full">
      <div className="w-full">
        <TableOfContent tableOfContents={tableOfContents} />
        <PostWidget />
        <CategoriesWidget />
      </div>
    </div>
  );
};

export default Widgets;
