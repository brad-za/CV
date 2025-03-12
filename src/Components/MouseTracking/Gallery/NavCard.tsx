import React from "react";
import me from "../../../assets/links/me.jpg";
import partyHat from "../../../assets/links/party-hat.svg";
import GalleryCard from "./GalleryCard";
import { NavLink } from "react-router-dom";

interface NavCardProps {
  mouseOverElementHandler: (name: string | null) => void;
}

const NavCard: React.FC<NavCardProps> = ({ mouseOverElementHandler }) => {
  const menus = [
    { name: "Home", href: "/", id: "home", end: true },
    { name: "Blog", href: "/blog", id: "blog", end: false },
    { name: "About me", href: "/CV", id: "cv", end: true },
    { name: "Keyboard", href: "/keyboard", id: "keyboard", end: true },
    // { name: "Balls", href: "/balls", id: "balls", end: true },
  ];

  let inActiveClassName =
    "flex items-center justify-center w-full h-full border-b-2 border-transparent text-[3vmin] font-normal tracking-wider hover:border-black";
  let activeClassName =
    "flex items-center justify-center w-full h-full border-b-2 text-[3vmin] font-normal tracking-wider border-black";

  return (
    <GalleryCard
      right="4%"
      top="2%"
      mdHeight="34%"
      mdWidth="12%"
      background="bg-[#FFEC45]"
      mouseOverElementHandler={mouseOverElementHandler}
      name="NAV"
      label="NAV"
      labelDirection="down"
    >
      <div className="flex gap-10 flex-col h-full w-full">
        {menus.map((menu, index) => (
          <NavLink
            key={index}
            onMouseMove={() => {
              mouseOverElementHandler(null);
            }}
            to={menu.href}
            className={({ isActive }) => {
              return isActive ? activeClassName : inActiveClassName;
            }}
            end={menu.end}
            style={{ height: `${100 / menus.length}%` }}
          >
            <span>{menu.name}</span>
          </NavLink>
        ))}
      </div>
    </GalleryCard>
  );
};

export default NavCard;
