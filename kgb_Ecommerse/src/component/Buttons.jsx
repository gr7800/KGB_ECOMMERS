import { Link } from "react-router-dom";

export const PrimaryButton = ({ path, label, center }) => {
  return (
    <Link to={path} >
      <button
        className={`${center && "mx-auto"
          } flex items-center gap-3 px-4 py-2 text-lg  border-2 border-black cursor-pointer bg-rose-100 transition ease-in-out delay-150 hover:bg-white bg-transparent`}
      >
        {label} <i className="fa-solid fa-arrow-right"></i>
      </button>
    </Link>
  );
};

export const SecondaryButton = ({ path, label, center, onClick, large, border, disable }) => {
  return (
    <Link to={path}>
      <button
        onClick={onClick}
        className={`${center && "mx-auto"
          } ${large && "w-full"} ${border && "border border-black"} ${disable && "cursor-not-allowed opacity-50 border-none"} px-4 py-2 text-lg cursor-pointer bg-rose-300  text-white font-bold transition ease-in-out delay-150 hover:bg-white hover:text-rose-500 max-sm:text-base max-sm:py-1 max-sm:px-2`}
        disabled={disable}
      >
        {label}
      </button>
    </Link>
  )
}

export const AddToCartButton = ({ onClick, large }) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`${large && "text-xl w-full"} w-full text-sm py-2 border border-rose-200 px-2  bg-rose-50 transition-all delay-150 hover:bg-rose-300 hover:text-white max-sm:text-base max-sm:py-1 max-sm:px-2`}
      >
        Add to cart
      </button>
    </>
  );
};


export const RemoveFromCartButton = ({ onClick, large }) => {
  return (
    <>
      <button onClick={onClick} className={`${large && "text-xl w-full"} w-full text-sm py-2 border border-rose-900 px-2 bg-rose-900 text-rose-50 transition-all delay-150 hover:bg-rose-200 hover:text-rose-900 max-sm:text-base max-sm:py-1 max-sm:px-2`}>
        Remove from Cart
      </button>
    </>
  );
};