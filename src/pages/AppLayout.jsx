import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";
import { FirebaseContext } from "../context/FirebaseContext";

function AppLayout() {
  return (
    <FirebaseContext>
      <div>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </FirebaseContext>
  );
}

export default AppLayout;
