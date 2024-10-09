import React, { useEffect } from "react";
import Carousel from "../component/Carousel";
import CategoryProducts from "../component/CategoryProducts";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllCategories,
  fetchProducts,
} from "../redux/slices/productSlice";
import { crouseLImages } from "../utils/constant";


const HomePage = () => {
  const { category } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCategories());
  }, []);

  

  return (
    <div className="bg-[url('./assets/glitter-background.png')] bg-cover bg-fixed px-10 py-10 flex flex-col gap-5">
      <Carousel data = {crouseLImages}/>
      <h2 className="text-center text-5xl font-bold text-rose-900">
        Shop by Category
      </h2>
      {category &&
        category.length > 0 &&
        category.map((categ, index) => (
          <CategoryProducts
            key={categ + index}
            heading={categ.toUpperCase()}
            categoryName={categ}
          />
        ))}
    </div>
  );
};

export default HomePage;
