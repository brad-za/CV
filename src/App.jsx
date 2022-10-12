import {
  HashRouter,
  BrowserRouter,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";

import Footer from "./Components/Footer.jsx";
import Home from "./Components/Home.jsx";
import Blog from "./Components/Blog/Blog.jsx";

function App() {
  return (
    <div className="">
      <Navbar className="z-30" />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/*" element={<Blog />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
