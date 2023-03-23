import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import { configureStore } from '@reduxjs/toolkit'
// import { editorSlice } from './components/editor/editorSlice'
import { Provider } from 'react-redux'
import { store } from './store'
import './index.css'

// const store = configureStore({
//   reducer: {
//     editor: editorSlice
//   }
// })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
