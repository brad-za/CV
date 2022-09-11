import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";

import Footer from "./Components/Footer.jsx";
import Hero from "./Components/Hero.jsx";
import Home from "./Components/Home.jsx";

function App() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <Navbar className="z-30" />
      {/* <h1 className="ml-24 text-center text-7xl font-semibold">Brad Simon</h1> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Hero" element={<Hero />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
