import { DATA } from "../../products";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";
function Cart() {
  const { cartItems, getTotal } = useContext(ShopContext);
  const getTotala = getTotal();
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div className="title">
        <h1 className="">
          <b>Your Cart:</b>
        </h1>
      </div>
      <div key={"OK"}>
        {DATA.map((product) =>
          cartItems[product.id] !== 0 ? (
            <CartItem key={product.id} data={product} />
          ) : null
        )}
      </div>
      <div className="checkout">
        {" "}
        <p>Subtotal: {getTotala}</p>
        <button onClick={() => navigate("/JC-Website/")}> Continue </button>
        <button> Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
