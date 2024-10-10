import React, { useEffect, useState } from 'react'
import { SecondaryButton } from './Buttons'
import { FaInfoCircle } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { totalPriceHandler } from '../redux/slices/cartSlice'

const CartDetails = () => {
    const [isInfo, setIsInfo] = useState(false)
    const { totalPrice, items } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(totalPriceHandler())
    }, [items])

    return (
        <div className="flex flex-col gap-4 items-end border-2 h-[28rem] border-white">
            <div className="w-96 max-sm:w-full max-sm:p-0">
                <p className="text-2xl font-extrabold px-4 py-8">
                    Cart details
                </p>
                <hr className='h-px bg-white border-0' />

                <div className="px-4 py-8">
                    <div className="flex items-center my-2">
                        <p className="flex-grow font-bold">
                            Price (2 Items):
                        </p>
                        <div className="text-md flex gap-2">
                            <p>₹ {totalPrice} </p>
                        </div>
                    </div>


                    <div className="flex items-center justify-between my-4 relative">
                        <div className='flex items-center gap-2'>
                            <p className="flex-grow font-bold">Delivery Charges </p>
                            <FaInfoCircle className='text-rose-900 cursor-pointer' onMouseEnter={() => setIsInfo(true)} onMouseLeave={() => setIsInfo(false)} />
                        </div>
                        <div className='flex gap-2'>
                            <p className={`${totalPrice >= 1000 && 'text-gray-600 line-through'}`}>₹70</p>
                            {totalPrice >= 1000 && <p className='text-rose-900 font-bold'>FREE</p>}
                        </div>
                        {
                            isInfo && <div className='absolute -bottom-[4.5rem] left-10 bg-rose-900 text-white p-4 rounded shadow shadow-black'>
                                Get Free Delivery over ₹1000
                            </div>
                        }
                    </div>



                    {totalPrice < 1000 && <p className='text-rose-900 mt-6'>You need to add items worth ₹{(1000 - totalPrice).toFixed(2)} more to get Free Delivery</p>}
                </div>

                <hr className='h-px bg-white border-0' />

                <div className="flex items-center px-4 py-6">
                    <p className="flex-grow font-bold">Total Amount:</p>
                    <p>₹{totalPrice < 1000 ? (totalPrice + 70).toFixed(2) : totalPrice}</p>
                </div>

                <div className="px-4" >
                    <SecondaryButton label="Proceed To Checkout" />
                </div>
            </div>
        </div>
    )
}

export default CartDetails