import React from "react";
import { Link, useLocation } from "react-router-dom";

const TableOfContent = ({ tableOfContents }) => {
  const location = useLocation();
  console.log(location);
  const loc = location.pathname.split("/");
  console.log(loc);

  return (
    <>
      {tableOfContents.length && loc.length == 5 ? (
        <div className="mb-8 rounded-lg bg-white p-4 text-left text-black shadow-lg ">
          <h3 className="mb-4 border-b pb-4 text-xl font-semibold">
            Table of content
          </h3>
          <div className="ml-2 flex flex-col ">
            {tableOfContents.map((heading) => {
              return (
                <div className="w-full rounded-lg  p-2  hover:bg-[#9b99995b]">
                  <Link
                    className={`ml-${heading.indent * 5}  `}
                    onClick={() => {
                      const anchorId = document.getElementById(heading.id);
                      anchorId.scrollIntoView();
                    }}
                    to={`#${heading.id}`}
                  >
                    {heading.text}
                  </Link>
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
