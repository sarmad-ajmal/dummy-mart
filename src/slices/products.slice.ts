import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ProductsReducerState } from '../components/products/interface'

const initialState: ProductsReducerState = {
  products: [],
  meta: { total: 0 },
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getProducts: (state, action: PayloadAction<ProductsReducerState>) => {
      state.products = !state.products.length
        ? action.payload.products
        : [...state.products, ...action.payload.products]
      state.meta.total = action.payload.meta?.total
    },
  },
})

// Action creators are generated for each case reducer function
export const { getProducts } = productsSlice.actions

export default productsSlice.reducer
