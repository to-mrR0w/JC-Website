import { createContext, useState } from "react";
import { DATA } from "../products";
export const ShopContext = createContext(null);
const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < DATA.length; i++) {
    cart[i] = 0;
  }
  return cart;
};
export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const addCart = (itemID) => {
    setCartItems;
    (prev) => ({ ...prev, [itemID]: prev[itemID] + 1 });
  };

  const removeFromCart = (itemID) => {
    setCartItems;
    (prev) => ({ ...prev, [itemID]: prev[itemID] - 1 });
  };
  const contextValue = { cartItems, addCart, removeFromCart };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
