import { configureStore } from '@reduxjs/toolkit'
import  editorReducer from '../components/editor/editorSlice'


export const store = configureStore({
  reducer: {
    editor: editorReducer
  }
})