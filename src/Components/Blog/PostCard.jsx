import React from "react";
import moment from "moment";
import { Link, useParams } from "react-router-dom";

const PostCard = ({ post }) => {
	const { language, category } = useParams();

	return (
		<div className="group relative mb-8 w-full rounded-lg bg-[#ffffff14] pb-12 text-chipWhite shadow-lg  outline-yellow-400 transition duration-500 ease-in hover:-translate-y-1 hover:outline md:max-w-[650px] lg:max-w-[950px] lg:p-8">
			<Link
				className="absolute right-0 top-0 h-full w-full "
				to={
					language
						? category
							? `${post.slug}`
							: `${post.categories[0].slug}/${post.slug}`
						: `${post.language.slug}/${post.categories[0].slug}/${post.slug}`
				}
			/>
			<div className="relative mb-6 overflow-hidden pb-80 shadow-md">
				<img
					src={post.featuredImage.url}
					alt=""
					className="absolute h-80 w-full rounded-t-lg object-cover object-top shadow-lg lg:rounded-lg"
				/>
			</div>

			<h1 className="mb-8 cursor-pointer text-center text-3xl font-semibold transition duration-200 ease-in group-hover:text-yellow-400">
				<Link
					to={
						language
							? category
								? `${post.slug}`
								: `${post.categories[0].slug}/${post.slug}`
							: `${post.language.slug}/${post.categories[0].slug}/${post.slug}`
					}
				>
					{post.title}
				</Link>
			</h1>

			<div className="mb-8 block w-full items-center justify-center text-center lg:flex">
				<div className="mb-4 mr-8 flex w-full items-center  justify-center lg:mb-0 lg:w-auto">
					<img
						alt={post.author.name}
						height="40px"
						width="40px"
						className="rounded-full align-middle shadow-xl"
						src={post.author.photo.url}
					/>
					<p className="ml-2 inline align-middle text-lg font-medium text-chipWhite">
						{post.author.name}
					</p>
				</div>

				<div className="z-10 mb-4 flex w-full cursor-pointer items-center justify-center rounded-lg p-2 transition duration-500 ease-in hover:-translate-y-1 hover:bg-[#9b99995b] lg:mb-0 lg:w-auto">
					<Link
						className=" mb-4 flex w-full cursor-pointer items-center justify-center  lg:mb-0 lg:w-auto"
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
						className=" inline h-6 w-6 text-yellow-400"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
						/>
					</svg>
					<span className="ml-2 align-middle">
						{moment(post.createdAt).format("DD MMM YY")}
					</span>
				</div>
			</div>
			<p className="mb-8 px-4 text-center text-lg font-normal text-chipWhite lg:px-20">
				{post.exerpt}
			</p>
		</div>
	);
};

export default PostCard;
