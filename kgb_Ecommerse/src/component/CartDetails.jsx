import React, { useEffect, useState } from 'react';
import { SecondaryButton } from './Buttons';
import { FaInfoCircle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { totalPriceHandler } from '../redux/slices/cartSlice';

const CartDetails = () => {
  const [isInfo, setIsInfo] = useState(false);
  const { totalPrice, items } = useSelector((state) => state.cart);
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
            <p>₹ {totalPrice}</p>
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
            <p className={`${totalPrice >= 1000 ? 'line-through text-gray-600' : ''}`}>₹70</p>
            {totalPrice >= 1000 && <p className="text-rose-900 font-bold">FREE</p>}
            {isInfo && (
              <div className="absolute -bottom-[4.5rem] left-10 bg-rose-900 text-white p-4 rounded shadow shadow-black">
                Get Free Delivery over ₹1000
              </div>
            )}
          </div>

          {totalPrice < 1000 && (
            <p className="text-rose-900">Add ₹{(1000 - totalPrice).toFixed(2)} more for free delivery</p>
          )}
        </div>

        <hr className="h-px bg-white border-0 my-4" />

        <div className="flex justify-between py-6">
          <p className="font-bold">Total Amount:</p>
          <p>₹{totalPrice < 1000 ? (totalPrice + 70).toFixed(2) : totalPrice}</p>
        </div>

        <SecondaryButton label="Proceed To Checkout" />
      </div>
    </div>
  );
};

export default CartDetails;
