import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Whitelogo from "../../assets/chip/whiteLogo.jsx";
import Clogo from "../../assets/chip/clogo.jsx";
import Iconclose from "../../assets/nav/icon-close.jsx";
import Iconburger from "../../assets/nav/icon-hamburger.jsx";
// https://github.com/Sridhar-C-25/space-tourism-website_react_tailwind/blob/main/src/components/Nav.jsx
const Nav = ({ size, setopen, open }) => {
	//   const menus = [
	//     { name: "x", href: "/", id: "home" },
	//     { name: "x", href: "", id: "testing" },
	//   ];
	//   let inActiveClassName =
	//     "inline-block h-full cursor-pointer border-b-2 border-transparent py-3 text-[1.2em] font-normal tracking-wider text-chipWhite hover:border-white md:py-5";
	//   let activeClassName =
	//     "inline-block h-full cursor-pointer border-b-2  py-3 text-[1.2em] font-normal tracking-wider text-chipWhite border-white md:py-5";
	return (
		<nav className="bg- relative z-50 flex w-full content-center items-center justify-between rounded-t-lg pt-[] ">
			{/* <div
        className={` absolute right-2 top-4 z-50 mt-2 mr-2 cursor-pointer rounded-2xl bg-[#ffffff58] p-3 
          ${!size ? " hidden" : ""}`}
        onClick={() => setopen(!open)}
      >
        {open ? <Iconclose /> : <Iconburger />}
      </div> */}
			<span className=" flex h-[100px] items-center justify-center">
				<p className="ml-4 text-center text-4xl font-black text-white">
					X
				</p>
				{/* <Clogo className={`ml-4 mt-5 pb-10 ${!size && "hidden"}`} /> */}
				{/* <Whitelogo className={`mt- ${size && "hidden"}`} /> */}
			</span>
			{/* 
      <ul
        //   h-screen can go here to make the blur full length
        className={`absolute top-0 mt-4 mr-2 rounded-3xl bg-[#ffffff58] pr-10 backdrop-blur-md duration-1000 ease-linear ${
          !open ? (!size ? " right-0" : "hidden ") : "right-0 pt-10"
        }`}
      >
        {menus.map((menu, index) => (
          <li
            onClick={() => setopen(false)}
            key={index}
            className={`my-6 ml-5 h-full duration-300 md:my-0 md:ml-10  ${
              !size ? "inline-block" : ""
            }`}
          >
            <NavLink
              to={menu.href}
              className={({ isActive }) =>
                isActive ? activeClassName : inActiveClassName
              }
            >
              {menu.name}
            </NavLink>
          </li>
        ))}
      </ul> */}
		</nav>
	);
};
export default Nav;
