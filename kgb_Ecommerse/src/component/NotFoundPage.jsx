import React from "react";
import pageNotFound from "../assets/pageNotFound.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";

const NotFoundPage = () => {
  return (
    <div className="w-full min-h-screen flex items-center flex-col">
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
