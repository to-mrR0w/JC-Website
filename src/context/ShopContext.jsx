import { createContext, useState } from "react";
import { DATA } from "../products";

const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < DATA.length; i++) {
    cart[DATA[i].id] = 0;
  }
  return cart;
};

function ShopContextProvider(props) {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const getTotal = () => {
    let totalA = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = DATA.find((product) => product.id === Number(item));
        totalA += cartItems[item] * itemInfo.price;
        totalA = totalA.toFixed(2);
      }
    }
    return totalA;
  };
  const updateCart = (newAmount, itemID) => {
    setCartItems((prev) => ({ ...prev, [itemID]: newAmount }));
  };
  const addCart = (itemID) => {
    setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] + 1 }));
  };

  const removeFromCart = (itemID) => {
    setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] - 1 }));
  };

  return (
    <ShopContext.Provider
      value={{ cartItems, addCart, removeFromCart, updateCart, getTotal }}
    >
      {props.children}
    </ShopContext.Provider>
  );
}

export { ShopContextProvider, ShopContext };
