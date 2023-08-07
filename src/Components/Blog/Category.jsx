import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCategoryPosts } from "../../services/services";
import PostCard from "./PostCard";
import Widgets from "./Widgets";

const Category = () => {
	let { category } = useParams();

	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const _category = getCategoryPosts(category).then(data =>
			setPosts(data.map(post => post.node)),
		);
		return () => _category;
	}, [category]);

	return (
		<div className=" text-chipWhite">
			<div className=" mb-16 flex flex-col items-end px-10 ">
				{posts.map(post => (
					<PostCard post={post} key={post.title} />
				))}
			</div>
		</div>
	);
};

export default Category;
