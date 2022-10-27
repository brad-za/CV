import React, { useEffect, useLayoutEffect } from "react";
import { Link, useParams } from "react-router-dom";
import IframeWrapper from "./IframeWrapper";

import SyntaxHighlighted from "./SyntaxHighlighted";

const RichText = ({ contents, setTableOfContents }) => {
  // might need to be statefull
  const tableOfContents = [];

  const { language } = useParams();

  useLayoutEffect(() => {
    setTableOfContents(tableOfContents);

    // return () => {
    //   second
    // };
  }, []);

  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    // console.log(obj);

    if (obj) {
      if (obj.href) {
        modifiedText = (
          <div className=" flex ">
            <div className="transition  duration-200  ease-in hover:-translate-y-1 hover:scale-[110%] ">
              <a
                className="text-yellow-400 underline underline-offset-2 "
                href={obj.href}
                target="_blank"
                title={obj.title}
              >
                {obj.children[0].text}
              </a>
            </div>
          </div>
        );
      }
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.code) {
        modifiedText = (
          <React.Fragment>
            <code
              className="whitespace-nowrap rounded-lg bg-[#ffffff25] p-1" // whitespace-nowrap
              key={index}
            >
              {text}
            </code>
          </React.Fragment>
        );
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    switch (type) {
      case "table":
        // console.log("raw obj", obj);
        return (
          <table key={index} className="mb-8 bg-white text-black">
            {obj.children.map((tableData, i) => {
              if (tableData.type == "table_head") {
                return (
                  <thead key={i} className="bg-violet-400 ">
                    <tr>
                      {tableData.children[0].children.map((head, i) => (
                        //   console.log("head", head.children[0].children[0])
                        <td key={i}>{head.children[0].children[0].text}</td>
                      ))}
                    </tr>
                  </thead>
                );
              }
              if (tableData.type == "table_body") {
                return (
                  <tbody key={i}>
                    {tableData.children.map((row, i) => (
                      <tr key={i}>
                        {row.children.map((body) => (
                          <td>{body.children[0].children[0].text}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                );
              }
            })}
          </table>
        );
      case "block-quote":
        return (
          <div key={index} className="flex">
            <blockquote className="my-4 flex border-l-4 border-yellow-400 bg-[#ffffff14] pl-4 text-xl">
              {modifiedText.map((item, i) => (
                <React.Fragment key={i}>{item}</React.Fragment>
              ))}
            </blockquote>
          </div>
        );
      case "class":
        switch (obj.className) {
          case "gist": {
            // console.log(obj.children[0].children[0].text);
            return (
              <IframeWrapper
                key={index}
                id={obj.children[0].children[0].text}
              />
            );
          }
          default:
            switch (obj.children[0].type) {
            }
        }
      case "code-block":
        return (
          <div
            key={index}
            className="flex justify-center md:justify-start"
            id="code-block"
          >
            <blockquote className="my-4 mb-12 rounded-lg bg-[#272822] outline outline-1 outline-yellow-400">
              {modifiedText.map((item, i) => {
                console.log(language);
                return (
                  <SyntaxHighlighted code={item} language={language} key={i} />
                );
              })}
            </blockquote>
          </div>
        );
      case "heading-one":
        return (
          <React.Fragment key={index}>
            {modifiedText.map((item, i) => {
              tableOfContents.push({
                text: item,
                id: item,
                indent: 0,
              });
              return (
                <h1 className="mb-4 text-3xl font-semibold" key={i} id={item}>
                  {item}
                </h1>
              );
            })}
          </React.Fragment>
        );

      case "heading-two":
        return (
          <React.Fragment key={index}>
            {modifiedText.map((item, i) => {
              tableOfContents.push({
                text: item,
                id: item,
                indent: 1,
              });
              return (
                <h2
                  className="mb-4 ml-2 text-2xl font-semibold"
                  key={i}
                  id={item}
                >
                  {item}
                </h2>
              );
            })}
          </React.Fragment>
        );

      case "heading-three":
        return (
          <React.Fragment key={index}>
            {modifiedText.map((item, i) => {
              tableOfContents.push({
                text: item,
                id: item,
                indent: 2,
              });
              return (
                <h3
                  className="mb-4 ml-3 text-xl font-semibold"
                  key={i}
                  id={item}
                >
                  {item}
                </h3>
              );
            })}
          </React.Fragment>
        );
      case "heading-four":
        return (
          <React.Fragment key={index}>
            {modifiedText.map((item, i) => {
              tableOfContents.push({
                text: item,
                id: item,
                indent: 3,
              });
              return (
                <h4
                  className="mb-4 ml-4 text-lg font-semibold"
                  key={i}
                  id={item}
                >
                  {item}
                </h4>
              );
            })}
          </React.Fragment>
        );

      case "paragraph":
        return (
          <p key={index} className=" bg-gray- mb-8 ml-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );

      case "image":
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      //   case "numbered-list":
      //     console.log(obj);
      //     console.log(obj.children);

      //     return (
      //       <ol type="1" key={index} className="mb-4 pl-4 text-xl">
      //         {obj.children.map((item, i) => {
      //           return item.children.map((listItem, i) => {
      //             return listItem.children.map((listItem2, i) => {
      //               console.log(listItem2, "listItem2");

      //               return <li key={i}>{`${index}) ${listItem2.text}`}</li>;
      //             });
      //           });
      //         })}
      //       </ol>
      //     );
      default:
        return modifiedText;
    }
  };

  return (
    <div className=" bg-red- flex flex-col-reverse flex-wrap items-start">
      <div className="bg-green- flex w-full flex-shrink-0 flex-col md:justify-start">
        {contents.map((typeObj, index) => {
          const children = typeObj.children.map((item, itemindex) =>
            getContentFragment(itemindex, item.text, item)
          );
          return getContentFragment(index, children, typeObj, typeObj.type);
        })}
      </div>

      {tableOfContents.length ? (
        <div className="m-3 mb-10 rounded-xl bg-[#ffffff14] p-5">
          <h1 className="mb-2 text-xl font-bold underline underline-offset-2">
            Table of contents
          </h1>
          <ol>
            {tableOfContents.map((content, i) => {
              return (
                <li
                  key={i}
                  style={{ marginLeft: content.indent * 17.5 }}
                  className={` underline-white rounded-lg p-2 duration-500 ease-in hover:-translate-y-1 hover:scale-105 hover:bg-[#9b99995b] hover:underline`}
                >
                  <Link
                    onClick={() => {
                      const anchorId = document.getElementById(content.id);
                      anchorId.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                        inline: "nearest",
                      });
                    }}
                    to={`#${content.id}`}
                  >
                    {content.text}
                  </Link>
                </li>
              );
            })}
          </ol>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default RichText;
