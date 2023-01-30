import { Product } from '../interface'

const ProductItem = ({ product }: { product: Product }) => {
  const { thumbnail, title, category, price } = product
  return (
    <div className='flex justify-center m-3 w-full md:w-1/4 lg:w-1/4 relative'>
      <div className='rounded-lg shadow-lg bg-white w-full'>
        <a href='#!'>
          <img
            className='rounded-t-sm object-contain w-full h-40'
            src={thumbnail}
            alt=''
          />
        </a>
        <div className='p-6'>
          <h5 className='text-gray-900 text-xl font-medium mb-2 uppercase '>
            {title}
          </h5>
          <div className='flex justify-between align-middle'>
            <p className='text-gray-700 text-lg mb-4'>Price:&nbsp;${price}</p>
            <button
              type='button'
              className=' inline-block px-2 py-0 bg-blue-600 text-white font-medium text-xs leading-none uppercase rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <button
        className='absolute right-2  inline-block my-2 px-2 py-0.5 bg-gray-200 text-slate-600 opacity-70 font-medium text-xs 
                                    leading-tight uppercase rounded-full shadow-md hover:bg-gray-300 hover:shadow-lg 
                                    focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 
                                    active:shadow-lg transition duration-150 ease-in-out'
      >
        {category}
      </button>
    </div>
  )
}
export default ProductItem
