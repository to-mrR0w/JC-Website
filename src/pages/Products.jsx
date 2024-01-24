import Produkte from "../components/Produkte.jsx";
import { DATA } from "../products.js";
const image = "/_DSC3239.JPG";
function Products() {
  return (
    <div className="flex justify-between h-[565px] ">
      <span className="flex opacity-70 h-[500px] justify-center my-auto">
        <img className="rounded-md" src={image} />
      </span>
      <div className="justify-center flex gap-32 ">
        {DATA.map((produkt, i) => {
          return <Produkte key={i} data={produkt} />;
        })}
      </div>
      <span className="opacity-70 h-[500px] flex justify-center my-auto">
        <img className="rounded-md" src={image} />
      </span>
    </div>
  );
}

export default Products;
