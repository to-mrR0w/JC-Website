import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      {" "}
      <nav className="navbar">
        <ul className="navbar_ul">
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
