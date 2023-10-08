import React, { useMemo } from 'react'

//import material ui
import { CssBaseline, ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'

//import libraries foreign
import { useSelector } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

//import own components
import { themeSettings } from 'theme'
import DashboardAdminRoutes from './routes/index.jsx'

import './App.css'

const App = () => {
  const mode = useSelector((state) => state.global.mode)
  const theme = useMemo(() => createTheme(themeSettings(mode), [mode]))

  return (
    <div>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <DashboardAdminRoutes />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
