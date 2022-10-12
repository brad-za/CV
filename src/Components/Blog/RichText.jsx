import React from "react";
import { Link } from "react-router-dom";
import IframeWrapper from "./IframeWrapper";

const RichText = ({ contents }) => {
  // might need to be statefull
  const tableOfContents = [];
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    // console.log(type);

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.code) {
        modifiedText = (
          <React.Fragment>
            <code className=" bg-[#4949496a]" key={index}>
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
      case "block-quote":
        return (
          <blockquote
            key={index}
            className="mb-4 border-l-4 border-yellow-400 pl-4 text-xl"
          >
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </blockquote>
        );
      case "class":
        switch (obj.className) {
          case "gist": {
            return <IframeWrapper id={obj.children[0].children[0].text} />;
          }
          default:
            switch (obj.children[0].type) {
              case "heading-one":
                // console.log(obj.className);
                tableOfContents.push({
                  text: obj.children[0].children[0].text,
                  id: obj.className,
                  indent: 0,
                });
                return (
                  <h1
                    id={obj.className}
                    key={index}
                    className="mb-4 text-2xl font-semibold"
                  >
                    {obj.children[0].children[0].text}
                  </h1>
                );
              case "heading-two":
                tableOfContents.push({
                  text: obj.children[0].children[0].text,
                  id: obj.className,
                  indent: 1,
                });
                return (
                  <h2
                    id={obj.className}
                    key={index}
                    className="mb-4 text-2xl font-semibold"
                  >
                    {obj.children[0].children[0].text}
                  </h2>
                );
              case "heading-three":
                tableOfContents.push({
                  text: obj.children[0].children[0].text,
                  id: obj.className,
                  indent: 2,
                });
                return (
                  <h3
                    id={obj.className}
                    key={index}
                    className="mb-4 text-2xl font-semibold"
                  >
                    {obj.children[0].children[0].text}
                  </h3>
                );
              case "heading-four":
                tableOfContents.push({
                  text: obj.children[0].children[0].text,
                  id: obj.className,
                  indent: 3,
                });
                return (
                  <h4
                    id={obj.className}
                    key={index}
                    className="mb-4 text-2xl font-semibold"
                  >
                    {obj.children[0].children[0].text}
                  </h4>
                );
            }
        }
      case "code-block":
        return (
          <blockquote
            key={index}
            className="mb-4 rounded-lg border bg-gray-300 pl-4  outline outline-offset-4 outline-black"
          >
            {modifiedText.map((item, i) => (
              <code key={i}>{item}</code>
            ))}
          </blockquote>
        );
      case "heading-one":
        return (
          <h1 key={index} className="text-md mb-4 font-semibold">
            {modifiedText.map((item, i) => {
              //   console.log(item);
              return <React.Fragment key={i}>{item}</React.Fragment>;
            })}
          </h1>
        );
      case "heading-two":
        return (
          <h2 key={index} className="text-md mb-4 font-semibold">
            {modifiedText.map((item, i) => {
              //   console.log(item);
              return <React.Fragment key={i}>{item}</React.Fragment>;
            })}
          </h2>
        );
      case "heading-three":
        return (
          <h3 key={index} className="text-md mb-4 font-semibold">
            {modifiedText.map((item, i) => {
              //   console.log(item);
              return <React.Fragment key={i}>{item}</React.Fragment>;
            })}
          </h3>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-md mb-4 font-semibold">
            {modifiedText.map((item, i) => {
              //   console.log(item);
              return <React.Fragment key={i}>{item}</React.Fragment>;
            })}
          </h4>
        );

      case "paragraph":
        return (
          <p key={index} className="mb-8">
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
    <div className="flex flex-col-reverse items-start scroll-smooth">
      <div>
        {contents.map((typeObj, index) => {
          const children = typeObj.children.map((item, itemindex) =>
            getContentFragment(itemindex, item.text, item)
          );
          return getContentFragment(index, children, typeObj, typeObj.type);
        })}
      </div>
      {/* <IframeWrapper id="ce38588377fabc3bda4f3938baa47968" /> */}
      {tableOfContents.length ? (
        <div className="m-3 mb-10 rounded-xl bg-gray-200 p-5">
          <h1 className="text-xl font-bold underline underline-offset-2">
            Table of contents
          </h1>
          <ol>
            {tableOfContents.map((content, i) => {
              return (
                <li key={i} className={`ml-${content.indent * 2}`}>
                  <Link
                    onClick={() => {
                      const anchorId = document.getElementById(content.id);
                      anchorId.scrollIntoView();
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
