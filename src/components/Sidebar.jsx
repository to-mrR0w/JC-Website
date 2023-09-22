import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="h-full fixed inline-block m-0 mt-16 p-6 bg-blue-950">
      {/* <Outlet /> */}
      <ul className="w-full">
        <li className="bg-gray-500 w-full">
          <Link to={"/JC-Website/about-us"}>Home</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
