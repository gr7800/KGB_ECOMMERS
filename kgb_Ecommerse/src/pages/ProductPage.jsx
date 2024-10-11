import React, { useEffect, useState } from "react";
import ProductCard from "../component/Cards/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/productSlice";
import Pagination from "../component/Pagination";
import LoadingScreen from "../component/LoadingScreen";
import OutOfStockProductCard from "../component/Cards/OutOfStockProductCard";
import { useLocation, useNavigate } from "react-router-dom";

const ProductPage = () => {
  const { products, isLoading, error } = useSelector((state) => state.product);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const page = parseInt(queryParams.get("page")) || 1;
  const [pageIndex, setPageIndex] = useState(page - 1 || 0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  function gotoPage(currePageIndex) {
    setPageIndex(currePageIndex);
    queryParams.set("page", currePageIndex+1);
    navigate(`${location.pathname}?${queryParams.toString()}`);
  }

  useEffect(() => {
    setPageIndex(page - 1);
  }, [page]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (error) {
    console.log(error);
  }

  return (
    <section className="py-16 px-10 bg-light-pink-1">
      <div>
        <div>filter</div>
        <div className="flex flex-wrap gap-5 justify-center items-center">
          {products &&
            products.length > 0 &&
            products.slice(pageIndex * 10, (pageIndex * 10) + 10).map((product) => (
              product.inStock ?
                <ProductCard key={product._id} product={product} />
                :
                <OutOfStockProductCard key={product._id} product={product} />
            ))}
        </div>

        <div className="flex justify-center pr-5">
          <Pagination
            pageCount={products.length / 10}
            gotoPage={gotoPage}
            pageIndex={pageIndex}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
