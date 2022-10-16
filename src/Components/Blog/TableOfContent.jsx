import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const TableOfContent = ({ tableOfContents }) => {
  const location = useLocation();
  const loc = location.pathname.split("/");

  let inActiveClassName =
    "inline-block h-full cursor-pointer border-b-2 border-transparent py-3 text-[1.2em] font-normal tracking-wider text-chipWhite hover:border-white md:py-5";
  let activeClassName =
    "inline-block h-full cursor-pointer border-b-2  py-3 text-[1.2em] font-normal tracking-wider text-chipWhite border-white md:py-5";

  return (
    <>
      {tableOfContents.length && loc.length == 5 ? (
        <div className=" mb-8 rounded-lg bg-[#ffffff14] p-4 text-left text-chipWhite shadow-lg ">
          <h3 className="mb-4 border-b pb-4 text-xl font-semibold">
            Table of content
          </h3>
          <div className="ml-2 flex flex-col ">
            {tableOfContents.map((heading, i) => {
              const customIndent = `ml-${heading.indent * 4}`;
              return (
                <div
                  key={i}
                  style={{ marginLeft: heading.indent * 17.5 }}
                  className={` my-1 rounded-lg p-2 duration-500 ease-in hover:-translate-y-1 hover:scale-105 hover:bg-[#9b99995b] hover:underline`}
                >
                  <NavLink
                    className={({ isActive }) => {
                      (isActive ? activeClassName : inActiveClassName) + ``;
                    }}
                    onClick={() => {
                      const anchorId = document.getElementById(heading.id);
                      anchorId.scrollIntoView();
                    }}
                    to={`#${heading.id}`}
                  >
                    {heading.text}
                  </NavLink>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <> </>
      )}
    </>
  );
};

export default TableOfContent;
