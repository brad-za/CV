import React from "react";
import { Route, Routes as ReactRoutes, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar.tsx";
import Home from "./Components/Home.tsx";
import Blog from "./Components/Blog/Blog";
import MouseTracking from "./Components/MouseTracking/MouseTracking.tsx";
import Footer from "./Components/Footer.tsx";
import Hero from "./Components/Hero.tsx";

const AppRoutes: React.FC = () => {
  const route = useLocation();

  return (
    <div className="">
      {route.pathname !== "/" ? (
        <React.Fragment>
          <Navbar className="z-30" />
          <ReactRoutes>
            <Route path="/CV" element={<Home />} />
            <Route path="/blog/*" element={<Blog />} />
            <Route path="/hero/" element={<Hero />} />
            {/* <Route path="/balls" element={<Balls />} /> */}
          </ReactRoutes>
          <Footer />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <ReactRoutes>
            <Route path="/" element={<MouseTracking />} />
          </ReactRoutes>
        </React.Fragment>
      )}
    </div>
  );
};

export default AppRoutes;
