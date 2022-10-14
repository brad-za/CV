import React from "react";
import { NavLink } from "react-router-dom";

const Dropdown = ({ language }) => {
  let inActiveClassName =
    "inline-block h-full cursor-pointer border-b-2 border-transparent py-3 text-[1.2em] font-normal tracking-wider text-chipWhite hover:border-white md:py-5";
  let activeClassName =
    "inline-block h-full cursor-pointer border-b-2 py-3 text-[1.2em] font-normal tracking-wider text-yellow-400  px-4  border-yellow-400 md:py-5";

  return (
    <span className="group-one relative z-10 mt-2 ml-4 mr-20 cursor-pointer text-xl font-semibold text-chipWhite md:float-right">
      <NavLink
        className={({ isActive }) =>
          isActive ? activeClassName : inActiveClassName
        }
        to={`${language.slug}`}
      >
        {language.name}
      </NavLink>
      <div className="absolute -right-10">
        <div
          className={`container relative hidden flex-shrink flex-col  rounded-xl border-solid bg-[#292f31a7] p-5 backdrop-blur-lg group-one-hover:flex`}
        >
          {language.categories.map((category) => (
            <div
              key={category.slug}
              className="group-two whitespace-nowrap font-semibold text-chipWhite "
            >
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeClassName : inActiveClassName
                }
                to={`${language.slug}/${category.slug}`}
              >
                <h1 className="">
                  {category.posts && (
                    <div className="mr-1 inline-block group-two-hover:rotate-90">
                      &rsaquo;
                    </div>
                  )}
                  <span className="text-white"> {category.name}</span>
                </h1>
              </NavLink>
              <div className="my-2 ml-5  cursor-pointer">
                {category.posts && (
                  <div className="container  hidden flex-wrap ease-in-out group-two-hover:flex group-two-hover:delay-1000 ">
                    {category.posts.map((post, index) => (
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? activeClassName : inActiveClassName
                        }
                        key={index}
                        to={`${language.slug}/${category.slug}/${post.slug}`}
                      >
                        <span>
                          &#8226;
                          <span className="text-white"> {post.title}</span>
                        </span>
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
