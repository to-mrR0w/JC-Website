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

import { ShopContextProvider } from "./context/ShopContext";
import { IconContext } from "phosphor-react";
import { MantineProvider } from "@mantine/core";
import AppLayout from "./pages/AppLayout";
import Impressum from "./pages/Impressum";
import Error from "./pages/Error";
import { Route, Routes } from "react-router-dom";
import { FirebaseContext } from "./context/FirebaseContext";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./pages/CheckoutForm";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_mY9dmGCWnQgKn04SrNtHCjNJ");

// const router = createBrowserRouter([
//   {
//     element: <AppLayout />,
//     errorElement: <Error />,
//     children: [
//       { path: "/JC-Website", element: <Home /> }, //TODO loader
//       { path: "/JC-Website/cart", element: <Cart /> },
//       { path: "/JC-Website/products", element: <Products /> },
//       { path: "/JC-Website/supporter", element: <Supporter /> },
//       { path: "/JC-Website/about-us", element: <About /> },
//       { path: "/JC-Website/register", element: <Signup /> },
//       { path: "/JC-Website/login", element: <LogIn /> },
//       { path: "/JC-Website/impressum", element: <Impressum /> },
//     ],
//   },
// ]);

function App() {
  const options = {
    // passing the client secret obtained from the server
    clientSecret: "{{CLIENT_SECRET}}",
  };

  return (
    // <MantineProvider>
    //   <ShopContextProvider>
    //     <IconContext.Provider
    //       value={{
    //         color: "grey",
    //         size: 32,
    //         weight: "bold",
    //         mirrored: false,
    //       }}
    //     >
    //       <RouterProvider router={router} />
    //     </IconContext.Provider>
    //   </ShopContextProvider>
    // </MantineProvider>

    <>
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
              <Routes>
                <Route element={<AppLayout />}>
                  <Route index element={<Home />} />
                  <Route index exact path="/JC-Website/" element={<Home />} />
                  <Route path="/JC-Website/supporter" element={<Supporter />} />
                  <Route path="/JC-Website/cart" element={<Cart />} />
                  <Route
                    path="/JC-Website/products"
                    element={<Products />}
                  ></Route>
                  <Route path="/JC-Website/about-us" element={<About />} />
                  <Route path="/JC-Website/impressum" element={<Impressum />} />
                </Route>
                <Route path="*" element={<Error />} />
                <Route path="/register" element={<Signup />} />
                <Route path="/login" element={<LogIn />} />
                <Elements stripe={stripePromise} options={options}>
                  <Route path="checkout" element={<CheckoutForm />} />
                </Elements>
              </Routes>
            </FirebaseContext>
          </IconContext.Provider>
        </ShopContextProvider>
      </MantineProvider>
    </>
  );
}

export default App;
