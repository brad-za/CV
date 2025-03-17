import React from "react";
import { Route, Routes } from "react-router-dom";
import Article from "./Article";
import BlogHome from "./BlogHome";
import Category from "./Category";
import Language from "./Language";
import { TableOfContentItem } from "../../types/blog";

interface BlogLayoutProps {
  setTableOfContents: (contents: TableOfContentItem[]) => void;
}

const BlogLayout: React.FC<BlogLayoutProps> = ({ setTableOfContents }) => {
  return (
    <Routes>
      <Route path="/">
        <Route path="" element={<BlogHome />} />
        <Route path="/:language" element={<Language />} />
        <Route path="/:language/:category" element={<Category />} />
        <Route
          path="/:language/:category/:post"
          element={<Article setTableOfContents={setTableOfContents} />}
        />
      </Route>
    </Routes>
  );
};

export default BlogLayout;
