import React from "react";

const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-[#fae9e6]">
      <div className="loader w-[100px] h-[100px] border-[5px] border-[#ff006c] border-b-0 border-r-0 rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingScreen;
