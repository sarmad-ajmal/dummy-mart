import { Button, Pill } from '../../../common/components'
import { Product } from '../interface'

const ProductItem = ({ product }: { product: Product }) => {
  const { thumbnail, title, category, price } = product
  return (
    <div className='flex justify-center m-3 w-full md:w-1/4 lg:w-1/4 relative'>
      <div className='rounded-lg shadow-lg bg-white w-full'>
        <img
          className='rounded-t-sm object-contain w-full h-40'
          src={thumbnail}
          alt=''
        />
        <div className='p-6'>
          <h5 className='text-gray-900 text-xl font-medium mb-2 uppercase '>
            {title}
          </h5>
          <div className='flex justify-between align-middle'>
            <p className='text-gray-700 text-lg mb-4'>Price:&nbsp;${price}</p>
            <Button className='px-2 py-0' type='button'>
              Add to cart
            </Button>
          </div>
        </div>
      </div>
      <Pill className='absolute right-2 '>{category}</Pill>
    </div>
  )
}
export default ProductItem
