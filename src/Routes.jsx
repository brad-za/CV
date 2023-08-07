import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Blog from "./Components/Blog/Blog";
import MouseTracking from "./Components/MouseTracking/MouseTracking";
import Footer from "./Components/Footer";
import Keyboard from "./Components/Keyboard/Keyboard";
import Hero from "./Components/Hero";

const myRoutes = () => {
	const route = useLocation();
	return (
		<div className="">
			{route.pathname !== "/mouse" ? (
				<React.Fragment>
					<Navbar className="z-30" />
					<Routes className="">
						<Route path="/" element={<Home />} />
						<Route path="/blog/*" element={<Blog />} />
						<Route path="/keyboard/" element={<Keyboard />} />
						<Route path="/hero/" element={<Hero />} />

						{/* <Route path="/balls" element={<Balls />} /> */}
					</Routes>
					<Footer />
				</React.Fragment>
			) : (
				<React.Fragment>
					<Routes>
						<Route path="/mouse" element={<MouseTracking />} />
					</Routes>
				</React.Fragment>
			)}
		</div>
	);
};

export default myRoutes;
