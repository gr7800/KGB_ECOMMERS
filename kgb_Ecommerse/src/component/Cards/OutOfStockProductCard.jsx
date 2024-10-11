import { Link } from "react-router-dom";

const OutOfStockProductCard = ({ product }) => {
    const { _id, url, name } = product;

    return (
        <>
            {_id && (
                <div className="flex flex-col justify-between bg-rose-300 w-64 relative font-serif p-4 rounded cursor-pointer max-sm:bg-[#fef4f2] transition shadow-2xl h-[30rem] max-h-auto ">
                    <Link to={`/products/${_id}`}>
                        <div className="opacity-30">

                            <div className="w-56 h-auto bg-white p-4 flex items-center justify-center">
                                <img
                                    src={url}
                                    alt={name}
                                    className="w-min-56 h-56 object-contain shadow-sm"
                                />
                            </div>

                            <div className="flex justify-between gap-4 py-3 ">
                                <div>
                                    <p className="text-rose-900 text-lg font-bold">
                                        {name.length > 4 && name.split(" ").slice(0, 5).join(" ")}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <p className="font-bold z-10 m-auto text-xl
                     absolute top-32 left-[30%] opacity-70">Out of Stock</p>
                </div>

            )}
        </>
    )
}

export default OutOfStockProductCard