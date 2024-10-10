import React from "react";
import ProductCard from "./Cards/ProductCard";
import useCategoriesWiseData from "../hooks/useCategoriesWiseData ";
import LoadingScreen from "./LoadingScreen";

const CategoryProducts = ({ heading, categoryName }) => {
  const { items } = useCategoriesWiseData(categoryName);

  if (items.length == 0) {
    return <LoadingScreen />;
  }

  return (
    <div>
      <h3 className="text-3xl text-rose-900 font-bold mb-6">{heading}</h3>
      <div className="flex gap-5 items-center justify-between overflow-x-auto no-scrollbar">
        {items &&
          items.length > 0 &&
          items.map((item) => <ProductCard key={item.id} {...item} />)}
      </div>
    </div>
  );
};

export default CategoryProducts;
