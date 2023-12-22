import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useDispatch, useSelector } from "react-redux";
import {
  getCurrQuantityById,
  increaseItemQuantity,
} from "../features/cart/cartSlice";
import { Link } from "react-router-dom";

function Produkte(props) {
  const { data } = props;
  const { name, productImg, price, id } = data;

  // React context and Redux setup
  const { cartItems } = useContext(ShopContext);
  const cartItemsAmount = cartItems[id];
  const dispatch = useDispatch();
  const quantity = useSelector(getCurrQuantityById(id));

  // Function to handle adding item to the cart
  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(increaseItemQuantity(id));
  };

  return (
    <div className="product bg-white border rounded-lg w-full md:w-96 p-6 m-4 flex flex-col justify-between shadow-lg">
      <img
        className="mx-auto rounded-lg object-cover w-full h-60 md:h-56 lg:h-64"
        src={productImg}
        alt={`Picture: ${productImg}`}
      />

      <div className="description text-center mt-4">
        <span className="text-lg md:text-xl font-semibold">{name}</span>
        <br />
        <span className="text-base md:text-lg text-gray-600">
          <b>Preis: </b> {price}
        </span>
      </div>

      {quantity > 0 ? (
        // Render button to add to cart if quantity is greater than 0
        <button
          onClick={handleAddToCart}
          className={`addToCartBttn border w-full ${
            cartItemsAmount > 0
              ? "bg-blue-500 text-white"
              : "hover:bg-blue-500 hover:text-white"
          } px-6 py-3 rounded-lg mt-4 transition-all`}
        >
          Hinzufügen zum Einkaufwagen{quantity > 0 && <>({quantity})</>}
        </button>
      ) : (
        <Link
          to="https://buy.stripe.com/test_fZe4hE8CydEw8U06oq?locale=de"
          target="_blank"
          rel="noreferrer"
          className={`addToCartBttn border w-full ${
            cartItemsAmount > 0
              ? "bg-blue-500 text-white"
              : "hover:bg-blue-500 hover:text-white"
          } px-6 py-3 rounded-lg mt-4 transition-all text-center`}
        >
          <span>Pay</span>
          {cartItemsAmount > 0 && <>({cartItemsAmount})</>}
        </Link>
      )}

      <div className="content-details mt-4">
        <p className="font-semibold">Details:</p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Verschiedene Arten: Leder, Stoff</li>
          <li>inkl. Induktionspowerbank</li>
          <li>inkl. Klettverschlüsse</li>
        </ul>
      </div>
    </div>
  );
}

export default Produkte;
