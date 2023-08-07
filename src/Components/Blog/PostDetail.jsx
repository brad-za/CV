import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import RichText from "./RichText";

const PostDetails = ({ posts, setTableOfContents }) => {
	return (
		<div className="bg-emerald- md:justify- flex justify-center  text-left ">
			<div className="px- mb-16 ">
				{posts.map(post => (
					<div
						key={post.title}
						className="bg-lime- mb-8 flex flex-col items-center justify-center  rounded-lg bg-[#94939314] p-2 pb-12 shadow-lg md:max-w-[750px] lg:max-w-[950px] lg:p-8"
					>
						<div className=" relative mb-6 shadow-md">
							<img
								src={post.featuredImage.url}
								alt={post.title}
								className="h-full w-[0px] rounded-t-lg object-top md:w-full"
							/>
						</div>
						<div className=" bg-orange- px-4 lg:px-0">
							{/* <div className=" flex w-full items-center"> */}
							{/* author section */}
							<div className="bg-yellow- block w-full items-center justify-center text-center lg:flex">
								<div className="mb-4 mr-8 flex w-full items-center  justify-center lg:mb-0 lg:w-auto">
									<img
										alt={post.author.name}
										height="40px"
										width="40px"
										className="rounded-full align-middle shadow-xl"
										src={post.author.photo.url}
									/>
									<p className="text-chipwhite ml-2 inline align-middle text-lg font-medium">
										{post.author.name}
									</p>
								</div>
								<div className="mb-4 flex w-full cursor-pointer items-center justify-center rounded-lg p-2  duration-500 ease-in hover:-translate-y-1 hover:scale-105 hover:bg-[#9b99995b] lg:mb-0 lg:w-auto">
									<Link
										className="mb-4 flex w-full cursor-pointer items-center justify-center  lg:mb-0 lg:w-auto"
										to={`/blog/${post.language.slug}`}
									>
										<img
											alt={post.language.name}
											height="30px"
											width="30px"
											className="rounded-full align-middle shadow-xl"
											src={post.language.icon.url}
										/>
										<p className="ml-2 inline  text-lg font-medium text-chipWhite">
											{post.language.name}
										</p>
									</Link>
								</div>
								<div className="ml-5 font-medium  text-chipWhite">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className=" mr-1 inline h-8 w-8 text-yellow-400"
										fill="none"
										viewBox="1 1 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
										/>
									</svg>

									{moment(post.createdAt).format("DD MMM YY")}

									{/* </div> */}
								</div>
							</div>
							<h1 className="mb-8 pt-5 text-3xl font-semibold">
								{post.title}
							</h1>
							<RichText
								contents={post.content.raw.children}
								setTableOfContents={setTableOfContents}
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default PostDetails;
