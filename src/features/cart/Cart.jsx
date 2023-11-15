import { DATA } from "../../products";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const H1 = styled.h1`
  font-weight: 600;
  font-size: x-large;
  text-align: center;

  justify-content: center;
  display: flex;
`;
function Cart() {
  const { cartItems, getTotal } = useContext(ShopContext);
  const getTotala = getTotal();
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
              cartItems[product.id] !== 0 ? (
                <CartItem key={product.id} data={product} />
              ) : null,
            )}
          </div>
          <div className="checkout">
            {" "}
            {getTotala > 0 ? (
              <p>Subtotal: {getTotala}</p>
            ) : (
              <h1 className="text-2xl">Empty Cart</h1>
            )}
            <button onClick={() => navigate("/JC-Website/")}> Continue </button>
            <button> Checkout</button>
          </div>
        </div>
      ) : (
        <>
          <H1 className="mt-10 ">
            <p className="bg-red-300 w-40 rounded-md">Empty Cart</p>
          </H1>
        </>
      )}
    </>
  );
}

export default Cart;
