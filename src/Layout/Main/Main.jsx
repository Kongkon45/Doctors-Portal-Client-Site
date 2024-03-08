import React from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Whatsapp from "../../Components/Whatsapp/Whatsapp";
import ScrollToTop from "react-scroll-to-top";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <ScrollToTop smooth color="#6f00ff" />
      {/* <Whatsapp /> */}
      <Footer />
    </div>
  );
};

export default Main
