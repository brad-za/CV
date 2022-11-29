import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import github from "../../assets/links/icons8-github.svg";
import me from "../../assets/links/me.jpg";
import blog from "../../assets/links/blog.svg";
import Skills from "../Skills";
import Tools from "../Tools";
import TextAnimation from "../Hero/TextAnimation";

const GalleryElements = ({ mousePosition, windowSize, panAmount }) => {
	const menus = [
		{ name: "Home", href: "/", id: "home", end: true },
		{ name: "Blog", href: "/blog", id: "blog", end: false },
		{ name: "Mouse", href: "/mouse", id: "mouse", end: true },
	];

	let inActiveClassName =
		"inline-block fixed cursor-pointer border-b-2 border-transparent  text-[3vmin] font-normal tracking-wider text- hover:border-black ";
	let activeClassName =
		"inline-block fixed cursor-pointer border-b-2  text-[3vmin] font-normal tracking-wider text- border-black";
	return (
		<React.Fragment>
			{/* Mouse Ball */}
			<div className="pointer-events-none z-30 cursor-none">
				<div
					style={{
						mixBlendMode: "difference",
						transform: `translate(${
							mousePosition.x >= windowSize.width - 80
								? windowSize.width - panAmount.panX - 80
								: mousePosition.x >= 80 &&
								  mousePosition.x - panAmount.panX
							// : console.log("this")
						}px, ${
							mousePosition.y >= windowSize.height - 80
								? windowSize.height - panAmount.panY - 80
								: mousePosition.y >= 80 &&
								  mousePosition.y - panAmount.panY
						}px)`,
					}}
					className={`fixed -left-20 -top-20 z-40 h-40 w-40 rounded-full bg-white duration-[75ms] `}
				/>
			</div>
			{/* [&>*]: is an arbitrary selector that styles all children */}
			<div className="[&>*]:rounded-3xl ">
				{/* NAV */}
				<div className="group">
					<div className="group top-[2%] right-[4%] block overflow-hidden rounded-3xl  bg-[#FFEC45] text-3xl  font-extrabold text-black md:absolute md:h-[34%] md:w-[12%]">
						<div className="items- justify- flex h-full duration-200 ease-in md:w-0 md:group-hover:w-full">
							<ul className="bg-green- flex h-full w-full  md:hidden md:flex-col md:justify-evenly md:group-hover:flex">
								{menus.map((menu, index) => (
									<li
										// onClick={() => setopen(false)}
										key={index}
										className={`grid h-10 w-full place-items-center text-black duration-300 `}
									>
										<NavLink
											to={menu.href}
											className={({ isActive }) => {
												return isActive
													? activeClassName
													: inActiveClassName;
											}}
											end={menu.end}
										>
											<span className="">
												{menu.name}
											</span>
										</NavLink>
									</li>
								))}
							</ul>
							<div className="ease  absolute bottom-2 left-3 flex h-full items-end duration-200 group-hover:translate-y-[10%]">
								<p className="">NAV</p>
							</div>
						</div>
					</div>
				</div>
				{/* SKILLS */}
				<div className="group-one">
					<div className="group-one bottom-[25%] right-[6%] block items-center justify-center overflow-hidden rounded-3xl bg-[#33D056] px-14 py-10 text-3xl font-extrabold text-black md:absolute md:flex md:h-[32%] md:w-[16%]">
						<div className="ease bg-red- left-3 top-2 duration-200 md:absolute md:group-one-hover:translate-y-[-110%]">
							<p className="">SKILLS</p>
						</div>
						<div className="relative h-full w-full text-2xl duration-200 ease-in group-one-hover:opacity-100 md:opacity-0">
							<div className="w-full delay-150 md:absolute md:top-[50%] md:hidden md:translate-y-[-50%] md:group-one-hover:block">
								<Skills col />
							</div>
						</div>
					</div>
				</div>
				{/* FUN */}
				<div className="group-one">
					<div className="group-one top-[35%] right-[24%] block items-center justify-center overflow-hidden rounded-3xl bg-[#df2b2b] px-14 py-10 text-3xl font-extrabold text-black md:absolute md:flex md:h-[20%] md:w-[10%]">
						<div className="ease bg-red- left-3 top-2 duration-200 md:absolute md:group-one-hover:translate-x-[-120%]">
							<p className="">FUN</p>
						</div>
					</div>
				</div>
				{/* GITHUB */}
				<div className="group">
					<div className="group bottom-[23%] right-[28%] flex items-center justify-center overflow-hidden rounded-3xl bg-[#54EAFF] px-6 font-extrabold text-black md:absolute md:h-[17%] md:w-[12%]">
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
							<div className="opacity- bg-green- group grid h-full w-0 place-items-center rounded-3xl text-3xl leading-9 duration-150 ease-in group-hover:w-full">
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
												Take a look at my github profile
												and the way I like to code.
											</p>
										</div>
									</foreignObject>
								</svg>
							</div>
						</a>
					</div>
				</div>
				{/* TEAM */}
				<div className="group">
					<div className="group bottom-[12%] right-[43%] flex items-center justify-center overflow-hidden rounded-3xl bg-[#C2FF42] text-3xl font-extrabold text-black md:absolute md:h-[19%] md:w-[16%]">
						<div className=" bg-green- grid h-full w-full place-items-center rounded-3xl  leading-10 opacity-0 duration-150 ease-in group-hover:opacity-100">
							<svg
								width="90%"
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
										<p className="">
											I enjoy working on a team and
											learning from my peers and leaders.
											I am a fast learner and I am ready
											to take on any challenge.
										</p>
									</div>
								</foreignObject>
							</svg>
						</div>
						<div className="ease bg-red- absolute top-2 right-3  duration-200 group-hover:translate-y-[-110%]">
							<p className="">TEAM</p>
						</div>
					</div>
				</div>
				{/* TOOLS */}
				<div className="group-one">
					<div className="group-one bottom-[10%] left-[3.75%] block items-center justify-center overflow-hidden rounded-3xl bg-[#C059FF] px-14 py-10 text-3xl font-extrabold text-black md:absolute md:flex md:h-[40%] md:w-[18%]">
						<div className="ease bg-red- right-3 top-2 duration-200 md:absolute md:group-one-hover:translate-x-[120%]">
							<p className="">SKILLS</p>
						</div>
						<div className="relative h-full w-full text-2xl duration-200 ease-in group-one-hover:opacity-100 md:opacity-0">
							<div className="w-full delay-150 md:absolute md:top-[50%] md:hidden md:translate-y-[-50%] md:group-one-hover:block">
								<Tools col />
							</div>
						</div>
					</div>
				</div>
				{/* ABOUT 2 */}
				<div className="group">
					<div className="text- group top-[13%] left-[8%] flex items-center justify-center overflow-hidden rounded-3xl bg-[#FF4179] font-extrabold text-black md:absolute md:h-[22%] md:w-[22%]">
						<div className=" bg-green- leading- rounded- grid h-full w-full  place-items-center opacity-0 duration-150 ease-in group-hover:opacity-100">
							<svg
								width="90%"
								height="100%"
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
											I stand for quality and strive to
											exceed expectations. I love to spend
											time on the smaller details and
											optimizations.
										</p>
									</div>
								</foreignObject>
							</svg>
						</div>
						<div className="ease bg-red- absolute bottom-2 right-3  text-3xl duration-200 group-hover:translate-y-[110%]">
							<p className="">QUALITY</p>
						</div>
					</div>
				</div>
				{/* BIO */}
				<div className="group">
					<div className="items- group top-[4%] left-[35%] flex flex-col justify-center rounded-3xl bg-[#55FFAD] text-3xl font-extrabold text-black  group-hover:justify-evenly md:absolute md:h-[32%] md:w-[14%]">
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
				</div>
				{/* ABOUT */}
				<div className="group">
					<div className="group top-[10%] right-[20%] flex items-center justify-center overflow-hidden rounded-3xl bg-[#FF4ED8] text-3xl font-extrabold text-black md:absolute md:h-[20%] md:w-[24%]">
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
											intermediate programmer but an
											expert problem solver.
										</p>
									</div>
								</foreignObject>
							</svg>
						</div>
						<div className="ease absolute bottom-2 left-3 items-end duration-200 group-hover:translate-y-[110%]">
							<p className="">ME</p>
						</div>
					</div>
				</div>
				{/* BLOG */}
				<div className="group">
					<div className="group bottom-[6%] left-[24.5%] flex items-center justify-center rounded-3xl bg-[#54ADFF] text-[2vh] font-extrabold text-black  md:absolute md:h-[20%] md:w-[14%]">
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
												Read my blog to stay up to date
												with what I am busy learning and
												working on.
											</p>
										</div>
									</foreignObject>
								</svg>
							</div>
						</Link>
					</div>
				</div>
				{/* THREE */}
				<div className="group">
					<div className="group bottom-[35%] left-[25%] flex items-center justify-center overflow-hidden rounded-3xl bg-[#ff7519] text-3xl font-extrabold text-black  md:absolute md:h-[24%] md:w-[18%]">
						<div className="ease md:group-hover: bg-red- right-3 bottom-2 duration-200 md:absolute md:group-hover:translate-x-[120%]">
							<p className="">THREE</p>
						</div>
					</div>
				</div>
				{/* CONTACT */}
				<div className="group">
					<div className=" bottom-[8%] right-[17%]  block items-center justify-center overflow-hidden  rounded-3xl bg-[#FF511B] text-3xl font-extrabold text-black md:absolute md:h-[9%] md:w-[20%]">
						<div className=" p-3 duration-200 group-hover:translate-y-[-100%]">
							<p className="">CONTACT</p>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
		// </MouseTracking>
	);
};

export default GalleryElements;
