import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import Header from "../common/Header";
import BG from "../../assets/bg-01.png";

const MainLayout = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-top bg-fixed relative bg-gradient-to-br from-blue-900 to-blue-700 dark:bg-black bg-[#ffffff00]"
        style={{ backgroundImage: `url(${BG})` }}
      >
        <div className="bg-[#fffffff5]">
            <Header />
          <div className="sticky top-0 z-50">
            <Navbar />
          </div>
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
