import React from 'react'
import ProductCard from './Cards/ProductCard'

const CategoryProducts = ({heading}) => {
  return (
    <div className='mx-32 py-20'>
        <h3 className='text-3xl text-rose-900 font-bold mb-6'>{heading}</h3>
        <div className="flex gap-6 justify-between" >
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
    </div>
  )
}

export default CategoryProducts