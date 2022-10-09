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
import BlogNavigation from "./Components/Blog/BlogNavigation.jsx";
import Widgets from "./Components/Blog/Widgets.jsx";
import Header from "./Components/Blog/Header.jsx";

function App() {
  const { language, category } = useParams();

  console.log(language, category);

  return (
    <div className="">
      <Navbar className="z-30" />
      {/* <h1 className="ml-24 text-center text-7xl font-semibold">Brad Simon</h1> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Blog/*"
          element={
            <>
              <Header />
              {/* <div className="relative flex content-center justify-center gap-6 px-8"> */}
              <div className="grid grid-cols-1  text-center lg:grid-cols-12">
                <div className="col-span-1 lg:col-span-8">
                  <BlogNavigation />
                </div>
                <div className="col-span-1 lg:col-span-4">
                  <Widgets />
                </div>
              </div>
            </>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

//    <div className="grid grid-cols-1  gap-12  text-center lg:grid-cols-12">
//      <div className="col-span-1 lg:col-span-8">
//        {posts.map((post) => (
//          <PostCard post={post} key={post.title} />
//        ))}
//      </div>
//      <div className="col-span-1 lg:col-span-4">
//        <div className="relative top-8 lg:sticky">
//          <PostWidget />
//          <CategoriesWidget />
//        </div>
//      </div>
//    </div>
