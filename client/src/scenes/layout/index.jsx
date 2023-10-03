import React, { useState } from 'react'

//import material ui
import { Box, useMediaQuery, useTheme } from '@mui/material'

//import libraries foreign
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

//import own components
import Navbar from 'components/Navbar'
import SideBar from 'components/SideBar'

//import fetch data
import { useGetUserQuery } from 'state/api'

function Layout() {
  const theme = useTheme()
  const isNonMobile = useMediaQuery('(min-width:600px)')
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const userId = useSelector((state) => state.global.userId)
  const { data } = useGetUserQuery(userId)
  const drawerWidth = 250

  return (
    <Box display={'flex'}>
      <Navbar
        user={data || {}}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        drawerWidth={drawerWidth}
      />
      <SideBar
        user={data || {}}
        drawerWidth={drawerWidth}
        isNonMobile={isNonMobile}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Outlet
        open={isSidebarOpen}
        sx={{
          flexGrow: 1,
          padding: theme.spacing(3),
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          marginLeft: `-${drawerWidth}px`,
          ...(isSidebarOpen && {
            transition: theme.transitions.create('margin', {
              easing: theme.transitions.easing.easeOut,
              duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
          }),
        }}
      />
    </Box>
  )
}

export default Layout
