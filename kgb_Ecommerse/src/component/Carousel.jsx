import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Carousel = ({
  data = [],
  autoSlide = false,
  autoSlideInterval = 10000,
}) => {
  const totalSlides = data.length;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (autoSlide) {
      const slideInterval = setInterval(nextSlide, autoSlideInterval);
      return () => clearInterval(slideInterval);
    }
  }, [autoSlide, autoSlideInterval]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  if (totalSlides === 0) {
    return "...Loading";
  }

  return (
    <div className="relative w-full h-[75vh] overflow-hidden rounded-xl shadow-md shadow-pink-900 ">
      <div className="relative h-full w-full">
        {data.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-500 ease-in-out rounded-xl ${
              index === currentIndex
                ? "translate-x-0 opacity-100"
                : index < currentIndex
                ? "-translate-x-full opacity-0"
                : "translate-x-full opacity-0"
            }`}
          >
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-fit"
            />
          </div>
        ))}
      </div>

      <div
        className="absolute top-1/2 left-6 z-10 transform -translate-y-1/2 cursor-pointer text-white bg-pink-600 hover:bg-pink-500 p-2 rounded-full shadow-lg transition duration-300"
        onClick={prevSlide}
      >
        <FaArrowLeft size={20} />
      </div>

      <div
        className="absolute top-1/2 right-6 z-10 transform -translate-y-1/2 cursor-pointer text-white bg-pink-600 hover:bg-pink-500 p-2 rounded-full shadow-lg transition duration-300"
        onClick={nextSlide}
      >
        <FaArrowRight size={20} />
      </div>

      <div className="absolute bottom-4 w-full flex justify-center space-x-2">
        {data.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`cursor-pointer w-3 h-3 rounded-full transition duration-300 ${
              index === currentIndex ? "bg-pink-600" : "bg-pink-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
