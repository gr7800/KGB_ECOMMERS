import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const HomeWrapper = () => {
  return (
    <div className="relative pb-[300px] min-h-screen">
      <Header/>
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeWrapper;
