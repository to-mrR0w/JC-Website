import { useContext } from "react";
import "./cart.css";
import { ShopContext } from "../../context/ShopContext";
const CartItem = (props) => {
  const { cartItems, addCart, removeFromCart, updateCart } =
    useContext(ShopContext);

  const { data } = props;

  const { name, productImg, price, id } = data;
  return (
    <div className="cartItem">
      <img src={productImg} />
      <div className="description">
        <p>
          <b>{name}</b>
        </p>
        <p>{price}</p>
      </div>
      <div className="countHandler">
        <button onClick={() => removeFromCart(id)}> - </button>
        <input
          value={cartItems[id]}
          onChange={(e) => updateCart(Number(e.target.value), id)}
        />
        <button onClick={() => addCart(id)}> + </button>
      </div>
    </div>
  );
};

export default CartItem;
