import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";

import Footer from "./Components/Footer.jsx";
import Home from "./Components/Home.jsx";
import Blog from "./Components/Blog/Blog.jsx";
import MouseTracking from "./Components/MouseTracking/MouseTracking.jsx";
import React from "react";
import Balls from "./Components/Balls/Balls.jsx";

function App() {
	const route = useLocation();
	return (
		<div className="bg-green- flex min-h-screen flex-col justify-between">
			{route.pathname !== "/mouse" ? (
				<React.Fragment>
					<Navbar className="z-30" />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/blog/*" element={<Blog />} />
						<Route path="/balls" element={<Balls />} />
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
}

export default App;
