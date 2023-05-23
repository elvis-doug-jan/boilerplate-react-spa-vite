import { createSlice } from '@reduxjs/toolkit'

export type userData = {
  name: string
  email: string
}

export const slice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    email: ''
  },
  reducers: {
    setUserData: (state, { payload }) => {
      state.name = payload.name
      state.email = payload.email
      return state
    },
    clearUserData: (state) => {
      state.name = ''
      state.email = ''
      return state
    }
  }
})

export const { setUserData, clearUserData } = slice.actions
export const userSelector = (state: { user: userData }) => state.user
export default slice.reducer
