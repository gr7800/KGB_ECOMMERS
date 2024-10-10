import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProductById } from "../redux/slices/productSlice";
import { FaStar } from "react-icons/fa";
import LoadingScreen from "../component/LoadingScreen";
import { AddToCartButton, RemoveFromCartButton } from "../component/Buttons";
import { addItem, removeItem } from "../redux/slices/cartSlice";
import useCheckIsInCart from "../hooks/useCheckIsInCart";

const SingleProductPage = () => {
  const { productId } = useParams();
  const { singleProduct, isLoading } = useSelector((state) => state.product);
  const { items } = useSelector((state) => state.cart)
  const { id, title, category, image, description, price, rating } = singleProduct || {}
  const { isInCart } = useCheckIsInCart(productId,items)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductById(productId))
  }, [])


  // console.log(items);
  // console.log(isInCart)

  const onAddButtonClickHandler = () => {
    dispatch(addItem(singleProduct))
    console.log("product_add");
  }

  const onDeleteButtonClickHandler = () => {
    dispatch(removeItem(singleProduct))
  }

  return (
    <>
      {
        isLoading && id !== productId ? <LoadingScreen /> : (
          <div className="py-8 px-36 bg-light-rose w-full max-sm:px-4 max-lg:px-16 max-lg:py-8">
            <div className="flex justify-evenly gap-1 max-sm:flex-col max-sm:items-center max-sm:gap-8 max-lg:gap-10">
              <div className="w-full max-sm:w-auto">
                <img
                  src={image}
                  alt={title}
                  className="border-2 bg-white p-8 border-white h-[30rem] w-[30rem] object-contain max-sm:w-64 max-sm:h-64 max-lg:h-[28rem] max-lg:w-[28rem]"
                />
              </div>

              <div className="w-3/4 flex flex-col gap-6 font-sans">
                <div>
                  <p className="text-sm font-extralight capitalize">{category}</p>
                  <h1 className="text-3xl font-julius font-extrabold">{title}</h1>
                  <div className="flex gap-1 items-center justify-start pt-3">
                    {rating && Array(Math.round(rating?.rate)).fill(0).map((star, index) => (
                      <FaStar key={index} className="text-rose-900" />
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-xl font-julius font-extrabold flex items-center gap-2">
                    <p>₹ {price}</p>
                  </div>
                  <p className="text-sm font-extralight">Tax Included</p>
                </div>

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

                <div className="mt-2">
                  <p>{description}</p>
                </div>

                <div>
                  {/* <RWebShare
              data={{
                text: "Shop Now on Booklet",
                url: "http://booklet-c1aa8.web.app/products/" + id,
                title: name,
              }}
            >
              <div className="flex gap-3 items-center cursor-pointer">
                <i className="fa-solid fa-share-nodes text-rose-900"></i> Share
              </div>
            </RWebShare> */}
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