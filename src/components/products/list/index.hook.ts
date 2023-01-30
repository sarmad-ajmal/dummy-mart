import { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../../../redux/redux.hooks'
import { APIService } from '../../../services/api'

import { getProducts } from '../../../slices/products.slice'

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
      dispatch(getProducts(res))
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
  return { products }
}
export default useProductsList
