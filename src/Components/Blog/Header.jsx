import React, { useEffect, useState, useLayoutEffect, useRef } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import Dropdown from "./Dropdown";
import { getCategories } from "../../services/services.js";

const Header = () => {
  const [languages, setLanguages] = useState([]);
  const [header, setHeader] = useState(0);
  const [language, setlanguage] = useState();

  let params = useParams();
  let paramSplit = params["*"].split("/");

  useEffect(() => {
    switch (paramSplit.length) {
      case 1:
        // console.log("case one");
        if (params["*"] !== "") {
          return setHeader("language page");
        } else {
          return setHeader(0);
        }
      case 2:
        // console.log("header should be category ish");
        return setHeader("category page");
      case 3:
        return setHeader(0);
    }

    // return () => {
    //   second
    // };
  }, [params]);

  useEffect(() => {
    const categories2 = getCategories().then((data) =>
      setLanguages(data.map((category) => category.node))
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
          {languages.map((language) => (
            <Dropdown language={language} key={language.name} />
          ))}
        </div>
      </div>
      {header ? <h1 className=" text-3xl font-semibold">{header}</h1> : <></>}
    </div>
  );
};

export default Header;
