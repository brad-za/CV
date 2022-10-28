import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import github from "../../assets/links/icons8-github.svg";
import me from "../../assets/links/me.jpg";
import blog from "../../assets/links/blog.svg";
import Skills from "../Skills";
import TextAnimation from "../Hero/TextAnimation";

const GalleryElements = ({ panAmount }) => {
	const [mousePosition, setMousePosition] = useState({});
	const menus = [
		{ name: "Home", href: "/", id: "home", end: true },
		{ name: "Blog", href: "/blog", id: "blog", end: false },
		{ name: "Mouse", href: "/mouse", id: "mouse", end: true },
	];

	let inActiveClassName =
		"inline-block  cursor-pointer border-b-2 border-transparent  text-[3vmin] font-normal tracking-wider text- hover:border-black ";
	let activeClassName =
		"inline-block  cursor-pointer border-b-2  text-[3vmin] font-normal tracking-wider text- border-black ";
	return (
		<React.Fragment>
			{/* [&>*]: is an arbitrary selector that styles all children */}
			<div className="[&>*]:rounded-3xl">
				<div className="group absolute top-[2%] right-[4%]  h-[34%] w-[12%]  bg-[#FFEC45] text-3xl font-extrabold text-black ">
					<div className="flex h-full w-0 items-center justify-center duration-200 ease-in group-hover:w-full">
						<ul className="bg- bg- bg-green- hidden h-full flex-col justify-evenly group-hover:flex">
							{menus.map((menu, index) => (
								<li
									onClick={() => setopen(false)}
									key={index}
									className={`flex text-black duration-300  md:inline-block`}
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
				<div className="group absolute bottom-[23%] right-[28%] flex h-[17%] w-[12%] items-center justify-center bg-[#54EAFF] px-6 font-extrabold text-black">
					{/* github goes here boet */}
					<a
						target="_blank"
						href="https://github.com/putintin420"
						className="bg- flex h-full w-full items-center justify-center rounded-2xl  p-2"
					>
						<img
							className="ease h-full w-full duration-200 group-hover:h-0 group-hover:w-0"
							src={github}
							alt="github logo"
						/>

						<div className=" opacity- bg-green- grid h-full w-0 place-items-center rounded-3xl text-3xl leading-9 duration-150 ease-in group-hover:w-full">
							<svg
								width="90%"
								height="90%"
								viewBox="0 0 100% 100%"
								preserveAspectRatio="xMinYMin meet"
							>
								<foreignObject
									width="100%"
									height="100%"
									xmlns="http://www.w3.org/1999/xhtml"
								>
									<div
										xmlns="http://www.w3.org/1999/xhtml"
										className="bg-green- grid h-full place-items-center "
									>
										<p className="">
											Take a look at my github profile and
											the way I like to code.
										</p>
									</div>
								</foreignObject>
							</svg>
						</div>
					</a>
				</div>
				<div className="group absolute bottom-[13%] right-[43%] flex h-[19%] w-[32%] items-center justify-center bg-[#C2FF42] text-3xl font-extrabold text-black">
					<div className=" bg-green- grid h-full w-full place-items-center rounded-3xl  leading-10 opacity-0 duration-150 ease-in group-hover:opacity-100">
						<svg
							width="90%"
							height="90%"
							viewBox="0 0 100% 100%"
							preserveAspectRatio="xMinYMin meet"
						>
							<foreignObject
								width="100%"
								height="100%"
								xmlns="http://www.w3.org/1999/xhtml"
							>
								<div
									xmlns="http://www.w3.org/1999/xhtml"
									className="grid h-full place-items-center "
								>
									<p className="">
										I enjoy working on a team and learning
										from my peers and leaders. I believe I
										am a fast learner and I am ready to take
										on any challenge.
									</p>
								</div>
							</foreignObject>
						</svg>
					</div>
				</div>
				<div className="group-one absolute bottom-[10%] left-[5%] flex h-[42%] w-[16%] items-center justify-center overflow-hidden bg-[#C059FF] px-10 text-3xl font-extrabold text-black">
					<div className="relative h-full w-full opacity-0 duration-200 ease-in group-one-hover:opacity-100">
						<div className="absolute top-[50%] hidden w-full translate-y-[-50%] delay-150 group-one-hover:block">
							<Skills col />
						</div>
					</div>
				</div>
				<div className="text- group absolute top-[13%] left-[8%] flex h-[22%] w-[22%] items-center justify-center bg-[#FF4179] font-extrabold text-black">
					<div className=" bg-green- leading- rounded- grid h-full w-full  place-items-center opacity-0 duration-150 ease-in group-hover:opacity-100">
						<svg
							width="90%"
							height="90%"
							viewBox="0 0 100% 100%"
							className=" lg:text-3xl"
							preserveAspectRatio="xMinYMin meet"
						>
							<foreignObject
								width="100%"
								height="100%"
								xmlns="http://www.w3.org/1999/xhtml"
							>
								<div
									xmlns="http://www.w3.org/1999/xhtml"
									className="grid h-full place-items-center "
								>
									<p className="">
										I stand for quality and strive to exceed
										expectations. I love to spend time on
										the smaller details and optimizations.
									</p>
								</div>
							</foreignObject>
						</svg>
					</div>
				</div>
				<div className="items- group absolute top-[4%] left-[35%] flex h-[32%] w-[14%] flex-col justify-center bg-[#55FFAD]  text-3xl font-extrabold text-black group-hover:justify-evenly">
					<div className="grid place-items-center">
						<img
							src={me}
							className="mt-8 w-4/6 rounded-full shadow-lg duration-200 ease-in-out group-hover:w-1/2"
						/>
					</div>

					<div className="mb- bg-violet- mt-6 flex h-0 items-center text-[3vmin] duration-200 ease-in group-hover:h-full">
						<div className=" bg-green- grid h-full w-full place-items-center rounded-3xl  opacity-0 duration-150 ease-in group-hover:opacity-100">
							<svg
								width="100%"
								height="100%"
								viewBox="0 0 100% 100%"
								preserveAspectRatio="xMinYMin meet"
							>
								<foreignObject
									width="100%"
									height="100%"
									xmlns="http://www.w3.org/1999/xhtml"
								>
									<div
										xmlns="http://www.w3.org/1999/xhtml"
										className="grid h-full place-items-center "
									>
										<div className="hidden group-hover:block">
											<div className="flex flex-col flex-nowrap ">
												<p className="leading-loose">
													Name : Brad Simon
													<br />
													Age : 26
													<br />
													Location : Cape Town
												</p>
											</div>
										</div>
									</div>
								</foreignObject>
							</svg>
						</div>
					</div>
				</div>
				<div className=" group absolute top-[10%] right-[20%] flex h-[20%] w-[24%] items-center justify-center bg-[#FF4ED8] text-3xl font-extrabold text-black">
					<div className=" bg-green- grid h-full w-full place-items-center rounded-3xl  leading-10 opacity-0 duration-150 ease-in group-hover:opacity-100">
						<svg
							width="90%"
							height="90%"
							viewBox="0 0 100% 100%"
							preserveAspectRatio="xMinYMin meet"
						>
							<foreignObject
								width="100%"
								height="100%"
								xmlns="http://www.w3.org/1999/xhtml"
							>
								<div
									xmlns="http://www.w3.org/1999/xhtml"
									className="grid h-full place-items-center "
								>
									<p className="">
										I am an avid learner. I am an
										intermediate programmer but an expert
										problem solver.
									</p>
								</div>
							</foreignObject>
						</svg>
					</div>
				</div>
				<div className="group absolute top-[42%] left-[26%] flex h-[20%] w-[14%] items-center justify-center bg-[#54ADFF]  text-[2vh] font-extrabold text-black">
					<Link
						to={"/blog"}
						className="bg- flex h-full w-full items-center justify-center rounded-2xl  "
					>
						<img
							src={blog}
							alt="blog icon"
							className="ease h-full w-full duration-200 group-hover:h-0 group-hover:w-0"
						/>

						<div className=" opacity- bg-green- grid h-full w-0 place-items-center rounded-3xl text-3xl leading-10 duration-150 ease-in group-hover:w-full">
							<svg
								width="90%"
								height="90%"
								viewBox="0 0 100% 100%"
								preserveAspectRatio="xMinYMin meet"
							>
								<foreignObject
									width="100%"
									height="100%"
									xmlns="http://www.w3.org/1999/xhtml"
								>
									<div
										xmlns="http://www.w3.org/1999/xhtml"
										className="bg-green- grid h-full place-items-center "
									>
										<p className="">
											Read my blog to stay up to date with
											what I am busy learning and working
											on.
										</p>
									</div>
								</foreignObject>
							</svg>
						</div>
					</Link>
				</div>
			</div>
		</React.Fragment>
		// </MouseTracking>
	);
};

export default GalleryElements;
