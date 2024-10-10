import React from 'react';
import { SecondaryButton } from './Buttons';
import CartDetails from './CartDetails';
import CartCard from './Cards/CartCard';

const CartWithProducts = ({ items }) => {
  const reversedItems = [...items].reverse();

  return (
    <div className="w-full min-h-screen overflow-y-auto">
      <div className="flex justify-between items-center pb-8 max-sm:mb-8">
        <h1 className="font-extrabold text-2xl max-sm:text-3xl text-pink-900">My Cart</h1>
        <SecondaryButton path="/products" label="Continue Shopping" center />
      </div>

      <div className="flex flex-col lg:flex-row lg:gap-10 justify-between">
        <div className="flex flex-col gap-5 border-y-2 border-white w-full lg:w-2/3">
          {reversedItems.map((cartItem) => (
            <CartCard key={cartItem.id} cartItem={cartItem} />
          ))}
        </div>
        <CartDetails />
      </div>
    </div>
  );
};

export default CartWithProducts;
