import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { getPosts } from "../../services/services";
import { Post } from "../../types/blog";

const BlogHome: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const _posts = getPosts().then((data) =>
      setPosts(data.map((post) => post.node))
    );

    return () => {
      // Cleanup function
      // Note: returning the promise doesn't do anything in cleanup
      // This is just to match the original code
    };
  }, []);

  return (
    <div className=" mb-16  px-10  ">
      <div className=" flex flex-col items-end  ">
        {posts.map((post) => (
          <PostCard post={post} key={post.title} />
        ))}
      </div>
    </div>
  );
};

export default BlogHome;
