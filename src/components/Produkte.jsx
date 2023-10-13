import { useContext } from "react";
import { ShopContext } from ".././context/ShopContext";
function Produkte(props) {
  const { nameP, img, preis, id } = props;
  const { addCart } = useContext(ShopContext);
  return (
    <div>
      <ul key={id}>
        <li key={id}>
          <img key={"Image"} src={img} />
          <span key={nameP}>{nameP}</span>
          <br />
          <span key={"Preis"}> Preis:{preis}</span>
          <button key={"Add"} onClick={() => addCart(id)} className="">
            Hinzufügen zum Einkaufwagen
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Produkte;
