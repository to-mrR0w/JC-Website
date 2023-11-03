// import { useLocation } from "react-router-dom";
// import Header from "./components/Header";
import About from "./pages/About";
import Supporter from "./pages/Supporter";
import Products from "./pages/Products";
import Signup from "./pages/Signup";
import LogIn from "./pages/LogIn";
import Home from "./pages/Home";

import Cart from "./features/cart/Cart";

// import ProtectedRoute from "./components/ProtectedRoute";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ShopContextProvider } from "./context/ShopContext";
import { IconContext } from "phosphor-react";
import { FirebaseContext } from "./context/FirebaseContext";
import { MantineProvider } from "@mantine/core";
import AppLayout from "./pages/AppLayout";
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/JC-Website/", element: <Home /> }, //TODO loader
      { path: "/JC-Website/cart", element: <Cart /> },
      { path: "/JC-Website/products", element: <Products /> },
      { path: "/JC-Website/supporter", element: <Supporter /> },
      { path: "/JC-Website/about-us", element: <About /> },
      { path: "/JC-Website/register", element: <Signup /> },
      { path: "/JC-Website/login", element: <LogIn /> },
    ],
  },
]);

function App() {
  return (
    <MantineProvider>
      <ShopContextProvider>
        <IconContext.Provider
          value={{
            color: "grey",
            size: 32,
            weight: "bold",
            mirrored: false,
          }}
        >
          <FirebaseContext>
            <RouterProvider router={router} />
          </FirebaseContext>
        </IconContext.Provider>
      </ShopContextProvider>
    </MantineProvider>
  );
  //     <>
  //       <MantineProvider>
  //         <ShopContextProvider>
  //           <IconContext.Provider
  //             value={{
  //               color: "grey",
  //               size: 32,
  //               weight: "bold",
  //               mirrored: false,
  //             }}
  //           >
  //             <FirebaseContext>

  //               {/* <Navbar /> */}
  //               {/* <Routes>
  //                 <Route
  //                   exact
  //                   path="/JC-Website"
  //                   element={
  //                     <ProtectedRoute>
  //                       <Home />
  //                     </ProtectedRoute>
  //                   }
  //                 />
  //                 <Route path="/JC-Website/supporter" element={<Supporter />} />
  //                 <Route path="/JC-Website/cart" element={<Cart />} />
  //                 <Route
  //                   path="/JC-Website/products"
  //                   element={<Products />}
  //                 ></Route>
  //                 <Route path="/JC-Website/about-us" element={<About />} />
  //                 <Route path="/JC-Website/register" element={<Signup />} />
  //                 <Route path="/JC-Website/login" element={<LogIn />} />
  //               </Routes> */}
  //               {/* <Footer />{" "} */}
  //             </FirebaseContext>{" "}
  //           </IconContext.Provider>
  //         </ShopContextProvider>
  //       </MantineProvider>
  //     </>
  //   );
}

export default App;
