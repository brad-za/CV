import React from "react";
import me from "../assets/links/me.jpg";
import About from "./About";
import Hero from "./Hero";

function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
    </div>
  );
}

export default Home;
