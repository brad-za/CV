import React, { useEffect, useState } from "react";
import moment from "moment";
import { Link, useParams } from "react-router-dom";
import { getRecentPosts, getSimilarPosts2 } from "../../services/services";

const PostWidget = () => {
	const loc = useParams();

	const [relatedPosts, setRelatedPosts] = useState([]);
	const [heading, setHeading] = useState("Recent posts");

	let locArr = loc["*"].split("/");

	let language = locArr[0] || "";
	let categories2 = locArr[1] || "";
	let slug2 = locArr[2];

	useEffect(() => {
		getSimilarPosts2(categories2, slug2, language)
			.then(res => {
				if (!res.length) {
					getRecentPosts().then(res => {
						setRelatedPosts(res);
						setHeading("Recent posts");
					});
				} else {
					setRelatedPosts(res);
					setHeading("Related posts");
				}
			})
			.catch(err => console.log(err));
	}, [slug2]);

	return relatedPosts.length ? (
		<div className="mb-8 rounded-lg bg-[#ffffff14] p-4 text-left text-chipWhite shadow-lg ">
			<h3 className="mb-4 border-b pb-4 text-xl font-semibold">
				{heading}
			</h3>
			{relatedPosts.map(post => {
				return (
					<Link
						to={`${post.language.slug}/${post.categories[0].slug}/${post.slug}`}
						key={post.title}
					>
						<div className="mb-4 flex w-full items-center rounded-lg p-3 duration-500 ease-in hover:-translate-y-1 hover:scale-105 hover:bg-[#9b99995b]">
							<div className="w-16 flex-none">
								<img
									className="rounded-md"
									src={post.featuredImage.url}
									alt={post.title}
									height="60px"
									width="60px"
								/>
							</div>
							<div className="ml-4 flex-grow">
								<div className="flex items-center justify-between">
									{post.title}
									<img
										alt={post.language.name}
										height="20px"
										width="20px"
										className="ml-4 rounded-full shadow-xl"
										src={post.language.icon.url}
									/>
								</div>
								<p className=" text-right text-xs text-chipWhite">
									{moment(post.createdAt).format("DD MMM YY")}
								</p>
							</div>
						</div>
					</Link>
				);
			})}
		</div>
	) : (
		<></>
	);
};

export default PostWidget;
