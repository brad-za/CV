import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Whitelogo from "../assets/chip/whiteLogo.jsx";
import Clogo from "../assets/chip/clogo.jsx";
import Iconclose from "../assets/nav/icon-close.jsx";
import Iconburger from "../assets/nav/icon-hamburger.jsx";

interface NavProps {
  className?: string;
}

interface MenuItem {
  name: string;
  href: string;
  id: string;
  end: boolean;
}

const Nav: React.FC<NavProps> = ({ className }) => {
  const [open, setOpen] = useState(false);
  const menus: MenuItem[] = [
    { name: "Home", href: "/", id: "home", end: true },
    { name: "Blog", href: "/blog", id: "blog", end: false },
    { name: "About me", href: "/CV", id: "cv", end: true },
    { name: "Keyboard", href: "/keyboard", id: "keyboard", end: true },
    // { name: "Balls", href: "/balls", id: "balls", end: true },
  ];

  const inActiveClassName =
    "inline-block h-full cursor-pointer border-b-2 border-transparent py-3 text-[1.2em] font-normal tracking-wider text-chipWhite hover:border-white md:py-5";
  const activeClassName =
    "inline-block h-full cursor-pointer border-b-2 py-3 text-[1.2em] font-normal tracking-wider text-chipWhite border-white md:py-5";

  return (
    <nav
      className={`top-0 z-50 flex h-[135px] w-full items-center justify-between pl-[30px] pt-[25px] ${className || ""}`}
    >
      <div
        className="full fixed right-10 top-11 z-50 cursor-pointer rounded-2xl bg-black md:bg-[#ffffff14] p-3 md:hidden"
        onClick={() => setOpen(!open)}
      >
        {open ? <Iconclose /> : <Iconburger />}
      </div>
      <span className="h-full">
        <Clogo className="flex pb-10 md:hidden" />
        <Whitelogo className="mt-2 hidden md:flex" />
      </span>

      <ul
        //   h-screen can go here to make the blur full length
        className={`h- fixed top-0 z-40 mr-2 mt-2 rounded-3xl bg-black md:bg-[#ffffff14] pr-28 backdrop-blur-md duration-500 ease-linear md:static md:mr-0 md:mt-0 md:h-auto md:rounded-l-3xl md:rounded-r-none md:pl-10 ${
          !open ? "right-[-100%] " : "right-0 pt-10"
        }`}
      >
        {menus.map((menu, index) => (
          <li
            onClick={() => setOpen(false)}
            key={index}
            className={`my-6 ml-5 h-full duration-300 md:my-0 md:ml-10 md:inline-block`}
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
