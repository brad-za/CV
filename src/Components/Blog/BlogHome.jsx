import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { getPosts } from "../../services/services";
import Widgets from "./Widgets";

const Blog = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const _posts = getPosts().then(data =>
			setPosts(data.map(post => post.node)),
		);

		return () => _posts;
	}, []);

	return (
		<div className=" mb-16  px-10  ">
			<div className=" flex flex-col items-end  ">
				{posts.map(post => (
					<PostCard post={post} key={post.title} />
				))}
			</div>
		</div>
	);
};

export default Blog;
