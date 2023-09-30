import React from 'react'
import { Box, useTheme, CircularProgress, Typography } from '@mui/material'
import Header from 'components/Header'
import BreakDownChart from '../../components/BreakDownChart'
import { containerStyle, containerStyleScene } from '../constants'
import { useGetSalesQuery } from 'state/api'

function Breakdown() {
  const { data, isLoading } = useGetSalesQuery()
  const theme = useTheme()

  return (
    <Box sx={containerStyleScene}>
      <Header title={'BreakDown'} />
      <Box
        sx={{
          ...containerStyle,
          backgroundColor: theme.palette.overviewScene.background,
          padding: '16px',
          borderRadius: '0.55rem',
        }}
      >
        {!isLoading ? (
          <Box sx={{ height: '90%' }}>
            <BreakDownChart data={data} isLoading={isLoading} />
          </Box>
        ) : (
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: '70vh',
            }}
          >
            <CircularProgress color={'primary'} />
            <Typography sx={{ paddingTop: '24px' }}>Loading</Typography>
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default Breakdown
