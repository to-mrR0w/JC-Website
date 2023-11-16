import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ShoppingCart } from "phosphor-react";
import { useSelector } from "react-redux";
import { getTotalCartPrice } from "./cartSlice";

const H1 = styled.h1`
  font-weight: 600;
  font-size: x-large;
  text-align: center;

  justify-content: center;
  display: flex;
`;
function Cart() {
  const getTotala = useSelector(getTotalCartPrice);
  const DATA = useSelector((state) => state.cart.cart);
  const navigate = useNavigate();
  return (
    <>
      {getTotala > 0 ? (
        <div className="cart">
          <div className="title">
            <h1 className="">
              <b>Your Cart:</b>
            </h1>
          </div>
          <div key={"OK"}>
            {DATA.map((product) =>
              product.cartId !== 0 ? (
                <CartItem key={product.cartId} data={product} />
              ) : null,
            )}
          </div>
          <div className="checkout">
            {" "}
            {getTotala > 0 ? (
              <p>
                <strong>Subtotal:</strong> {getTotala.toFixed(2)}€
              </p>
            ) : (
              <h1 className="text-2xl">Empty Cart</h1>
            )}
            <button onClick={() => navigate("/JC-Website/")}>
              {" "}
              Continue Shopping{" "}
            </button>
            <button> Checkout</button>
          </div>
        </div>
      ) : (
        <div className="flex text-center justify-center flex-col">
          <span className="text-center justify-center flex ">
            <ShoppingCart size={144} color="#020202" />{" "}
          </span>
          <H1 className="mt-2 ">
            <p className="bg-red-600 w-40 rounded-md">Empty Cart</p>
          </H1>
          <span>
            <button
              className="mt-4 bg-slate-300 w-40 rounded-lg"
              onClick={() => navigate("/JC-Website/")}
            >
              {" "}
              Continue Shopping
            </button>
          </span>
        </div>
      )}
    </>
  );
}

export default Cart;
