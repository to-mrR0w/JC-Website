import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

function Produkte(props) {
  const { nameP, img, preis, id } = props;
  const { addCart, cartItems } = useContext(ShopContext);
  const cartItemsAmount = cartItems[id];
  return (
    <div className="">
      <ul className="">
        <li key={id}>
          <img key={"Image"} src={img} alt={`Picture:${img}`} />
          <span key={"Name"}>{nameP}</span>
          <br />
          <span key={"Preis"}> Preis:{preis}</span>
          <br />
          <button
            key={"Add"}
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
