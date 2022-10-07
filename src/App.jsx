import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";

import Footer from "./Components/Footer.jsx";
import Blog from "./Components/Blog/Blog.jsx";
import Home from "./Components/Home.jsx";
import BlogLayout from "./Components/Blog/BlogLayout.jsx";

function App() {
  return (
    <div className="">
      <Navbar className="z-30" />
      {/* <h1 className="ml-24 text-center text-7xl font-semibold">Brad Simon</h1> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Blog/*"
          element={
            <BlogLayout>
              <Blog />
            </BlogLayout>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
