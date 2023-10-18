import Produkte from "../components/Produkte.jsx";
import { DATA } from "../products.js";
function Products() {
  return (
    <div className="justify-center flex gap-32">
      {DATA.map((produkt) => (
        <>
          <Produkte data={produkt} />
        </>
      ))}
    </div>
  );
}

export default Products;
