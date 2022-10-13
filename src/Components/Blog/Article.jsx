import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostDetails } from "../../services/services";
import Author from "./Author";
import PostCard from "./PostCard";
import PostDetail from "./PostDetail";
import Widgets from "./Widgets";

const Article = ({ setTableOfContents }) => {
  const [posts, setPosts] = useState([]);
  let { language, category, post } = useParams();
  //   console.log(language, category, post);

  useEffect(() => {
    const _post = getPostDetails(post).then((data) =>
      setPosts(data.map((post) => post))
    );
    return () => _post;
  }, [post]);

  return (
    <div className="mb-8">
      <PostDetail posts={posts} setTableOfContents={setTableOfContents} />
      <Author />
    </div>
  );
};

export default Article;
{
  /* <div className="mb-8 grid grid-cols-1  lg:grid-cols-12">
  <div className="col-span-1 mb-8 flex flex-col items-end  px-10 lg:col-span-8 ">
    {posts.map((post) => (
      <PostCard post={post} key={post.title} />
    ))}
  </div>
  <div className="col-span-1 lg:col-span-4">
    <Widgets />
  </div>
</div>; */
}
