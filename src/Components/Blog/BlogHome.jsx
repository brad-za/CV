import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { getPosts } from "../../services/services";
import Widgets from "./Widgets";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const _posts = getPosts().then((data) =>
      setPosts(data.map((post) => post.node))
    );

    return () => _posts;
  }, []);

  return (
    <div className=" mb-16 flex flex-col items-end  px-10 ">
      {posts.map((post) => (
        <PostCard post={post} key={post.title} />
      ))}
    </div>
  );
};

export default Blog;
