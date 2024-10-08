import React from "react";
import pageNotFound from "../assets/pageNotFound.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <img
        src={pageNotFound}
        alt="404 not found!"
        className="w-full h-full object-contain"
      />
      <Footer />
    </div>
  );
};

export default NotFoundPage;
