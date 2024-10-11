import React from 'react';
import { RemoveFromCartButton } from '../Buttons';
import { useDispatch } from 'react-redux';
import { removeItem, updateItemQuantity } from '../../redux/slices/cartSlice';

const CartCard = ({ cartItem }) => {
  const { id, title, image, price, quantity } = cartItem;
  const dispatch = useDispatch();

  const onDeleteButtonClickHandler = () => {
    dispatch(removeItem(cartItem));
  };

  const incrementHandler = () => {
    dispatch(updateItemQuantity({ id, quantity: -1 }));
  };
  
  const decrementHandler = () => {
    dispatch(updateItemQuantity({ id, quantity: +1 }));
  };

  return (
    <div className="flex justify-between h-auto px-2 py-8 gap-4 flex-wrap max-sm:flex-col">
      <div className="flex items-center gap-8 flex-1 max-sm:flex-col max-sm:items-start max-sm:gap-4">
        <img
          src={image}
          alt={title}
          className="w-24 h-24 object-contain bg-white p-2 shadow-sm max-sm:w-20 max-sm:h-20"
        />

        <div className="flex flex-col gap-4">
          <p className="text-sm text-rose-900 font-bold max-sm:text-xs">
            {`${title.split(' ').slice(0, 5).join(' ')}${title.split(' ').length > 5 ? '...' : ''}`}
          </p>
          <p>₹{price}</p>
        </div>
      </div>

      <div className="flex items-center gap-6 max-sm:flex-col max-sm:w-full max-sm:items-start">
        <div className="flex items-center border border-zinc-900/20 px-4 py-2">
          <button
            className="text-xl hover:font-bold disabled:text-gray-400"
            onClick={incrementHandler}
            disabled={quantity <= 1}
          >
            -
          </button>
          <p className="text-center w-12">{quantity}</p>
          <button className="text-xl hover:font-bold" onClick={decrementHandler}>
            +
          </button>
        </div>

        <RemoveFromCartButton onClick={onDeleteButtonClickHandler} />
      </div>
    </div>
  );
};

export default CartCard;
