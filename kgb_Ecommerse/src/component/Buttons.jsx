export const AddToCartButton = ({ onClick, large }) => {
    return (
      <>
        <button
          onClick={onClick}
          className={` w-full text-lg py-2 border border-rose-200 px-2  bg-rose-50 transition-all delay-150 hover:bg-rose-300 hover:text-white max-sm:text-base max-sm:py-1 max-sm:px-2`}
        >
          Add to cart
        </button>
      </>
    );
  };


  export const RemoveFromCartButton = ({ onClick, large }) => {
    return (
      <>
        <button onClick={onClick} className={` w-full text-lg py-2 border border-rose-900 px-2 bg-rose-900 text-rose-50 transition-all delay-150 hover:bg-rose-200 hover:text-rose-900 max-sm:text-base max-sm:py-1 max-sm:px-2`}>
          Remove from Cart
        </button>
      </>
    );
  };