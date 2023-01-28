import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { AuthReducerState } from '../components/auth/interface'

const initialState: AuthReducerState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
})

// Action creators are generated for each case reducer function
export const {} = counterSlice.actions

export default counterSlice.reducer
