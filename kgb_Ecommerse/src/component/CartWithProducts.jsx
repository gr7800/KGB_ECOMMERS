import React from 'react'
import { SecondaryButton } from './Buttons'
import CartDetails from './CartDetails'
import CartCard from './Cards/CartCard'

const CartWithProducts = () => {
    return (
        <div>
            <div className="flex justify-between items-center pb-8 max-sm:mb-8">
                <h1 className="font-playfairDisplay font-extrabold text-2xl max-sm:text-3xl">
                    My Cart
                </h1>
                <SecondaryButton path="/products" label="Continue Shopping" center />
            </div>

            <div className='flex gap-10 justify-between'>
                <div className="flex flex-col gap-5 h-fit border-y-2 border-white w-[70%]">
                    {/* {cartList.map((cartItem) => ( <CartCard cartItem={cartItem} key={cartItem.id} /> ))} */}

                    <CartCard id="1" name="shoes" image="https://t3.ftcdn.net/jpg/06/12/00/18/360_F_612001823_TkzT0xmIgagoDCyQ0yuJYEGu8j6VNVYT.jpg" price="700" quantity="1" />
                    <CartCard id="1" name="shoes" image="https://t3.ftcdn.net/jpg/06/12/00/18/360_F_612001823_TkzT0xmIgagoDCyQ0yuJYEGu8j6VNVYT.jpg" price="700" quantity="1" />
                    <CartCard id="1" name="shoes" image="https://t3.ftcdn.net/jpg/06/12/00/18/360_F_612001823_TkzT0xmIgagoDCyQ0yuJYEGu8j6VNVYT.jpg" price="700" quantity="1" />
                </div>
                <CartDetails />
            </div>
        </div>
    )
}

export default CartWithProducts