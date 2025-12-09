import React from "react";
import homeSvg from "../assets/home.svg";
import Discord from "../assets/links/discord.jsx";
import Telegram from "../assets/links/telegram.jsx";
import Twitter from "../assets/links/twitter.jsx";

const Footer: React.FC = () => {
  return (
    <div className=" flex max-h-[200px] min-h-[200px] w-full justify-evenly bg-[#ffffff11] p-5 backdrop-blur-md md:p-10">
      <div>
        <a href="/" aria-label="Home">
          <img src={homeSvg} alt="Home" className="h-12" />
        </a>
      </div>
      <div className=" grid grid-flow-row content-center gap-2 md:grid-flow-col md:content-start">
        <Twitter
          colour="black"
          href="https://x.com/streetRAT_za"
          className="h-[30px]"
        />
        <Discord
          colour="black"
          href="https://discord.com/users/202008244397277184"
          className="h-[30px]"
        />
      </div>
    </div>
  );
};

export default Footer;
