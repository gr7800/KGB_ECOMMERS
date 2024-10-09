import React from 'react'
import { Link } from 'react-router-dom'
import { AddToCartButton, RemoveFromCartButton } from '../Buttons'

const ProductCard = () => {

    return (
        <Link to="/products/1">
        <div
            className="flex flex-col bg-rose-300 w-64 h-auto relative font-serif p-4 rounded cursor-pointer hover:bg-[#fef4f2] max-sm:bg-[#fef4f2] transition"
        >

            <img
                src="https://avatars.githubusercontent.com/u/4058273?v=4"
                alt="pic"
                className="w-56 h-56 object-cover shadow-sm"
            />

            <div className="flex justify-between gap-4 pt-3 pb-2 ">
                <div>
                    <p className="text-sm">Product Name</p>
                </div>
            </div>

            <div className="flex gap-1 items-center justify-start pb-2">
                {/* {[...Array(rating)].map((star, index) => <i key={index} className="fa-solid fa-star text-xs text-rose-900"></i>)} */}

            </div>

            <div className="flex items-center justify-between mb-3">
                <p className="">₹ Product Price</p>
            </div>

            <AddToCartButton/>
            <RemoveFromCartButton/>
        </div>
        </Link>
    )
}

export default ProductCard