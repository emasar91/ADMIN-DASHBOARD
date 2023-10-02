import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  mode: 'dark',
  userId: '63701cc1f03239b7f700000e',
  languageSelected: 'ES',
}

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === 'dark' ? 'light' : 'dark'
    },
    setLanguage: (state, payload) => {
      state.languageSelected = payload.payload
    },
  },
})

export const { setMode, setLanguage } = globalSlice.actions

export default globalSlice.reducer
