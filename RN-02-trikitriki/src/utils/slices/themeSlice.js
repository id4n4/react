import { createSlice } from '@reduxjs/toolkit'
import { COLOR1, COLOR2 } from '../constants'

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: 'light',
    switch: false,
    color: COLOR1
  },
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload
      if (action.payload === 'light') {
        state.switch = false
        state.color = COLOR1
      }
      if (action.payload === 'dark') {
        state.switch = true
        state.color = COLOR2
      }
    }
  }
})

export const { setTheme } = themeSlice.actions
export default themeSlice.reducer

export const selectStatusColor = (state) => state.theme.color
