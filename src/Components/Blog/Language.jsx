import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getLanguagePosts } from "../../services/services";
import PostCard from "./PostCard";
import Widgets from "./Widgets";

const Language = () => {
	let { language } = useParams();

	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const _language = getLanguagePosts(language).then(data =>
			setPosts(data.map(post => post.node)),
		);
		return () => _language;
	}, [language]);

	return (
		<div className=" text-chipWhite">
			<div className=" mb-16 flex flex-col items-end  px-10 ">
				{posts.map(post => (
					<PostCard post={post} key={post.title} />
				))}
			</div>
		</div>
	);
};

export default Language;
