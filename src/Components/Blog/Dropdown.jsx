import React from "react";
import { NavLink } from "react-router-dom";

const Dropdown = ({ language }) => {
  return (
    <span className="group-one relative z-10 mt-2 ml-4 mr-20 cursor-pointer text-xl font-semibold text-white md:float-right">
      <span className="">{language.name}</span>
      <div className="absolute -right-10">
        <div
          className={`container invisible relative flex flex-shrink flex-col divide-y divide-black rounded-xl border-solid bg-green-200 p-5 group-one-hover:visible`}
        >
          {language.categories.map((category) => (
            <NavLink
              key={category.slug}
              to={`${language.slug}/${category.slug}`}
            >
              <div className="my-2 cursor-pointer whitespace-nowrap font-semibold text-black ">
                {category.posts ? (
                  <div className="group-two">
                    <h1 className="">
                      <div className="mr-1 inline-block group-two-hover:rotate-90">
                        &rsaquo;
                      </div>
                      {category.name}
                    </h1>
                    <div className="container hidden flex-wrap  bg-blue-200 ease-in-out group-two-hover:flex group-two-hover:delay-1000 ">
                      {category.posts.map((post) => (
                        <NavLink
                          key={post.slug}
                          to={`${language.slug}/${category.slug}/${post.slug}`}
                        >
                          <span>{post.title}</span>
                        </NavLink>
                      ))}
                    </div>
                  </div>
                ) : (
                  category.name
                )}
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </span>
  );
};

export default Dropdown;
