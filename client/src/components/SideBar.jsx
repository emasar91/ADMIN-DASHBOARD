import React from 'react'
import {
  Box,
  Divider,
  Drawer,
  DrawerHeader,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material'
import {
  SettingsOutlined,
  ChevronLeft,
  HomeOutlined,
  ShoppingCartOutlined,
  Groups2Outlined,
  ReceiptLongOutlined,
  PublicOutlined,
  PointOfSaleOutlined,
  TodayOutlined,
  CalendarMonthOutlined,
  AdminPanelSettingsOutlined,
  TrendingUpOutlined,
  PieChartOutlined,
} from '@mui/icons-material'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import BoxFlexBetween from './BoxFlexBetween'
import profileImage from '../assets/profile.jpeg'

const navItems = [
  { text: 'Dashboard', icon: <HomeOutlined /> },
  { text: 'Client Facing', icon: null },
  { text: 'Products', icon: <ShoppingCartOutlined /> },
  { text: 'Customers', icon: <Groups2Outlined /> },
  { text: 'Transactions', icon: <ReceiptLongOutlined /> },
  { text: 'Sales', icon: null },
  { text: 'OverView', icon: <PointOfSaleOutlined /> },
  { text: 'Daily', icon: <TodayOutlined /> },
  { text: 'Monthly', icon: <CalendarMonthOutlined /> },
  { text: 'BreakDown', icon: <PieChartOutlined /> },
  { text: 'Management', icon: null },
  { text: 'Admin', icon: <AdminPanelSettingsOutlined /> },
  { text: 'Performance', icon: <TrendingUpOutlined /> },
]

const SideBar = ({
  user,
  isNonMobile,
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
}) => {
  const { pathname } = useLocation()
  const [active, setActive] = useState('')
  const navigate = useNavigate()
  const theme = useTheme()

  useEffect(() => {
    setActive(pathname.substring(1))
  }, [pathname])

  const handleCloseDrawer = () => {
    setIsSidebarOpen(false)
  }

  const handleNavigate = (text) => {
    navigate(`/${text}`)
    setActive(text)
  }

  return (
    <Drawer
      open={isSidebarOpen}
      onClose={handleCloseDrawer}
      variant='persistent'
      anchor='left'
      sx={{
        '& .MuiDrawer-paper': {
          backgroundColor: theme.palette.sideBar.background,
          width: drawerWidth,
          boxSizing: 'border-box',
          borderWidth: isNonMobile ? 0 : '2px',
        },
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        ...(isSidebarOpen && {
          width: isSidebarOpen ? drawerWidth : 0,

          transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
        }),
      }}
    >
      <Box sx={{ width: '100%' }}>
        <Box sx={{ margin: '2rem ' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Typography sx={{ fontWeight: 'bold', variant: 'h4' }}>
              Michael Sarco
            </Typography>
          </Box>
        </Box>
        <Divider />
        <List>
          {navItems.map(({ text, icon }) => {
            if (!icon) {
              return (
                <Typography
                  key={text}
                  sx={{ padding: '24px 24px 6px 24px ', fontSize: '12px' }}
                >
                  {text}
                </Typography>
              )
            }
            const lowerCaseText = text.toLowerCase()
            return (
              <ListItem
                key={text}
                disablePadding
                sx={{
                  '& .MuiButtonBase-root': {
                    '&:hover': {
                      backgroundColor: 'transparent',
                    },
                  },
                }}
              >
                <ListItemButton
                  disableRipple
                  onClick={() => handleNavigate(lowerCaseText)}
                  sx={{
                    background:
                      active === lowerCaseText
                        ? theme.palette.sideBar.item.background
                        : 'transparent',
                    borderLeft:
                      active === lowerCaseText
                        ? `3px solid ${theme.palette.sideBar.item.borderLeftActive}`
                        : 'transparent',
                  }}
                >
                  <ListItemIcon
                    sx={{
                      color:
                        active === lowerCaseText
                          ? theme.palette.sideBar.item.itemTitleHover
                          : theme.palette.sideBar.item.itemTitle,
                      '&:hover': {
                        color:
                          active !== lowerCaseText
                            ? theme.palette.sideBar.item.itemTitleHover
                            : '',
                      },
                    }}
                  >
                    {icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography
                        sx={{
                          color:
                            active === lowerCaseText
                              ? theme.palette.sideBar.item.itemTitleActive
                              : theme.palette.sideBar.item.itemTitle,
                          fontWeight: 400,
                          fontSize: 14,
                          '&:hover': {
                            color:
                              active !== lowerCaseText
                                ? theme.palette.sideBar.item.itemTitleHover
                                : '',
                            paddingLeft: active !== lowerCaseText ? '2px' : '',
                          },
                        }}
                      >
                        {text}
                      </Typography>
                    }
                  />
                </ListItemButton>
              </ListItem>
            )
          })}
        </List>
      </Box>

      <Box sx={{ position: 'absolute', bottom: '2rem' }}>
        <Divider />
        <BoxFlexBetween
          sx={{
            textTransform: 'none',
            gap: '1rem',
            margin: '1.5rem 2rem 0 3rem',
          }}
        >
          <Box
            component={'img'}
            alt='profile'
            src={profileImage}
            sx={{
              height: '40px',
              width: '40px',
              borderRadius: '50%',
              objectFit: 'cover',
            }}
          />
          <Box sx={{ textAlign: 'left' }}>
            <Typography
              sx={{
                fontWeight: 'bold',
                fontSize: '0.9rem',
                color: theme.palette.selectedItem,
              }}
            >
              {user.name}
            </Typography>
            <Typography
              sx={{
                fontSize: '0.8rem',
                color: theme.palette.noneSelected,
              }}
            >
              {user.occupation}
            </Typography>
          </Box>
        </BoxFlexBetween>
      </Box>
    </Drawer>
  )
}

export default SideBar
