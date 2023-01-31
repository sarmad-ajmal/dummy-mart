import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

import useProductsList from './index.hook'
import ProductItem from './product_item'

const ProductsList = () => {
  const { products, onNext } = useProductsList()
  return (
    <InfiniteScroll
      next={onNext}
      hasMore={true}
      dataLength={products.length}
      loader={<h4>Loading...</h4>}
      scrollableTarget='products-list'
    >
      <div
        className='px-3 lg:px-12 md:px-6  bg-slate-100 h-screen overflow-auto'
        id='products-list'
      >
        <div className='flex flex-wrap justify-center overflow-auto'>
          {products.map(cProduct => (
            <ProductItem
              product={cProduct}
              key={`product-item-${cProduct.id}`}
            />
          ))}
        </div>
      </div>
    </InfiniteScroll>
  )
}

export default ProductsList
