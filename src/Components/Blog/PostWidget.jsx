import React, { useEffect, useState } from "react";
import moment from "moment";
import { Link, useParams, useResolvedPath } from "react-router-dom";
import { getRecentPosts, getSimilarPosts } from "../../services/services";

const PostWidget = ({ slug, categories }) => {
  const loc = useParams();
  //   console.log(loc);

  let locArr = loc["*"].split("/");

  let categories2 = locArr[1] || "";
  let slug2 = locArr[2];

  const [relatedPosts, setRelatedPosts] = useState([]);
  useEffect(() => {
    if (slug2) {
      getSimilarPosts(categories2, slug2).then((res) => {
        if (!res.length) {
          getRecentPosts().then((res) => setRelatedPosts(res));
        }
        setRelatedPosts(res);
      });
    } else {
      getRecentPosts().then((res) => setRelatedPosts(res));
    }
  }, [slug2]);

  return (
    <div className="mb-8 rounded-lg bg-[#ffffff14] p-4 text-left text-chipWhite shadow-lg ">
      <h3 className="mb-4 border-b pb-4 text-xl font-semibold">
        {slug2 ? "Related posts" : "Recent posts"}
      </h3>
      {relatedPosts.map((post) => {
        // console.log(post.language.icon.url);
        // post.language.slug
        return (
          <Link
            to={`${post.language.slug}/${post.categories[0].slug}/${post.slug}`}
            key={post.title}
          >
            <div className="mb-4 flex w-full items-center rounded-lg p-3 duration-500 ease-in hover:-translate-y-1 hover:scale-105 hover:bg-[#9b99995b]">
              <div className="w-16 flex-none">
                <img
                  className="rounded-md"
                  src={post.featuredImage.url}
                  alt={post.title}
                  height="60px"
                  width="60px"
                />
              </div>
              <div className="ml-4 flex-grow">
                <div className="flex items-center justify-between">
                  {post.title}
                  <img
                    alt={post.language.name}
                    height="20px"
                    width="20px"
                    className="rounded-full  shadow-xl"
                    src={post.language.icon.url}
                  />
                </div>
                <p className=" text-right text-xs text-chipWhite">
                  {moment(post.createdAt).format("DD MMM YY")}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default PostWidget;
