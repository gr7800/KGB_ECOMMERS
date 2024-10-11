/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { AddToCartButton, RemoveFromCartButton } from "../Buttons";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../redux/slices/cartSlice";
import useCheckIsInCart from "../../hooks/useCheckIsInCart";
import {
  convertingPriceHandler,
  currencySymbolHandler,
} from "../../utils/helper";

const ProductCard = ({ product }) => {
  const { id, image, price, rating, title } = product;

  const { items } = useSelector((state) => state.cart);
  const { exchangeRate, currentCurrency } = useSelector(
    (state) => state.currency
  );

  const { isInCart } = useCheckIsInCart(id, items);

  const convertedPrice = convertingPriceHandler(price, exchangeRate);
  const currencySymbol = currencySymbolHandler(currentCurrency);

  const dispatch = useDispatch();

  const onAddButtonClickHandler = () => {
    dispatch(addItem(product));
  };

  const onDeleteButtonClickHandler = () => {
    dispatch(removeItem(product));
  };

  return (
    <>
      {id && (
        <div className="flex flex-col justify-between bg-rose-300 w-64 relative font-serif p-4 rounded cursor-pointer hover:bg-[#fef4f2] max-sm:bg-[#fef4f2] transition shadow-2xl h-[30rem] max-h-auto">
          <Link to={`/products/${id}`}>
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
              {rating &&
                Array(Math.round(rating?.rate))
                  .fill(0)
                  .map((star, index) => (
                    <FaStar key={index} className="text-rose-900" />
                  ))}
            </div>

            <div className="flex items-center justify-between mb-3">
              <p>
                {currencySymbol} {convertedPrice}
              </p>
            </div>
          </Link>

          {isInCart ? (
            <RemoveFromCartButton onClick={onDeleteButtonClickHandler} />
          ) : (
            <AddToCartButton onClick={onAddButtonClickHandler} />
          )}
        </div>
      )}
    </>
  );
};

export default ProductCard;
