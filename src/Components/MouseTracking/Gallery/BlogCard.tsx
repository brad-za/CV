import React from "react";
import { Link } from "react-router-dom";
import GalleryCard from "./GalleryCard";
import blog from "../../../assets/links/blog.svg";

interface BlogCardProps {
  mouseOverElementHandler: (name: string | null) => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ mouseOverElementHandler }) => {
  return (
    <GalleryCard
      bottom="6%"
      left="24.5%"
      mdHeight="20%"
      mdWidth="14%"
      background="bg-[#54ADFF]"
      mouseOverElementHandler={mouseOverElementHandler}
      name="Blog"
      label="BLOG"
      labelDirection="up"
      image={{
        src: blog,
        alt: "blog icon",
      }}
    >
      <Link
        to="/blog"
        className="flex h-full w-full items-center justify-center"
      >
        <div className="grid h-full w-full place-items-center rounded-3xl text-3xl leading-10 opacity-0 duration-150 ease-in group-hover:opacity-100">
          <p>
            Read my blog to stay up to date with what I am busy learning and
            working on.
          </p>
        </div>
      </Link>
    </GalleryCard>
  );
};

export default BlogCard;
