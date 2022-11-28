import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostDetails } from "../../services/services";
import Author from "./Author";
import PostCard from "./PostCard";
import PostDetail from "./PostDetail";
import Widgets from "./Widgets";

const Article = ({ setTableOfContents }) => {
	const [posts, setPosts] = useState([]);
	let { post } = useParams();

	useEffect(() => {
		const _post = getPostDetails(post).then(data =>
			setPosts(data.map(post => post))
		);
		return () => _post;
	}, [post]);

	return (
		<div className="mb-8 overflow-x-hidden">
			<PostDetail posts={posts} setTableOfContents={setTableOfContents} />
			<Author />
		</div>
	);
};

export default Article;
