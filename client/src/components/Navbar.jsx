import React, { useState } from 'react'
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  ArrowDropDownOutlined,
} from '@mui/icons-material'
import { useDispatch } from 'react-redux'
import { setMode } from 'state'
import profileImage from '../assets/profile.jpeg'
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  useTheme,
  Box,
  Typography,
  Menu,
  MenuItem,
} from '@mui/material'
import BoxFlexBetween from './BoxFlexBetween'
import LanguageSelector from './LanguageSelector'

const Navbar = ({ user, isSidebarOpen, setIsSidebarOpen, drawerWidth }) => {
  const dispatch = useDispatch()
  const theme = useTheme()

  const handleChangeMode = () => {
    dispatch(setMode())
  }

  return (
    <AppBar
      position='fixed'
      open={isSidebarOpen}
      sx={{
        backgroundColor: `${theme.palette.navBar.background} !important`,
        boxShadow: 'none',
        background: 'none',
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        ...(isSidebarOpen && {
          width: `calc(100% - ${drawerWidth}px)`,
          marginLeft: `${drawerWidth}px`,
          transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
        }),
      }}
    >
      <Toolbar
        sx={{
          '& .MuiToolbar-root': {
            padding: ' 0 !important',
          },
          justifyContent: 'space-between',
          marginLeft: '-16px',
        }}
      >
        <BoxFlexBetween>
          <IconButton
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            sx={{
              marginRight: '8px',
            }}
          >
            <MenuIcon />
          </IconButton>
        </BoxFlexBetween>
        <BoxFlexBetween sx={{ gap: '1.5rem' }}>
          <IconButton onClick={handleChangeMode}>
            {theme.palette.mode === 'dark' ? (
              <LightModeOutlined sx={{ fontSize: '25px' }} />
            ) : (
              <DarkModeOutlined sx={{ fontSize: '25px' }} />
            )}
          </IconButton>
          <LanguageSelector />

          <BoxFlexBetween>
            <Box
              component={'img'}
              alt='profile'
              src={profileImage}
              sx={{
                height: '32px',
                width: '32px',
                borderRadius: '50%',
                objectFit: 'cover',
                margin: '0 12px',
              }}
            />
            <Box sx={{ textAlign: 'left' }}>
              <Typography
                sx={{
                  fontWeight: 'bold',
                  fontSize: '0.85rem',
                  color: theme.palette.selectedItem,
                }}
              >
                {user.name}
              </Typography>
              <Typography
                sx={{
                  fontSize: '0.75rem',
                  color: theme.palette.noneSelected,
                }}
              >
                {user.occupation}
              </Typography>
            </Box>
          </BoxFlexBetween>
        </BoxFlexBetween>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
