import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

function Produkte(props) {
  const { data } = props;

  const { name, productImg, price, id } = data;
  const { addCart, cartItems } = useContext(ShopContext);
  const cartItemsAmount = cartItems[id];
  return (
    <div className="product border rounded-lg w-64 md:w-80 h-95 p-6 m-4 flex flex-col justify-center items-center">
      <ul className="">
        <li key={`Liste${id}`}>
          <img
            className=""
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
      <div className="content-details flex">Hallo</div>
    </div>
  );
}

export default Produkte;
