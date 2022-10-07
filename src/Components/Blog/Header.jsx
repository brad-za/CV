import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";
import { getCategories } from "../../services/services.js";

const languages3 = [
  {
    name: "Javascript",
    slug: "js",
    categories: [
      {
        name: "React",
        slug: "react",
        posts: [
          { title: "Part 1: learning to react", slug: "part1-react" },
          { title: "Part 2: understanding react", slug: "part2-react" },
        ],
      },
    ],
  },
];

const Header = () => {
  const [languages, setLanguages] = useState([]);

  useEffect(async () => {
    const categories2 = await getCategories();

    const data = categories2.map((category) => category.node);

    // console.log(data[0]);
    // console.log(languages3[0]);
    setLanguages(data);
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
          {languages.map((language) => (
            <Dropdown language={language} key={language.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
