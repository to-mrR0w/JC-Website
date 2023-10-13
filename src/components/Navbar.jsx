import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import Icon_3lines from "./Icon_3lines";
import { ShoppingCart } from "phosphor-react";

function Navbar() {
  const [Dropdown, setDropdown] = useState(false);

  return (
    <>
      {Dropdown && <Sidebar />}
      <nav className="flex list-none m-0 p-0 overflow-hidden   text-white ">
        <ul className="flex list-none m-0 p-0 overflow-hidden">
          <li className={`${Dropdown ? "text-green-600" : "text-red-400"}`}>
            <Icon_3lines setDropdown={setDropdown} Dropdown={Dropdown} />
          </li>
          <li className="block text-white text-center py-5 px-4 no-underline">
            <Link to="/JC-Website/">Home</Link>
          </li>
          <li className="block text-white text-center py-5 px-4 no-underline">
            <Link to="/JC-Website/products">Products</Link>
          </li>
          <li className="block text-white text-center py-5 px-4 no-underline">
            <Link to="/JC-Website/about-us">About-us</Link>
          </li>
          <li className="block text-white text-center py-2 px-4 no-underline ">
            <Link
              className="block text-center py-2 px-4 no-underline"
              to="/JC-Website/cart"
            >
              <ShoppingCart />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
