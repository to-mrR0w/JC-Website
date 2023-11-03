import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";

function AppLayout() {
  return (
    <div>
      {/* <Navbar /> */}
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
