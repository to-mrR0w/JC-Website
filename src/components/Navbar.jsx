import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { FaBeer } from "react-icons/fa";

function Navbar() {
  const [Dropdown, setDropdown] = useState(false);

  return (
    <>
      {Dropdown && <Sidebar />}
      <nav className="navbar">
        <ul className="navbar_ul">
          <li className={`${Dropdown ? "text-green-600" : "text-red-400"}`}>
            <FaBeer onClick={() => setDropdown(!Dropdown)}>Icon</FaBeer>
          </li>
          <li className="navbar_li">
            <Link to="/JC-Website/">Home</Link>
          </li>
          <li className="navbar_li">
            <Link to="/JC-Website/products">products</Link>
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
