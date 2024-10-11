import React, { useEffect, useState } from 'react';
import { SecondaryButton } from './Buttons';
import { FaInfoCircle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { totalPriceHandler } from '../redux/slices/cartSlice';
import { convertingPriceHandler, currencySymbolHandler } from '../utils/helper';

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
    <div className="flex flex-col gap-4 items-end border-2 h-[28rem] border-white w-full lg:w-1/3 p-4">
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
            <p className={`${convertedTotalPrice >= convertedMinAmount &&
              "text-gray-600 line-through"
              }`}>{currencySymbol} {convertedDeliveryCharge}</p>
            {convertedTotalPrice >= convertedMinAmount && <p className="text-rose-900 font-bold">FREE</p>}
            {isInfo && (
              <div className="absolute -bottom-[4.5rem] left-10 bg-rose-900 text-white p-4 rounded shadow shadow-black">
                Get Free Delivery over {currencySymbol} {convertedMinAmount}
              </div>
            )}
          </div>

          {convertedTotalPrice < convertedMinAmount && (
            <p className="text-rose-900">Add {currencySymbol}
              {(convertedMinAmount - convertedTotalPrice).toFixed(2)} more for free delivery</p>
          )}
        </div>

        <hr className="h-px bg-white border-0 my-4" />

        <div className="flex justify-between py-6">
          <p className="font-bold">Total Amount:</p>
          <p> {currencySymbol}
            {convertedTotalPrice < convertedMinAmount
              ? (convertedTotalPrice + convertedDeliveryCharge).toFixed(2)
              : convertedTotalPrice}</p>
        </div>

        <SecondaryButton label="Proceed To Checkout" />
      </div>
    </div>
  );
};

export default CartDetails;
