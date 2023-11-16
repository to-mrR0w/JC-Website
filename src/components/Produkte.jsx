import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useDispatch } from "react-redux";

function Produkte(props) {
  const { data } = props;

  const { name, productImg, price, id } = data;
  const { addCart, cartItems } = useContext(ShopContext);
  const cartItemsAmount = cartItems[id];
  const dispatch = useDispatch();
  return (
    <div className="product border rounded-lg w-64 md:w-80 h-95 p-6 m-4 flex flex-col justify-center ">
      <ul className="">
        <li key={`Liste${id}`}>
          <img
            className="mx-auto rounded-2xl"
            key={`Image${id}`}
            src={productImg}
            alt={`Picture:${productImg}`}
          />
          <div className="description text-center mt-4">
            <span className="text-3xl" key={`Name${id}`}>
              {name}
            </span>
            <br />
            <span className="text-lg" key={`Preis${id}`}>
              {" "}
              <b>Preis: </b> {price}
            </span>
          </div>
        </li>
      </ul>
      <button
        key={`Add${id}`}
        onClick={() => {
          addCart(id);
          dispatch(increaseItemQuantity());
        }}
        className={`${
          cartItemsAmount > 0 ? "bg-slate-600 text-white" : ""
        } addToCartBttn border border-gray-700 px-4 py-2 rounded-lg mt-4 hover:bg-gray-700 hover:text-white  cursor-pointer`}
      >
        Hinzufügen zum Einkaufwagen
        {cartItemsAmount > 0 && <>({cartItemsAmount})</>}
      </button>
      <div className="content-details">
        <p>Details:</p>
        <ul className="left-0 ml-0 p-0">
          <li>adw</li>
          <li>adwasd</li>
          <li>adwasdaf</li>
        </ul>
      </div>
    </div>
  );
}

export default Produkte;
