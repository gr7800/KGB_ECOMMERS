
import React, { useState } from 'react'
import Pagination from '../component/Pagination';
import ProductCard from '../component/Cards/ProductCard'


const ProductPage = () => {
    const [page, setPage] = useState(1);
  function gotoPage(pageIndex) {
    setPage(pageIndex);
  }
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

    <div>
      <div className='flex justify-end'>
      <Pagination pageCount ={10} gotoPage={gotoPage} page={page} /> 
      </div>
    </div>

  </section>

  )
}


export default ProductPage