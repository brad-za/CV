import React from "react";
import Typical from "react-typical";

function TextAnimation() {
  return (
    <div className="bg-purple- flex w-full content-center items-center justify-center">
      <div className=" bg-green- flex w-[800px] space-x-3 text-8xl ">
        <h1>I like to </h1>
        {/* Text to Animate */}
        <strong className="bg-yellow-400 px-1 pb-5">
          <Typical
            steps={[
              "code",
              3000,
              "tinker",
              3000,
              "learn",
              3000,
              "engage",
              3000,
            ]}
            wrapper="p"
            loop={Infinity}
          />
        </strong>
      </div>
    </div>
  );
}

export default TextAnimation;
