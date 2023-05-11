import { configureStore } from '@reduxjs/toolkit'
import themeSlice from '../src/utils/slices/themeSlice'

export default configureStore({
  reducer: themeSlice
})
