import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const HomeWrapper = () => {
  return (
    <div className="relative pb-[300px] min-h-screen">
      <Navbar/>
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeWrapper;
