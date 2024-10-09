import React from 'react'
import Carousel from '../component/Carousel'
import CategoryProducts from '../component/CategoryProducts'

const HomePage = () => {
  return (
    <div className="bg-[url('./assets/glitter-background.png')] bg-cover bg-fixed">
      <Carousel/>

      <h2 className='text-center my-32 text-5xl font-bold'>Shop by Category</h2>
      <CategoryProducts heading={"Men's Clothing"}/>
      <CategoryProducts heading={"Jewelery"}/>
      <CategoryProducts heading={"Electronics"}/>
    </div>
  )
}

export default HomePage