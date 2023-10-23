import { useContext } from "react";
import "./cart.css";
import { ShopContext } from "../../context/ShopContext";
import { FaAngleDown, FaAngleUp, FaTimes } from "react-icons/fa";
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
        {" "}
        <button onClick={() => addCart(id)}>
          {" "}
          <FaAngleUp />{" "}
        </button>
        <input
          value={cartItems[id]}
          onChange={(e) => updateCart(Number(e.target.value), id)}
        />
        <button onClick={() => removeFromCart(id)}>
          {cartItems[id] === 1 ? <FaTimes /> : <FaAngleDown />}
        </button>
      </div>
    </div>
  );
};

export default CartItem;
