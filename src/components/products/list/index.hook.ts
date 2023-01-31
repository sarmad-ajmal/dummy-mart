import { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../../../redux/redux.hooks'
import { APIService } from '../../../services/api'

import { getProducts } from '../../../slices/products.slice'
import { ProductsReducerState } from '../interface'

const useProductsList = () => {
  const dispatch = useAppDispatch()
  const { meta, products } = useAppSelector(state => state.products)
  const { total } = meta || {}

  const fetchProducts = async () => {
    const api = new APIService()
    const { res, error } = await api.get('/products', {
      limit: 30,
      skip: products.length,
    })
    if (!error) {
      const { products = [], total = 0 } = res
      const payload: ProductsReducerState = {
        products,
        meta: {
          total,
        },
      }

      dispatch(getProducts(payload))
    }
  }
  const onNext = () => {
    if (products.length < total) {
      fetchProducts()
    }
  }
  useEffect(() => {
    if (!products.length) {
      fetchProducts()
    }
  }, [])
  return { products, onNext }
}
export default useProductsList
