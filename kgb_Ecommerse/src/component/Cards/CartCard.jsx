import React from 'react'
import { RemoveFromCartButton } from '../Buttons'

const CartCard = ({ id, image, name, price, quantity }) => {
    return (
        <div className="flex justify-between h-auto px-2 py-8 gap-2 max-sm:flex-col">
            <div className="flex items-center gap-8 flex-1 max-sm:flex-col max-sm:items-start max-sm:gap-4">
                <img
                    src={image}
                    alt={name}
                    className="w-24 h-24 object-cover shadow-sm"
                />

                <div className="flex flex-col gap-4">
                    <p className="text-lg text-rose-900 font-bold max-sm:text-base">{name}</p>
                    <p>₹{price}</p>
                </div>
            </div>

            <div className="flex justify-between items-center gap-16 max-sm:flex-col max-sm:w-full max-sm:items-start max-sm:gap-2">
                <div className="flex items-center border border-zinc-900/20 px-4 py-2 font-julius">
                    <button className="text-xl hover:font-bold"
                    // onClick={() => dispatch(DECREMENT(id))}
                    >
                        -
                    </button>
                    <p className="bg-transparent text-black text-center w-16">
                        {quantity}
                    </p>
                    <button className="text-xl hover:font-bold"
                    // onClick={() => dispatch(INCREMENT(id))}
                    >
                        +
                    </button>
                </div>

                <div className="flex justify-between gap-16 w-full items-center max-sm:gap-4">
                    <RemoveFromCartButton />
                </div>
            </div>
        </div>
    )
}

export default CartCard