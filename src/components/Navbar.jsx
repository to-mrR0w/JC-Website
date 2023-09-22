import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

function Navbar() {
  const [Dropdown, setDropdown] = useState(false);

  return (
    <>
      
      {Dropdown && <Sidebar />}
      <nav className="navbar">
        <ul className="navbar_ul">
          <li>
            <button onClick={() => setDropdown(!Dropdown)}>Icon</button>
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
