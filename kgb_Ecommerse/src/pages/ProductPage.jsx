import React, { useEffect, useState } from "react";
import ProductCard from "../component/Cards/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/productSlice";
import Pagination from "../component/Pagination";
import LoadingScreen from "../component/LoadingScreen";

const ProductPage = () => {
  const { products, isLoading, error } = useSelector((state) => state.product);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  function gotoPage(pageIndex) {
    setPage(pageIndex);
  }

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (error) {
    console.log(error);
  }
  
  return (
    <section className="py-16 px-10 bg-light-pink-1">
      <div className="flex flex-wrap gap-5 justify-center items-center">
        {products &&
          products.length > 0 &&
          products.slice(page * 5, (page * 5) + 5).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>

      <div className="flex justify-center pr-5">
        <Pagination
          pageCount={products.length / 5}
          gotoPage={gotoPage}
          page={page}
        />
      </div>
    </section>
  );
};

export default ProductPage;
