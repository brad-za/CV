import React from "react";
// import Typical from "react-typical";
import { TypeAnimation } from "react-type-animation";

function TextAnimation(textSize) {
	return (
		<div className=" m-auto flex content-center items-center justify-center font-bold text-chipWhite">
			<div className={`ml-6 flex w-[800px] space-x-3 text-8xl `}>
				<h1>I like to </h1>
				{/* Text to Animate */}
				<h1 className="bg-yellow-400 px-1 pb-5 text-black">
					<TypeAnimation
						sequence={[
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
						cursor={false}
						repeat={Infinity}
					/>
				</h1>
			</div>
		</div>
	);
}

export default TextAnimation;
