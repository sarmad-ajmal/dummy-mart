import React from 'react'

import useProductsList from './index.hook'
import ProductItem from './product_item'

const ProductsList = () => {
  const { products } = useProductsList()
  return (
    <div className='px-3 lg:px-12 md:px-6  bg-slate-100 h-screen'>
      <div className='flex flex-wrap justify-center'>
        {products.map(cProduct => (
          <ProductItem product={cProduct} />
        ))}
      </div>
    </div>
  )
}

export default ProductsList
