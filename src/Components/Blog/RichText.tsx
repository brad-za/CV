import React, { useLayoutEffect } from "react";
import { Link, useParams } from "react-router-dom";
import IframeWrapper from "./IframeWrapper";
import SyntaxHighlighted from "./SyntaxHighlighted";
import {
  RichTextContent,
  TableOfContentItem,
  RichTextChild,
} from "../../types/blog";

interface RichTextProps {
  contents: RichTextContent[];
  setTableOfContents: (contents: TableOfContentItem[]) => void;
}

const RichText: React.FC<RichTextProps> = ({
  contents,
  setTableOfContents,
}) => {
  // might need to be statefull
  const tableOfContents: TableOfContentItem[] = [];

  const { language } = useParams<{ language: string }>();

  useLayoutEffect(() => setTableOfContents(tableOfContents), []);

  const getContentFragment = (
    index: number,
    text: string | React.ReactNode | React.ReactNode[],
    obj?: RichTextChild,
    type?: string
  ): React.ReactNode => {
    let modifiedText = text;

    if (obj) {
      // todo - fix this causing bad linebreaks
      if (obj.href) {
        modifiedText = (
          <div className="inline-block ">
            <div className="transition  duration-200  ease-in hover:-translate-y-1 hover:scale-[105%] ">
              <a
                className="text-yellow-400 underline underline-offset-2 "
                href={obj.href}
                target="_blank"
                title={obj.title}
              >
                {obj.children && obj.children[0].text}
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
        return (
          <table key={index} className="mb-8 bg-white text-black">
            {obj?.children?.map((tableData, i) => {
              if (tableData.type === "table_head") {
                return (
                  <thead key={i} className="bg-violet-400 ">
                    <tr>
                      {tableData.children &&
                        tableData.children[0].children?.map((head, i) => (
                          <td key={i}>
                            {head.children &&
                              head.children[0].children &&
                              head.children[0].children[0].text}
                          </td>
                        ))}
                    </tr>
                  </thead>
                );
              }
              if (tableData.type === "table_body") {
                return (
                  <tbody key={i}>
                    {tableData.children?.map((row, i) => (
                      <tr key={i}>
                        {row.children?.map((body, j) => (
                          <td key={j}>
                            {body.children &&
                              body.children[0].children &&
                              body.children[0].children[0].text}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                );
              }
              return null;
            })}
          </table>
        );
      case "block-quote":
        return (
          <div key={index} className="flex">
            <blockquote className="my-4 flex border-l-4 border-yellow-400 bg-[#ffffff14] pl-4 text-xl">
              {Array.isArray(modifiedText) &&
                modifiedText.map((item, i) => (
                  <React.Fragment key={i}>{item}</React.Fragment>
                ))}
            </blockquote>
          </div>
        );
      case "class":
        if (obj?.className) {
          switch (obj.className) {
            // gist case removed - react-gist dependency no longer supported
            default:
              if (obj.children && obj.children[0].type) {
                switch (obj.children[0].type) {
                  default:
                    return null;
                }
              }
              return null;
          }
        }
        return null;
      case "code-block":
        return (
          <div
            key={index}
            className="flex justify-center md:justify-start"
            id="code-block"
          >
            <blockquote className="my-4 mb-12 rounded-lg bg-[#272822] outline outline-1 outline-yellow-400">
              {Array.isArray(modifiedText) &&
                modifiedText.map((item, i) => {
                  return (
                    <SyntaxHighlighted
                      code={item as string}
                      language={language || "javascript"}
                      key={i}
                    />
                  );
                })}
            </blockquote>
          </div>
        );
      case "heading-one":
        return (
          <React.Fragment key={index}>
            {Array.isArray(modifiedText) &&
              modifiedText.map((item, i) => {
                const itemText = typeof item === "string" ? item : "";
                tableOfContents.push({
                  text: itemText,
                  id: itemText,
                  indent: 0,
                });
                return (
                  <h1
                    className="mb-4 text-3xl font-semibold"
                    key={i}
                    id={itemText}
                  >
                    {item}
                  </h1>
                );
              })}
          </React.Fragment>
        );

      case "heading-two":
        return (
          <React.Fragment key={index}>
            {Array.isArray(modifiedText) &&
              modifiedText.map((item, i) => {
                const itemText = typeof item === "string" ? item : "";
                tableOfContents.push({
                  text: itemText,
                  id: itemText,
                  indent: 1,
                });
                return (
                  <h2
                    className="mb-4 ml-2 text-2xl font-semibold"
                    key={i}
                    id={itemText}
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
            {Array.isArray(modifiedText) &&
              modifiedText.map((item, i) => {
                const itemText = typeof item === "string" ? item : "";
                tableOfContents.push({
                  text: itemText,
                  id: itemText,
                  indent: 2,
                });
                return (
                  <h3
                    className="mb-4 ml-3 text-xl font-semibold"
                    key={i}
                    id={itemText}
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
            {Array.isArray(modifiedText) &&
              modifiedText.map((item, i) => {
                const itemText = typeof item === "string" ? item : "";
                tableOfContents.push({
                  text: itemText,
                  id: itemText,
                  indent: 3,
                });
                return (
                  <h4
                    className="mb-4 ml-4 text-lg font-semibold"
                    key={i}
                    id={itemText}
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
            {Array.isArray(modifiedText) &&
              modifiedText.map((item, i) => (
                <React.Fragment key={i}>{item}</React.Fragment>
              ))}
          </p>
        );

      case "bulleted-list":
        return (
          <ul key={index} className="mb-8 ml-8 list-disc space-y-2">
            {obj?.children?.map((listItem, i) => {
              const listItemContent = listItem.children?.map((itemChild, j) => {
                // Handle list-item-child or direct children
                if (itemChild.type === "list-item-child") {
                  return itemChild.children?.map((child, k) =>
                    getContentFragment(k, child.text || "", child)
                  );
                } else {
                  return getContentFragment(j, itemChild.text || "", itemChild);
                }
              });
              return (
                <li key={i} className="ml-4">
                  {listItemContent}
                </li>
              );
            })}
          </ul>
        );

      case "numbered-list":
        return (
          <ol key={index} className="mb-8 ml-8 list-decimal space-y-2">
            {obj?.children?.map((listItem, i) => {
              const listItemContent = listItem.children?.map((itemChild, j) => {
                // Handle list-item-child or direct children
                if (itemChild.type === "list-item-child") {
                  return itemChild.children?.map((child, k) =>
                    getContentFragment(k, child.text || "", child)
                  );
                } else {
                  return getContentFragment(j, itemChild.text || "", itemChild);
                }
              });
              return (
                <li key={i} className="ml-4">
                  {listItemContent}
                </li>
              );
            })}
          </ol>
        );

      case "image":
        return (
          <img
            key={index}
            alt={obj?.title}
            height={obj?.height as number}
            width={obj?.width as number}
            src={obj?.src as string}
          />
        );

      default:
        return modifiedText;
    }
  };

  return (
    <div className=" bg-red- flex flex-col-reverse items-start p-10">
      <div className="bg-green- md:justify- flex  w-full flex-col">
        {contents.map((typeObj, index) => {
          const children = typeObj.children.map((item, itemindex) =>
            getContentFragment(itemindex, item.text || "", item)
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
                  style={{
                    marginLeft: content.indent * 17.5,
                  }}
                  className={` underline-white rounded-lg p-2 duration-500 ease-in hover:-translate-y-1 hover:scale-105 hover:bg-[#9b99995b] hover:underline`}
                >
                  <Link
                    onClick={() => {
                      const anchorId = document.getElementById(content.id);
                      if (anchorId) {
                        anchorId.scrollIntoView({
                          behavior: "smooth",
                          block: "center",
                          inline: "nearest",
                        });
                      }
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
