import React from "react";
import me from "../../assets/links/me.jpg";
// https://github.com/tailwindlabs/tailwindcss-container-queries
function WelcomeScreen({}) {
	return (
		<div
			className={`w- justify- items- bg-slate-  flex h-full flex-col rounded-lg  ${""} 
    `}
		>
			<div
				className={`text- sm:bg-emerald- rounded-xl p-5 font-bold text-chipWhite duration-[2000ms] ease-in-out  ${""}`}
			>
				<p className=" text-center">Welcome to my interactive CV</p>
				<p className=" text-center">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
				</p>
				<p className=" text-center">
					Suscipit, laudantium cupiditate facilis accusantium nisi
					minus amet fuga officiis{" "}
				</p>
			</div>
			<div
				className={`bg-green- flex flex-1 flex-wrap items-center justify-center rounded-xl text-chipWhite duration-[2000ms] ease-in-out ${""}`}
			>
				<img
					src={me}
					className={`w-1/3 min-w-[200px] rounded-full shadow-lg duration-[2000ms] ease-in-out `}
				/>

				<div className="">
					<p
						className={`${"text-center text-[1.4vw] font-bold text-chipWhite"}`}
					>
						My name is Brad
					</p>
					<p
						className={`${"ml-2 mt-2 text-center text-[1.1vw]  text-chipWhite"}`}
					>
						I like to write code and solve problems
					</p>
				</div>
			</div>
		</div>
	);
}

export default WelcomeScreen;
