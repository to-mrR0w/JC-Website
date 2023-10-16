import { createContext, useState } from "react";
import { DATA } from "../products";
const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < DATA.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

function ShopContextProvider(props) {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addCart = (itemID) => {
    setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] + 1 }));
  };

  console.log(cartItems);

  const removeFromCart = (itemID) => {
    setCartItems;
    (prev) => ({ ...prev, [itemID]: prev[itemID] - 1 });
  };
  return (
    <ShopContext.Provider value={{ cartItems, addCart, removeFromCart }}>
      {props.children}
    </ShopContext.Provider>
  );
}
export { ShopContextProvider, ShopContext };
