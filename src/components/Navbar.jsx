import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import Badge from "./Badge";

function Navbar() {
  return (
    <>
      <nav className="flex flex-col md:flex-row items-center justify-between p-4 bg-gray-800 text-white">
        <div className="flex items-center">
          <Link
            to="/JC-Website/"
            className="ml-2 text-xl font-bold flex items-center"
          >
            <img
              src="/Logo.jpeg"
              alt="Logo"
              className="h-20 w-20 rounded-md object-cover mr-2"
            />
          </Link>
        </div>
        <div className="md:flex md:items-center md:ml-4 md:gap-16">
          <Link className="nav-link md:ml-4" to="/JC-Website/">
            Home
          </Link>
          <Link className="nav-link md:ml-4" to="/JC-Website/products">
            Products
          </Link>
          <Link className="nav-link md:ml-4" to="/JC-Website/about-us">
            About Us
          </Link>
          <Link className="nav-link md:ml-4" to="/JC-Website/impressum">
            Impressum
          </Link>
        </div>
        <div className="flex items-center">
          <Link className="nav-link md:ml-4" to="/JC-Website/cart">
            <ShoppingCart size={32} color="#eeeeee" />
            <Badge />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
