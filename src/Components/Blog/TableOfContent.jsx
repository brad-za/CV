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
            {tableOfContents.map((heading) => {
              return (
                <div
                  className={`ml-${
                    heading.indent * 5
                  } w-full rounded-lg p-2 hover:bg-[#9b99995b] hover:underline `}
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
