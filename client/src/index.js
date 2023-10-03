import React from 'react'

//import libraries foreign
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import IntlProvider from './intl/IntlProvider'

//import own components
import App from './App'

//import fetch data
import globalReducer from 'state'
import { api } from 'state/api'

const store = configureStore({
  reducer: {
    global: globalReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefault) => getDefault().concat(api.middleware),
})
setupListeners(store.dispatch)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <IntlProvider>
        <App />
      </IntlProvider>
    </Provider>
  </React.StrictMode>
)
