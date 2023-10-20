import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import Icon_3lines from "./Icon_3lines";
import { ShoppingCart } from "phosphor-react";

function Navbar(props) {
  const [Dropdown, setDropdown] = useState(false);
  const { signInWithEmail } = props;
  return (
    <>
      {Dropdown && <Sidebar />}
      <nav className="flex list-none m-0 p-0 overflow-hidden   text-white ">
        <ul className="flex list-none m-0 p-0 overflow-hidden">
          <li className={`${Dropdown ? "text-green-600" : "text-red-400"}`}>
            <Icon_3lines setDropdown={setDropdown} Dropdown={Dropdown} />
          </li>
          <li className="group">
            <Link
              className="block text-white text-center py-5 px-4 no-underline transition duration-400 border border-solid border-ridge border-t-0 border-l-0 border-r-0 border-b-0 border-transparent hover:text-black hover:border-black hover:bg-gray-500 cursor-pointer"
              to="/JC-Website/"
            >
              Home
            </Link>
          </li>
          <li className="group">
            <Link
              className="block text-white text-center py-5 px-4 no-underline transition duration-400 border border-solid border-ridge border-t-0 border-l-0 border-r-0 border-b-0 border-transparent hover:text-black hover:border-black hover:bg-gray-500 cursor-pointer"
              to="/JC-Website/products"
            >
              Products
            </Link>
          </li>
          <li className="group">
            <Link
              className="block text-white text-center py-5 px-4 no-underline transition duration-400 border border-solid border-ridge border-t-0 border-l-0 border-r-0 border-b-0 border-transparent hover:text-black hover:border-black hover:bg-gray-500 cursor-pointer"
              to="/JC-Website/about-us"
            >
              About-us
            </Link>
          </li>
        </ul>
        <div className="ml-auto float-right">
          <ul className="flex list-none m-0 p-0 overflow-hidden">
            <li className="group ">
              <Link
                className="block text-white text-center py-5 px-4 no-underline transition duration-400 border border-solid border-ridge border-t-0 border-l-0 border-r-0 border-b-0 border-transparent hover:text-black hover:border-black hover:bg-gray-500 cursor-pointer"
                to="/JC-Website/login"
              >
                <button onClick={signInWithEmail} className="">
                  Login
                </button>
              </Link>
            </li>
            <li className="group">
              <Link
                className="block  text-white text-center py-5 px-5 no-underline transition duration-400 border border-solid border-ridge border-t-0 border-l-0 border-r-0 border-b-0 border-transparent hover:text-black hover:border-black hover:bg-gray-500 cursor-pointer"
                to="/JC-Website/cart"
              >
                <ShoppingCart />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
