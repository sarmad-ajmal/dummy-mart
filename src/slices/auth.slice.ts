import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { AuthReducerState } from '../components/auth/interface'
import { Me } from '../components/auth/login/interface'

const initialState: AuthReducerState = {
  me: null,
}

export const counterSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setMe: (state, action: PayloadAction<Me>) => {
      state.me = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setMe } = counterSlice.actions

export default counterSlice.reducer
