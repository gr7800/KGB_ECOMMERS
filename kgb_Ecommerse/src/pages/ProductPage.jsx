import React from 'react'
import ProductCard from '../component/Cards/ProductCard'

const ProductPage = () => {
  return (
    <section className='py-16 bg-light-pink-1'>
    {/* {
      products.map((product) => <ProductCard key={product.id} product={product} />)
    } */}
   <div className='flex flex-wrap gap-32 justify-center items-center'>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
   </div>
  </section>
  )
}

export default ProductPage