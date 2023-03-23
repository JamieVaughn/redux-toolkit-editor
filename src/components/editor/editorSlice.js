import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchText = createAsyncThunk(
  'editor/fetchText', 
  async (id = 1) => {
    console.log(id ?? 1)
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/'+(id ?? 1))
      const data = await response.json()
      console.log(data)
      return data
    } catch (err) {
      console.error(err)
    }
  }
)
const random = Math.random()*10
export const editorSlice = createSlice({
  name: 'editor',
  initialState: {
    text: 'Placeholder text..',
    size: 1,
    bold: false,
    italics: false,
    underline: false,
    fontFamily: 'sans-serif',
    loading: false,
    error: null
  },
  reducers: {
    typeIn: (state, action) => {
      state.text = action.payload
    },
    bold: (state) => {
      state.bold = !state.bold
    },
    italics: (state) => {
      console.log(state.italics)
      state.italics = !state.italics
    },
    underline: (state) => {
      state.underline = !state.underline
    },
    fontFamily: (state, action) => {
      state.fontFamily = action.payload
    },
    incrementSize: (state) => {
      state.size += state.size < 5 ? 0.5 : 0
    },
    decrementSize: (state) => {
      state.size -= state.size > 0.5 ? 0.5 : 0
    },
  },
  extraReducers: {
    [fetchText.pending]: (state, action) => {
      state.loading = true
      state.error = false
    },
    [fetchText.fulfilled]: (state, action) => {
      state.text = action.payload.body
      state.loading = false
    },
    [fetchText.rejected]: (state, action) => {
      state.loading = false
      state.error = action.error.message
    }
  }
})

export const {
  typeIn,
  bold,
  italics,
  underline,
  fontFamily,
  incrementSize,
  decrementSize,
} = editorSlice.actions

export const selectText = state => state.editor.text
export const selectBold = state => state.editor.bold
export const selectFontSize = state => state.editor.size
export const selectItalics = state => state.editor.italics
export const selectUnderline = state => state.editor.underline
export const selectFontFamily = state => state.editor.fontFamily

export default editorSlice.reducer