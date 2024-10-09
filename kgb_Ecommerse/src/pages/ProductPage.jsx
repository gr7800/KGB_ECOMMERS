import React, { useState } from 'react'
import Pagination from '../component/Pagination';

const ProductPage = () => {
    const [page, setPage] = useState(1);
  function gotoPage(pageIndex) {
    setPage(pageIndex);
  }
  return (
    <div>
      <div className='flex justify-end'>
      <Pagination pageCount ={10} gotoPage={gotoPage} page={page} /> 
      </div>
    </div>
  )
}


export default ProductPage