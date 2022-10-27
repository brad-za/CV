import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";

import Footer from "./Components/Footer.jsx";
import Home from "./Components/Home.jsx";
import Blog from "./Components/Blog/Blog.jsx";
import MouseTracking from "./Components/MouseTracking/MouseTracking.jsx";
import React from "react";
import GalleryElements from "./Components/MouseTracking/GalleryElements.jsx";

function App() {
	const route = useLocation();
	//   console.log(route);
	return (
		<div className="bg-green- flex min-h-screen flex-col justify-between">
			{route.pathname !== "/mouse" ? (
				<React.Fragment>
					<Navbar className="z-30" />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/blog/*" element={<Blog />} />
					</Routes>
					<Footer />
				</React.Fragment>
			) : (
				<React.Fragment className="overflow-hidden">
					<Routes>
						<Route path="/mouse" element={<MouseTracking />} />
					</Routes>
				</React.Fragment>
			)}
		</div>
	);
}

export default App;
