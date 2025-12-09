import React from "react";
import me from "../assets/links/me.jpg";
import Abilities from "./Abilities.tsx";
import About from "./About.tsx";
import Hero from "./Hero.tsx";
import Seperator from "./Seperator.tsx";
import CV from "./CV.tsx";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col content-center items-center justify-center">
      <Hero />

      <Seperator />
      <CV />
      {/* <About />
      <Seperator />
      <Abilities />
      <Seperator /> */}
    </div>
  );
};

export default Home;
