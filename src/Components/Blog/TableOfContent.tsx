import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { TableOfContentItem } from "../../types/blog";

interface TableOfContentProps {
  tableOfContents: TableOfContentItem[];
}

const TableOfContent: React.FC<TableOfContentProps> = ({ tableOfContents }) => {
  const location = useLocation();
  const loc = location.pathname.split("/");

  let inActiveClassName =
    "inline-block h-full cursor-pointer py-1 text-sm font-normal tracking-wider text-chipWhite hover:border-white md:py-1.5 break-words";

  let activeClassName =
    "inline-block h-full cursor-pointer py-1 text-sm font-normal tracking-wider text-chipWhite md:py-1.5 break-words";

  return (
    <>
      {tableOfContents.length && loc.length == 5 ? (
        <div className="mb-8 max-w-xs rounded-lg bg-[#ffffff14] p-4 text-left text-chipWhite shadow-lg max-h-[80vh] flex flex-col">
          <h3 className="mb-3 border-b pb-3 text-base font-semibold">
            Table of content
          </h3>
          <div className="ml-2 flex flex-col overflow-y-auto pr-2">
            {tableOfContents.map((heading, i) => {
              const customIndent = `ml-${heading.indent * 4}`;
              return (
                <div
                  key={i}
                  style={{
                    marginLeft: heading.indent * 17.5,
                  }}
                  className="my-0.5 rounded-lg p-1.5 duration-500 ease-in hover:-translate-y-1 hover:scale-105 hover:bg-[#9b99995b]"
                >
                  <NavLink
                    className={({ isActive }) => {
                      return (
                        (isActive ? activeClassName : inActiveClassName) + ``
                      );
                    }}
                    onClick={() => {
                      const anchorId = document.getElementById(heading.id);
                      if (anchorId) {
                        anchorId.scrollIntoView({
                          behavior: "smooth",
                          block: "center",
                          inline: "nearest",
                        });
                      }
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
