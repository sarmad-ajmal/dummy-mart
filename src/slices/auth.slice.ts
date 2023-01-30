import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { AuthReducerState, ILoggedinUser } from '../components/auth/interface'

const initialState: AuthReducerState = {
  me: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    getLoggedinUser: (state, action: PayloadAction<ILoggedinUser>) => {
      state.me = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { getLoggedinUser } = authSlice.actions

export default authSlice.reducer
