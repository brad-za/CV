import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";
import { getCategories } from "../../services/services";
import { Language } from "../../types/blog";

const Header: React.FC = () => {
  const [languages, setLanguages] = useState<Language[]>([]);

  useEffect(() => {
    const categories2 = getCategories().then((data) =>
      setLanguages(data.map((category) => category.node))
    );

    return () => {
      // Cleanup function
      // Note: returning the promise doesn't do anything in cleanup
      // This is just to match the original code
    };
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
