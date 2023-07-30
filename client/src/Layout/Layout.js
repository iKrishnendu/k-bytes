import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <main>
      <NavBar />
      <div className="max-w-4xl mx-auto md:w-full p-3">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}
