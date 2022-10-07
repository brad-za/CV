import React from "react";
import BlogLayout from "./BlogLayout";
import Categories from "./Categories";
import PostCard from "./PostCard";
import PostWidget from "./PostWidget";

const posts = [
  { title: "React testing", exerpt: "learn react testing" },
  { title: "React testing2", exerpt: "learn react testing2" },
];

const Blog = () => {
  return (
    <div className="container mx-auto mb-8 px-10">
      <div className="grid grid-cols-1  gap-12 bg-gray-300 text-center lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post) => (
            <PostCard post={post} key={post.title} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative top-8 lg:sticky">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
