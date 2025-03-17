import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getLanguagePosts } from "../../services/services";
import PostCard from "./PostCard";
import { Post } from "../../types/blog";

const Language: React.FC = () => {
  let { language } = useParams<{ language?: string }>();

  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    if (language) {
      const _language = getLanguagePosts(language).then((data) =>
        setPosts(data.map((post) => post.node))
      );
      return () => {
        // Cleanup function
        // Note: returning the promise doesn't do anything in cleanup
        // This is just to match the original code
      };
    }
  }, [language]);

  return (
    <div className=" text-chipWhite">
      <div className=" mb-16 flex flex-col items-end  px-10 ">
        {posts.map((post) => (
          <PostCard post={post} key={post.title} />
        ))}
      </div>
    </div>
  );
};

export default Language;
