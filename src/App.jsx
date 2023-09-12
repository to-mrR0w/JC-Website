// import { useLocation } from "react-router-dom";
// import Header from "./components/Header";
import About from "./pages/About";
import Supporter from "./pages/Supporter";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Footer from "./components/Footer";

import Home from "./pages/Home";

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <div>
        Hi
        <Home />
        <Routes>
          <Navbar />
          <Route exact path="/" element={<Home />} />
          <Route path="/supporter" element={<Supporter />} />
          <Route path="/products" element={<Products />}>
            <Route path=":id" element={<Product />} />
          </Route>
          <Route path="/about-us" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
