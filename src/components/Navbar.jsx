import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import Icon_3lines from "./Icon_3lines";

function Navbar() {
  const [Dropdown, setDropdown] = useState(false);

  return (
    <>
      {Dropdown && <Sidebar />}
      <nav className="navbar">
        <ul className="navbar_ul">
          <li className={`${Dropdown ? "text-green-600" : "text-red-400"}`}>
            <Icon_3lines setDropdown={setDropdown} Dropdown={Dropdown} />
          </li>
          <li className="navbar_li">
            <Link to="/JC-Website/">Home</Link>
          </li>
          <li className="navbar_li">
            <Link to="/JC-Website/products">Products</Link>
          </li>
          <li className="navbar_li">
            <Link to="/JC-Website/about-us">About-us</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
