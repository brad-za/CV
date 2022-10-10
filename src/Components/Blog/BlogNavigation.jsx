import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Article from "./Article.jsx";
// import { createBrowserRouter } from "react-router-dom";
import Blog from "./Blog.jsx";
import Category from "./Category.jsx";
import Language from "./Language.jsx";
import Widgets from "./Widgets.jsx";

const BlogLayout = () => {
  return (
    <Routes>
      <Route path="/">
        <Route path="" element={<Blog />} />
        <Route path="/:language" element={<Language />} />
        <Route path="/:language/:category" element={<Category />} />
        <Route path="/:language/:category/:post" element={<Article />} />
      </Route>
    </Routes>
  );
};
export default BlogLayout;
