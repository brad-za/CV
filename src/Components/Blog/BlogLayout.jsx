import React from "react";
import Header from "./Header.jsx";

const BlogLayout = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

export default BlogLayout;
