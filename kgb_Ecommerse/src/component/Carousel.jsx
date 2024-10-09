import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Carousel = ({
  images = [],
  autoSlide = false,
  autoSlideInterval = 10000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [currentIndex, autoSlide, autoSlideInterval]);

  if (images.length == 0) {
    return "...Loading";
  }

  return (
    <div className="relative w-full h-[70vh]">
      <div className="absolute translate-x-0 inset-0 transition-transform ease-out delay-500  h-[70vh] w-full flex justify-center items-center overflow-hidden border-2 border-gray-300 shadow-lg shadow-black">
        <img
          src={images[currentIndex]?.urls.full}
          alt="Carousel Image"
          className={`w-full h-[70vh] object-cover rounded-lg`}
        />
      </div>
      <div
        className="absolute top-1/2 left-6 z-10 transform -translate-y-1/2 cursor-pointer text-white bg-gray-800 opacity-[60%] p-2 rounded-full flex justify-center"
        onClick={prevSlide}
      >
        <FaArrowLeft size={20} />
      </div>

      <div
        className="absolute top-1/2 right-6 z-10 transform -translate-y-1/2 cursor-pointer text-white bg-gray-800 opacity-[60%] p-2 rounded-full flex justify-center"
        onClick={nextSlide}
      >
        <FaArrowRight size={20} />
      </div>

      <div className="absolute bottom-4 w-full flex justify-center space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`cursor-pointer w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
