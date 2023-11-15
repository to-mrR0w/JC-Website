import { Outlet } from "react-router-dom";
import Header from "../components/Header";
// import Navbar from "../components/Navbar";

function AppLayout() {
  return (
    <div className="h-full overflow-hidden">
      <Header />
      <main className="relative min-h-full overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
