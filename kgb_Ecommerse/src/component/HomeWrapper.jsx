import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const HomeWrapper = () => {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default HomeWrapper;
("");
