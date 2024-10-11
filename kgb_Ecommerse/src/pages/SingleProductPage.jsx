import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaShareAlt, FaStar } from "react-icons/fa";
import LoadingScreen from "../component/LoadingScreen";
import { AddToCartButton, RemoveFromCartButton } from "../component/Buttons";
import { addItem, removeItem } from "../redux/slices/cartSlice";
import useCheckIsInCart from "../hooks/useCheckIsInCart";
import { RWebShare } from "react-web-share";
import { convertingPriceHandler, currencySymbolHandler } from "../utils/helper";
import { useEffect } from "react";
import { fetchProductById } from "../redux/slices/productSlice";

const SingleProductPage = () => {
  const { productId } = useParams();
  const { singleProduct, isLoading } = useSelector((state) => state.product);
  const { items } = useSelector((state) => state.cart)
  const { exchangeRate, currentCurrency } = useSelector(
    (state) => state.currency
  );

  const { isInCart } = useCheckIsInCart(productId, items);

  const { _id, name, brand, category, url, description, price, ratings, inStock, inventory, totalRating } = singleProduct || {}

  const convertedPrice = convertingPriceHandler(price, exchangeRate);
  const currencySymbol = currencySymbolHandler(currentCurrency);


  const dispatch = useDispatch();

  const onAddButtonClickHandler = () => {
    dispatch(addItem(singleProduct))
  }

  const onDeleteButtonClickHandler = () => {
    dispatch(removeItem(singleProduct))
  }

  useEffect(() => {
    dispatch(fetchProductById(productId))
  }, [])


  return (
    <>
      {
        isLoading && _id !== productId ? <LoadingScreen /> : (
          <div className="py-8 px-36 bg-light-rose w-full max-sm:px-4 max-lg:px-16 max-lg:py-8">
            <div className="flex justify-evenly gap-1 max-sm:flex-col max-sm:items-center max-sm:gap-8 max-lg:gap-10">
              <div className="w-full max-sm:w-auto">
                <img
                  src={url}
                  alt={name}
                  className="border-2 bg-white p-8 border-white h-[30rem] w-[30rem] object-contain max-sm:w-64 max-sm:h-64 max-lg:h-[28rem] max-lg:w-[28rem]"
                />
              </div>

              <div className="w-3/4 flex flex-col gap-6 font-sans">
                <div>
                  <p className="text-sm font-extralight capitalize">{category}</p>
                  <h1 className="text-3xl font-julius font-extrabold">{name}</h1>
                  <div className="flex gap-1 items-center justify-start pt-3">
                    {totalRating && Array(Math.round(totalRating)).fill(0).map((star, index) => (
                      <FaStar key={index} className="text-rose-900" />
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-xl font-julius font-extrabold flex items-center gap-2">
                    <p>{currencySymbol} {convertedPrice}</p>
                  </div>
                  <p className="text-sm font-extralight">Tax Included</p>
                </div>

                {
                  inStock && (
                    <div className="flex flex-col gap-2">
                      <div>
                        {
                          isInCart ? (
                            <RemoveFromCartButton
                              large
                              onClick={onDeleteButtonClickHandler}
                            />
                          ) : (
                            <AddToCartButton
                              large
                              onClick={onAddButtonClickHandler}
                            />
                          )}

                      </div>
                    </div>
                  )
                }

                <div className="mt-2">
                  <p>{description}</p>
                </div>

                <div>
                  <RWebShare
                    data={{
                      text: "Shop Now on KGB",
                      url: "http://booklet-c1aa8.web.app/products/" + _id,
                      title: name
                    }}
                  >
                    <div className="flex gap-3 items-center cursor-pointer">
                      <FaShareAlt className="text-rose-900" /> Share
                    </div>
                  </RWebShare>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}

export default SingleProductPage