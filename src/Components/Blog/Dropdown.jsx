import React from "react";
import { NavLink } from "react-router-dom";

const Dropdown = ({ language }) => {
  return (
    <span className="group-one relative z-10 mt-2 ml-4 mr-20 cursor-pointer text-xl font-semibold text-white md:float-right">
      <NavLink to={`${language.slug}`}>{language.name}</NavLink>
      <div className="absolute -right-10">
        <div
          className={`container relative hidden flex-shrink flex-col divide-y divide-black rounded-xl border-solid bg-green-200 p-5 group-one-hover:flex`}
        >
          {language.categories.map((category) => (
            <div
              key={category.slug}
              className="group-two whitespace-nowrap font-semibold text-black "
            >
              <NavLink to={`${language.slug}/${category.slug}`}>
                <h1 className="">
                  {category.posts && (
                    <div className="mr-1 inline-block group-two-hover:rotate-90">
                      &rsaquo;
                    </div>
                  )}
                  {category.name}
                </h1>
              </NavLink>
              <div className="my-2 cursor-pointer  ">
                {category.posts && (
                  <div className="container hidden flex-wrap  bg-blue-200 ease-in-out group-two-hover:flex group-two-hover:delay-1000 ">
                    {category.posts.map((post, index) => (
                      <NavLink
                        key={index}
                        to={`${language.slug}/${category.slug}/${post.slug}`}
                      >
                        <span className="ml-3">&#8226; {post.title}</span>
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </span>
  );
};

export default Dropdown;
