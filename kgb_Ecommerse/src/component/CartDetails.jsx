import React, { useEffect, useState } from "react";
import { SecondaryButton } from "./Buttons";
import { FaInfoCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { totalPriceHandler } from "../redux/slices/cartSlice";
import { convertingPriceHandler, currencySymbolHandler } from "../utils/helper";
import { toast } from "react-toastify";

const CartDetails = () => {
  const [isInfo, setIsInfo] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

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

  const handleApplyCoupon = () => {
    if (coupon === "WINTEROFF") {
      setDiscount(0.5);
      toast.success("Coupon applied successfully!");
    } else {
      toast.error("Invalid coupon code");
    }
  };

  const totalAmount =
    convertedTotalPrice < convertedMinAmount
      ? convertedTotalPrice + convertedDeliveryCharge
      : convertedTotalPrice;

  const discountedAmount = totalAmount * (1 - discount);

  return (
    <div className="flex flex-grid gap-4 h-fit border-2 border-white w-full lg:w-1/3 p-4 text-rose-950">
      <div className="w-full">
        <p className="text-2xl font-extrabold">Cart details</p>
        <hr className="h-px bg-white border-0 my-4" />

        <div className="py-4">
          <div className="flex justify-between items-center my-2">
            <p className="font-bold">Price ({items.length} Items):</p>
            <p>
              {currencySymbol} {convertedTotalPrice}{" "}
            </p>
          </div>

          <div className="flex justify-between items-center my-4 relative">
            <div className="flex items-center gap-2">
              <p className="font-bold">Delivery Charges</p>
              <FaInfoCircle
                className="text-rose-900 cursor-pointer"
                onMouseEnter={() => setIsInfo(true)}
                onMouseLeave={() => setIsInfo(false)}
              />
            </div>
            <p
              className={`${
                convertedTotalPrice >= convertedMinAmount &&
                "text-gray-600 line-through"
              }`}
            >
              {currencySymbol} {convertedDeliveryCharge}
            </p>
            {convertedTotalPrice >= convertedMinAmount && (
              <p className="text-rose-900 font-bold">FREE</p>
            )}
            {isInfo && (
              <div className="absolute -bottom-[4.5rem] left-10 bg-rose-900 text-white p-4 rounded shadow shadow-black">
                Get Free Delivery over {currencySymbol} {convertedMinAmount}
              </div>
            )}
          </div>

          {convertedTotalPrice < convertedMinAmount && (
            <p className="text-rose-900">
              Add {currencySymbol}
              {(convertedMinAmount - convertedTotalPrice).toFixed(2)} more for
              free delivery
            </p>
          )}

          <div className="flex justify-between gap-5 items-center my-4">
            <input
              type="text"
              placeholder="Enter coupon code"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              className="w-full rounded-md py-2.5 px-4 border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff006c] transition duration-150 ease-in-out sm:text-sm max-w-[50%]"
            />
            <button
              onClick={handleApplyCoupon}
              className="w-full text-white hover:bg-rose-700 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm py-2.5 px-4 px max-w-fit bg-[#ff006c] transition duration-200"
            >
              Apply
            </button>
          </div>

          {discount > 0 && (
            <p className="text-green-600">
              Coupon applied! You save {currencySymbol}
              {(totalAmount * discount).toFixed(2)}
            </p>
          )}
        </div>

        <hr className="h-px bg-white border-0 my-4" />

        <div className="flex justify-between py-6">
          <p className="font-bold">Total Amount:</p>
          <p>
            {currencySymbol}
            {totalAmount.toFixed(2)}
          </p>
        </div>
        {discountedAmount != totalAmount && (
          <div className="flex justify-between pb-6">
            <p className="font-bold">Discount Amount:</p>
            <p className="text-red-600">
              {"- "}
              {currencySymbol}
              {discountedAmount.toFixed(2)}
            </p>
          </div>
        )}

        {discountedAmount != totalAmount && (
          <div className="flex justify-between py-6">
            <p className="font-bold">Discount Amount:</p>
            <p>
              {currencySymbol}
              {discountedAmount.toFixed(2)}
            </p>
          </div>
        )}

        <SecondaryButton label="Proceed To Checkout" />
      </div>
    </div>
  );
};

export default CartDetails;
