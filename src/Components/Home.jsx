import React from "react";
import me from "../assets/links/me.jpg";
import Abilities from "./Abilities";
import About from "./About";
import Hero from "./Hero";
import Seperator from "./Seperator";

function Home() {
  return (
    <div className="flex flex-col content-center items-center justify-center">
      <Hero />
      <Seperator />
      <About />
      <Seperator />

      <Abilities />
    </div>
  );
}

export default Home;
