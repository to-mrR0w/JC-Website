// import { useLocation } from "react-router-dom";
// import Header from "./components/Header";
import About from "./pages/About";
import Supporter from "./pages/Supporter";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Home from "./pages/Home";

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./pages/cart/cart";
import { IconContext } from "phosphor-react";
import { ShopContextProvider } from "./context/ShopContext";
function App() {
  return (
    <ShopContextProvider>
      <IconContext.Provider
        value={{
          color: "limegreen",
          size: 32,
          weight: "bold",
          mirrored: false,
        }}
      >
        <>
          <Navbar />
          <Routes>
            <Route exact path="/JC-Website" element={<Home />} />
            <Route path="/JC-Website/supporter" element={<Supporter />} />
            <Route path="/JC-Website/cart" element={<Cart />} />
            <Route path="/JC-Website/products" element={<Products />}>
              <Route path=":id" element={<Product />} />
            </Route>
            <Route path="/JC-Website/about-us" element={<About />} />
          </Routes>
          <Footer />
        </>
      </IconContext.Provider>
    </ShopContextProvider>
  );
}

export default App;
