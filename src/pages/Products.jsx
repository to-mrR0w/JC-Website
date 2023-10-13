import Produkte from "../components/Produkte.jsx";
import { DATA } from "../products.js";
function Products() {
  return (
    <>
      {DATA.map((produkt) => (
        <>
          <Produkte
            id={produkt.id}
            nameP={produkt.name}
            preis={produkt.price}
            img={produkt.productImg}
          />
        </>
      ))}
    </>
  );
}

export default Products;
