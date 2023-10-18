import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

function Produkte(props) {
  const { data } = props;

  const { name, productImg, price, id } = data;
  const { addCart, cartItems } = useContext(ShopContext);
  const cartItemsAmount = cartItems[id];
  return (
    <div className="product border rounded-lg w-64 md:w-72 h-72 p-6 m-4 flex flex-col justify-center items-center">
      <ul className="">
        <li key={`Liste${id}`}>
          <img
            className="w-64 md:w-72"
            key={`Image${id}`}
            src={productImg}
            alt={`Picture:${productImg}`}
          />
          <div className="description text-center mt-4">
            <span className="" key={`Name${id}`}>
              {name}
            </span>
            <span className="" key={`Preis${id}`}>
              {" "}
              Preis:{price}
            </span>
          </div>

          <button
            key={`Add${id}`}
            onClick={() => addCart(id)}
            className="addToCartBttn border border-gray-700 px-4 py-2 rounded-lg mt-4 hover:bg-gray-700 hover:text-white "
          >
            Hinzufügen zum Einkaufwagen
            {cartItemsAmount > 0 && <>({cartItemsAmount})</>}
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Produkte;
