import React from 'react'
import { SecondaryButton } from './Buttons'

const EmptyCart = ({ label }) => {

    return (
        <div className="flex flex-col items-center h-full justify-center gap-16 max-sm:my-20">
            <h1 className="mx-auto font-extrabold text-3xl max-sm:text-2xl max-sm:text-center">
                Your {label} is Empty
            </h1>
            <SecondaryButton path="/products" label="Continue Shopping" center />
            <div>
                <img src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png" alt="" className='w-96 h-96' />
            </div>
        </div>
    )
}

export default EmptyCart