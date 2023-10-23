// import { useLocation } from "react-router-dom";
// import Header from "./components/Header";
import About from "./pages/About";
import Supporter from "./pages/Supporter";
import Products from "./pages/Products";

import Home from "./pages/Home";

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./pages/cart/cart";
import { IconContext } from "phosphor-react";
import { ShopContextProvider } from "./context/ShopContext";
import Signup from "./pages/Signup";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { useCollectionData } from "react-firebase-hooks/firestore";
firebase.initializeApp({
  apiKey: "AIzaSyDiRny5IutBfQhVflLaKYayT43qAVHuQ2E",

  authDomain: "jc-1-1a2bb.firebaseapp.com",

  projectId: "jc-1-1a2bb",

  storageBucket: "jc-1-1a2bb.appspot.com",

  messagingSenderId: "813684989963",

  appId: "1:813684989963:web:302a869979194216ec670e",

  measurementId: "G-N3L8LXFMJX",
});

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

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
          <Navbar signInWithEmail={createUserWithEmailAndPassword} />
          <Routes>
            <Route exact path="/JC-Website" element={<Home />} />
            <Route path="/JC-Website/supporter" element={<Supporter />} />
            <Route path="/JC-Website/cart" element={<Cart />} />
            <Route path="/JC-Website/products" element={<Products />}></Route>
            <Route path="/JC-Website/about-us" element={<About />} />
            <Route path="/JC-Website/login" element={<Signup />} />
          </Routes>
          <Footer />
        </>
      </IconContext.Provider>
    </ShopContextProvider>
  );
}

export default App;
