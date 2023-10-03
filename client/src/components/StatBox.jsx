import React from 'react'

//import material ui
import { Box, Typography, useTheme } from '@mui/material'

//import own components
import BoxFlexBetween from './BoxFlexBetween'

const StatBox = ({ title, value, increase, icon, description }) => {
  const theme = useTheme()

  const color =
    Number(increase) < 0
      ? {
          background:
            theme.palette.dashboardScene.statBox.increase.low.background,
          text: theme.palette.dashboardScene.statBox.increase.low.color,
        }
      : Number(increase) > 0 && Number(increase) < 10
      ? {
          background:
            theme.palette.dashboardScene.statBox.increase.mid.background,
          text: theme.palette.dashboardScene.statBox.increase.mid.color,
        }
      : {
          background:
            theme.palette.dashboardScene.statBox.increase.hight.background,
          text: theme.palette.dashboardScene.statBox.increase.hight.color,
        }
  return (
    <Box
      gridColumn='span 2'
      gridRow='span 1'
      display='flex'
      flexDirection='column'
      justifyContent='space-between'
      p='1.25rem 1rem'
      flex='1 1 100%'
      backgroundColor={theme.palette.dashboardScene.background}
      borderRadius='0.55rem'
    >
      <BoxFlexBetween>
        <Typography
          variant='h6'
          sx={{
            color: theme.palette.dashboardScene.statBox.title,
            fontSize: '15px',
            lineHeight: '18px',
          }}
        >
          {title}
        </Typography>
        <span style={{ color: theme.palette.dashboardScene.statBox.icon }}>
          {icon}
        </span>
      </BoxFlexBetween>

      <Typography
        variant='h3'
        sx={{
          color: theme.palette.dashboardScene.statBox.value,
          lineHeight: '34px',
          fontSize: '28px',
        }}
      >
        {value}
      </Typography>
      <BoxFlexBetween gap='1rem'>
        <Typography
          sx={{
            color: color.text,
            backgroundColor: color.background,
            fontSize: '11px',
            lineHeight: '11px',
            padding: '0.3rem 0.8rem',
            borderRadius: '0.2rem',
          }}
        >
          {increase}%
        </Typography>
        <Typography
          sx={{
            color: theme.palette.dashboardScene.statBox.since,
          }}
        >
          {description}
        </Typography>
      </BoxFlexBetween>
    </Box>
  )
}

export default StatBox
