import React from "react";
import me from "../assets/links/me.jpg";
import Abilities from "./Abilities";
import About from "./About";
import Hero from "./Hero";
import Seperator from "./Seperator";
import CV from "./CV";

function Home() {
	return (
		<div className="flex flex-col content-center items-center justify-center pt-20">
			<Hero />

			<Seperator />
			<CV />
			{/* <About />
			<Seperator />
			<Abilities />
			<Seperator /> */}
		</div>
	);
}

export default Home;
