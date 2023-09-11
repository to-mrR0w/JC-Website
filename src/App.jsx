// import { useLocation } from "react-router-dom";
import About from "./pages/About";
import Supporter from "./pages/Supporter";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Footer from "./components/Footer";
// import Header from "./components/Header";
import Home from "./pages/Home";

import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <div>
        Hi
        <Home />
        <Routes>
          <Route path="/JC-Website/" element={<Home />} />
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
