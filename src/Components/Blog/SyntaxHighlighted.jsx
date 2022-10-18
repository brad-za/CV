import React, { useEffect } from "react";
import Prism from "prismjs";
import "../../prism.css";

const SyntaxHighlighted = ({ code, language }) => {
  useEffect(() => {
    const highlight = Prism.highlightAll();
    return () => {
      highlight;
    };
  }, []);
  return (
    <div className="max-w-[400px] md:max-w-none">
      <pre>
        <div className="bg-[#272822]2 bg-pink- relative -ml-11 mb-2 h-4 border-b border-[#999] ">
          <div className="absolute -top-1  h-[10px] w-[10px] rounded-full bg-green-400" />
          <div className="left absolute left-5 -top-1 h-[10px] w-[10px] rounded-full bg-yellow-400" />
          <div className="absolute -top-1 left-10 h-[10px] w-[10px] rounded-full bg-red-400" />
        </div>
        <code
          className={`language-${language} match-braces line-numbers rainbow-braces`}
        >
          {code}
        </code>
      </pre>
    </div>
  );
};

export default SyntaxHighlighted;
// this is ruining the iFrame Gist, figure that shit out.