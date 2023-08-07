import React, { useEffect, useState, useLayoutEffect, useRef } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import Dropdown from "./Dropdown";
import { getCategories } from "../../services/services.js";

const Header = () => {
	const [languages, setLanguages] = useState([]);

	useEffect(() => {
		const categories2 = getCategories().then(data =>
			setLanguages(data.map(category => category.node)),
		);

		return () => categories2;
	}, []);

	return (
		<div className="container mx-auto mb-8 px-10">
			<div className="inline-block w-full border-b border-blue-400 py-8">
				<div className="block md:float-left">
					<NavLink to="/blog">
						<span className="cursor-pointer text-4xl font-bold ">
							All artices
						</span>
					</NavLink>
				</div>
				<div className="hidden  md:contents">
					{languages.map(language => (
						<Dropdown language={language} key={language.name} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Header;
