import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

function Produkte(props) {
  const { data } = props;

  const { name, productImg, price, id } = data;
  const { addCart, cartItems } = useContext(ShopContext);
  const cartItemsAmount = cartItems[id];
  return (
    <div className="">
      <ul className="">
        <li key={`Liste${id}`}>
          <img
            key={`Image${id}`}
            src={productImg}
            alt={`Picture:${productImg}`}
          />
          <span key={`Name${id}`}>{name}</span>
          <span key={`Preis${id}`}> Preis:{price}</span>
          <button
            key={`Add${id}`}
            onClick={() => addCart(id)}
            className="bg-green-500 border-black border "
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
