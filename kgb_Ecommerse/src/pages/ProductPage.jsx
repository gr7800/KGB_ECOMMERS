import React, { useEffect } from 'react'
import ProductCard from '../component/Cards/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/slices/productSlice'

const ProductPage = () => {
  const {products} = useSelector((state) => state.product)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch( fetchProducts())
  }, [])

  console.log(products);
  
  
  return (
    <section className='py-16 px-10 bg-light-pink-1'>
   <div className='flex flex-wrap gap-32 justify-center items-center'>
    {
     products && products.length > 0 && products.map((product) => <ProductCard key={product.id} {...product} />)
    }
    
   </div>
  </section>
  )
}

export default ProductPage