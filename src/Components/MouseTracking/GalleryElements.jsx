import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import github from "../../assets/links/icons8-github.svg";
import me from "../../assets/links/me.jpg";
import blog from "../../assets/links/blog.svg";
import Skills from "../Skills";

const GalleryElements = ({ panAmount }) => {
	const [mousePosition, setMousePosition] = useState({});
	const menus = [
		{ name: "Home", href: "/", id: "home", end: true },
		{ name: "Blog", href: "/blog", id: "blog", end: false },
		{ name: "Mouse", href: "/mouse", id: "mouse", end: true },
	];

	let inActiveClassName =
		"inline-block h-full cursor-pointer border-b-2 border-transparent py-3 text-[1.2em] font-normal tracking-wider text- hover:border-black md:py-5";
	let activeClassName =
		"inline-block h-full cursor-pointer border-b-2  py-3 text-[1.2em] font-normal tracking-wider text- border-black md:py-5";
	return (
		<React.Fragment>
			{/* text animation can be placed here for a paralax effect or in mouseTracking for static position. */}
			{/* <div
				style={{
					transform: `translate(${panAmount.panX * 0.2 * -1}px, ${
						panAmount.panY * 0.2 * -1
					}px)`,
				}}
				className="ease bg-blue- flex h-full w-full items-center justify-center transition duration-75"
			>
				<div className=" bg- ml-64 w-full">
					<TextAnimation textSize={6} />
				</div>
			</div> */}
			{/* [&>*]: is an arbitrary selector that styles all children */}
			<div className="[&>*]:rounded-3xl">
				<div className="group absolute top-[2%] right-[4%]  h-[34%] w-[12%]  bg-[#FFEC45] text-3xl font-extrabold text-black ">
					<div className="flex w-0 items-center justify-center duration-200 ease-in group-hover:w-full">
						<ul className="bg- hidden flex-col group-hover:flex">
							{menus.map((menu, index) => (
								<li
									onClick={() => setopen(false)}
									key={index}
									className={`my-6 h-full text-black duration-300  md:inline-block`}
								>
									<NavLink
										to={menu.href}
										className={({ isActive }) =>
											isActive
												? activeClassName
												: inActiveClassName
										}
										end={menu.end}
									>
										{menu.name}
									</NavLink>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className=" absolute bottom-[8%] right-[4%] flex h-[9%] w-[30%] items-center justify-center bg-[#33D056] text-3xl font-extrabold text-black">
					CONTACT
				</div>
				<div className=" absolute bottom-[25%] right-[4%] flex h-[32%] w-[20%] items-center justify-center bg-[#FF511B] text-3xl font-extrabold text-black">
					REACT
				</div>
				<div className="group absolute bottom-[23%] right-[28%] flex h-[17%] w-[12%] items-center justify-center bg-[#54EAFF] text-3xl font-extrabold text-black">
					<Link
						to={"/blog"}
						className="bg- flex h-full w-full items-center justify-center rounded-2xl  p-2"
					>
						<img
							src={blog}
							alt="blog icon"
							className="ease h-full w-full duration-200 group-hover:h-0 group-hover:w-0"
						/>

						<h1 className="font- hidden group-hover:block ">
							A blog about what I am learning and doing.
						</h1>
					</Link>
				</div>
				<div className="group absolute bottom-[13%] right-[43%] flex h-[19%] w-[32%] items-center justify-center bg-[#C2FF42] text-3xl font-extrabold text-black">
					<div className="justify-center px-10  opacity-0 duration-150 ease-in group-hover:opacity-100">
						<p className="py-1">
							I stand for quality and strive to exceed
							expectations. I love to spend time on the smaller
							details and optimizations.
						</p>
					</div>
				</div>
				<div className="group-one absolute bottom-[10%] left-[5%] flex h-[42%] w-[16%] items-center justify-center bg-[#C059FF] text-3xl font-extrabold text-black">
					<div className="opacity-0 duration-200 ease-in group-one-hover:opacity-100">
						<div className="hidden delay-150 group-one-hover:block">
							<Skills col />
						</div>
					</div>
				</div>
				<div className="group absolute top-[13%] left-[8%] flex h-[22%] w-[22%] items-center justify-center bg-[#FF4179] text-3xl font-extrabold text-black">
					<div className="justify-center px-10  opacity-0 duration-150 ease-in group-hover:opacity-100">
						<p className="py-1">
							I enjoy working on a team and learning from my peers
							and leaders. I believe I am a fast learner and I am
							ready to take on any challenge.
						</p>
					</div>
				</div>
				<div className="group absolute top-[4%] left-[35%] flex h-[32%] w-[14%] flex-col items-center justify-center bg-[#55FFAD] p-4 text-2xl font-extrabold text-black group-hover:justify-evenly">
					<img
						src={me}
						className="mt-8 w-4/6 rounded-full shadow-lg duration-200 ease-in-out group-hover:w-1/2"
					/>

					<div className="mb- mt-6  flex h-0 items-center duration-200 ease-in group-hover:h-full">
						<div className="hidden group-hover:block">
							<div className="flex flex-row">
								<p className="py-1 font-bold">Name :</p>
								<p className="py-1 pl-2">Bradley Simon</p>
							</div>
							<div className="flex flex-row">
								<p className="py-1 font-bold">Age :</p>
								<p className="py-1 pl-2">26</p>
							</div>
							<div className="flex flex-row">
								<p className="py-1 font-bold">Location :</p>
								<p className="py-1 pl-2">Cape Town</p>
							</div>
						</div>
					</div>
				</div>
				<div className=" group absolute top-[10%] right-[20%] flex h-[20%] w-[24%] items-center justify-center bg-[#FF4ED8] text-3xl font-extrabold text-black">
					<div className="justify-center px-10  opacity-0 duration-150 ease-in group-hover:opacity-100">
						<p className="py-1">
							I am an avid learner. I am an intermediate
							programmer but an expert problem solver.
						</p>
					</div>
				</div>
				<div className="group absolute top-[42%] left-[26%] flex h-[20%] w-[14%] items-center justify-center bg-[#54ADFF] text-3xl font-extrabold text-black">
					<a
						href="https://github.com/putintin420"
						className="bg- flex h-full w-full items-center justify-center rounded-2xl  p-2"
					>
						<img
							className="ease h-full w-full duration-200 group-hover:h-0 group-hover:w-0"
							src={github}
							alt="github logo"
						/>
						<h1 className="font- hidden p-2 group-hover:block ">
							Take a look at my github profile and the way I like
							to code.
						</h1>
					</a>
				</div>
			</div>
		</React.Fragment>
		// </MouseTracking>
	);
};

export default GalleryElements;
