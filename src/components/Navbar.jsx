import { useState } from "react";
import { Link } from "react-router-dom";
// import Sidebar from "./Sidebar";
import Icon_3lines from "./Icon_3lines";
import { ShoppingCart } from "phosphor-react";
import Badge from "./Badge";
// import Button from "./Button";
//? Firebase import { UseUserAuth } from "../context/FirebaseContext";
//? Firebase import { Avatar } from "@mantine/core";

function Navbar() {
  const [Dropdown, setDropdown] = useState(false);
  //? Firebase const { signInWithEmail } = props;

  //? Firebase const { user2, isAuth, Logout } = UseUserAuth();
  return (
    <>
      {/* {Dropdown && <Sidebar />} */}

      <nav className=" flex list-none m-0 p-0 overflow-hidden   text-white ">
        <ul className="justify-between  flex list-none m-0 p-0 overflow-hidden">
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
          <li className="group  ">
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
          <li className="group">
            <Link
              className="block text-white text-center py-5 px-4 no-underline transition duration-400 border border-solid border-ridge border-t-0 border-l-0 border-r-0 border-b-0 border-transparent hover:text-black hover:border-black hover:bg-gray-500 cursor-pointer"
              to="/JC-Website/impressum"
            >
              Impressum
            </Link>
          </li>
        </ul>
        <div className="">
          <ul className="">
            {/* <li>
              <Avatar
                className="mt-2.5"
                variant="filled"
                style={{ borderRadius: "80%", width: "50px", height: "50px" }}
                src={user2.photoURL}
              />
            </li>{" "}
            <li className="group ">
              {isAuth ? (
                <>
                  <Button
                    className={
                      "block text-white text-center py-5 px-4 no-underline transition duration-400 border border-solid border-ridge border-t-0 border-l-0 border-r-0 border-b-0 border-transparent hover:text-black hover:border-black hover:bg-gray-500 cursor-pointer"
                    }
                    onClick={Logout}
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <Link
                  className="block text-white text-center py-5 px-4 no-underline transition duration-400 border border-solid border-ridge border-t-0 border-l-0 border-r-0 border-b-0 border-transparent hover:text-black hover:border-black hover:bg-gray-500 cursor-pointer"
                  to="/login"
                >
                  <Button onClick={signInWithEmail} className="">
                    Login
                  </Button>
                </Link>
              )}
            </li> */}
            <li className="">
              <Link
                className="block text-white text-center py-5 px-5 no-underline transition duration-400 border border-solid border-ridge border-t-0 border-l-0 border-r-0 border-b-0 hover:text-black hover:border-black hover:bg-gray-500 cursor-pointer"
                to="/JC-Website/cart"
              >
                <>
                  <ShoppingCart size={32} color="#eeeeee" />
                  <Badge />
                </>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
