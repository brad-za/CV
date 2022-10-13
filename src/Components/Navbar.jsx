import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Whitelogo from "../assets/chip/whiteLogo.jsx";
import Clogo from "../assets/chip/clogo.jsx";
import Iconclose from "../assets/nav/icon-close.jsx";
import Iconburger from "../assets/nav/icon-hamburger.jsx";
// https://github.com/Sridhar-C-25/space-tourism-website_react_tailwind/blob/main/src/components/Nav.jsx
const Nav = () => {
  let [open, setopen] = useState(false);
  const menus = [
    { name: "Home", href: "/", id: "home", end: true },
    { name: "Blog", href: "/blog", id: "blog", end: false },
  ];

  let inActiveClassName =
    "inline-block h-full cursor-pointer border-b-2 border-transparent py-3 text-[1.2em] font-normal tracking-wider text-chipWhite hover:border-white md:py-5";
  let activeClassName =
    "inline-block h-full cursor-pointer border-b-2  py-3 text-[1.2em] font-normal tracking-wider text-chipWhite border-white md:py-5";
  return (
    <nav className="top-0 z-50 flex h-[135px] w-full items-center justify-between pt-[25px] pl-[30px]">
      <div
        className="full fixed right-10 top-11 z-50 cursor-pointer rounded-2xl bg-[#ffffff14] p-3 md:hidden"
        onClick={() => setopen(!open)}
      >
        {open ? <Iconclose /> : <Iconburger />}
      </div>
      <span className="h-full">
        <Clogo className="flex pb-10 md:hidden" />
        <Whitelogo className="mt-2 hidden md:flex " />
      </span>

      <ul
        //   h-screen can go here to make the blur full length
        className={`h- fixed top-0 z-40 mt-2 mr-2 rounded-3xl bg-[#ffffff14] pr-28 backdrop-blur-md duration-500 ease-linear md:static md:mt-0 md:mr-0 md:h-auto md:rounded-l-3xl md:rounded-r-none md:pl-10 ${
          !open ? "right-[-100%] " : "right-0 pt-10"
        }`}
      >
        {menus.map((menu, index) => (
          <li
            onClick={() => setopen(false)}
            key={index}
            className={`my-6 ml-5 h-full duration-300 md:my-0 md:ml-10  md:inline-block`}
          >
            <NavLink
              to={menu.href}
              className={({ isActive }) =>
                isActive ? activeClassName : inActiveClassName
              }
              end={menu.end}
            >
              {menu.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Nav;
