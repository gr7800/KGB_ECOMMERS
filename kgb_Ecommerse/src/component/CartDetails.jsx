import { useEffect, useState } from "react";
import { SecondaryButton } from "./Buttons";
import { FaInfoCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { totalPriceHandler } from "../redux/slices/cartSlice";
import { convertingPriceHandler, currencySymbolHandler } from "../utils/helper";

const CartDetails = () => {
  const [isInfo, setIsInfo] = useState(false);
  const { totalPrice, items } = useSelector((state) => state.cart);
  const { exchangeRate, currentCurrency } = useSelector(
    (state) => state.currency
  );

  const currencySymbol = currencySymbolHandler(currentCurrency);
  const convertedTotalPrice = convertingPriceHandler(totalPrice, exchangeRate);
  const convertedDeliveryCharge = convertingPriceHandler(70, exchangeRate);
  const convertedMinAmount = convertingPriceHandler(1000, exchangeRate);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(totalPriceHandler());
  }, [items]);

  return (
    <div className="flex flex-col gap-4 items-end border-2 h-[28rem] border-white">
      <div className="w-96 max-sm:w-full max-sm:p-0">
        <p className="text-2xl font-extrabold px-4 py-8">Cart details</p>
        <hr className="h-px bg-white border-0" />

        <div className="px-4 py-8">
          <div className="flex items-center my-2">
            <p className="flex-grow font-bold">Price (2 Items):</p>
            <div className="text-md flex gap-2">
              <p>
                {currencySymbol} {convertedTotalPrice}{" "}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between my-4 relative">
            <div className="flex items-center gap-2">
              <p className="flex-grow font-bold">Delivery Charges </p>
              <FaInfoCircle
                className="text-rose-900 cursor-pointer"
                onMouseEnter={() => setIsInfo(true)}
                onMouseLeave={() => setIsInfo(false)}
              />
            </div>
            <div className="flex gap-2">
              <p
                className={`${
                  convertedTotalPrice >= convertedMinAmount &&
                  "text-gray-600 line-through"
                }`}
              >
                {currencySymbol} 70
              </p>
              {convertedTotalPrice >= convertedMinAmount && (
                <p className="text-rose-900 font-bold">FREE</p>
              )}
            </div>
            {isInfo && (
              <div className="absolute -bottom-[4.5rem] left-10 bg-rose-900 text-white p-4 rounded shadow shadow-black">
                Get Free Delivery over {currencySymbol} {convertedMinAmount}
              </div>
            )}
          </div>

          {totalPrice < 1000 && (
            <p className="text-rose-900 mt-6">
              You need to add items worth {currencySymbol}
              {(convertedMinAmount - convertedTotalPrice).toFixed(2)} more to
              get Free Delivery
            </p>
          )}
        </div>

        <hr className="h-px bg-white border-0" />

        <div className="flex items-center px-4 py-6">
          <p className="flex-grow font-bold">Total Amount:</p>
          <p>
            {currencySymbol}
            {convertedTotalPrice < convertedMinAmount
              ? (convertedTotalPrice + convertedDeliveryCharge).toFixed(2)
              : convertedTotalPrice}
          </p>
        </div>

        <div className="px-4">
          <SecondaryButton label="Proceed To Checkout" />
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
