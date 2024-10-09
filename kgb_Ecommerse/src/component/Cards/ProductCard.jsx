import React from "react";
import { Link } from "react-router-dom";
import { AddToCartButton, RemoveFromCartButton } from "../Buttons";
import { FaStar } from "react-icons/fa";

const ProductCard = ({
  id,
  category,
  description,
  image,
  price,
  rating,
  title,
}) => {
  return (
    <>
      {id && (
        <Link to="/products/1">
          <div className="flex flex-col justify-between bg-rose-300 w-64 relative font-serif p-4 rounded cursor-pointer hover:bg-[#fef4f2] max-sm:bg-[#fef4f2] transition shadow-2xl h-[33rem] max-h-auto">
            <div className="w-56 h-auto bg-white p-4 flex items-center justify-center">
              <img
                src={image}
                alt={title}
                className="w-min-56 h-56 object-contain shadow-sm"
              />
            </div>

            <div className="flex justify-between gap-4 py-3 ">
              <div>
                <p className="text-rose-900 text-lg font-bold">
                  {title.split(" ").slice(0, 5).join(" ")}
                </p>
              </div>
            </div>

            <div className="flex gap-1 items-center justify-start pb-2">
              {[...Array(Math.round(rating.rate))].map((star, index) => (
                <FaStar key={index} className="text-rose-900" />
              ))}
            </div>

            <div className="flex items-center justify-between mb-3">
              <p className="">₹ {price}</p>
            </div>

            <AddToCartButton />
            <RemoveFromCartButton />
          </div>
        </Link>
      )}
    </>
  );
};

export default ProductCard;
