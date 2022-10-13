import React, { useEffect, useState } from "react";
import { getCategoriesSimple } from "../../services/services";
import { Link, useLocation, useParams } from "react-router-dom";

const Categories = ({}) => {
  const [categories, setCategories] = useState([]);

  const loc = useParams();

  let category2 = loc["*"].split("/")[1] || "";

  useEffect(() => {
    const categories2 = getCategoriesSimple(category2).then((data) =>
      setCategories(
        data.map((category) => {
          return category.node;
        })
      )
    );

    return () => categories2;
  }, [category2]);
  return (
    <div className="mb-8 rounded-lg bg-[#ffffff14] p-4 text-left text-chipWhite shadow-lg ">
      <h3 className="mb-4 border-b pb-4 text-xl font-semibold">Categories</h3>
      {categories.map((language) => {
        {
          return language.categories.map((category) => {
            // console.log(category.name);
            return (
              <Link
                key={category.slug}
                to={`${language.slug}/${category.slug}`}
              >
                <span className="mb-3  flex cursor-pointer items-center justify-between rounded-lg p-2 text-chipWhite hover:bg-[#9b99995b]">
                  {category.name}
                  <img
                    alt={language.name}
                    height="30px"
                    width="30px"
                    className="rounded-full shadow-xl"
                    src={language.icon.url}
                  />
                </span>
              </Link>
            );
          });
        }
      })}
    </div>
  );
};

export default Categories;
