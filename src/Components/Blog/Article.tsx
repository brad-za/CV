import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostDetails } from "../../services/services";
import Author from "./Author";
import PostDetail from "./PostDetail";
import { Post, TableOfContentItem } from "../../types/blog";

interface ArticleProps {
  setTableOfContents: (contents: TableOfContentItem[]) => void;
}

const Article: React.FC<ArticleProps> = ({ setTableOfContents }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  let { post } = useParams<{ post?: string }>();

  useEffect(() => {
    if (post) {
      const _post = getPostDetails(post).then((data) =>
        setPosts(data.map((post) => post))
      );
      return () => {
        // Cleanup function
        // Note: returning the promise doesn't do anything in cleanup
        // This is just to match the original code
      };
    }
  }, [post]);

  return (
    <div className="mb-8 overflow-x-hidden">
      <PostDetail posts={posts} setTableOfContents={setTableOfContents} />
      <Author />
    </div>
  );
};

export default Article;
