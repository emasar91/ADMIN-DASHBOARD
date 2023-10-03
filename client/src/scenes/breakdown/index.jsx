import React from 'react'
import { Box, useTheme } from '@mui/material'
import Header from 'components/Header'
import BreakDownChart from '../../components/BreakDownChart'
import { containerStyle, containerStyleScene } from '../constants'
import { useGetSalesQuery } from 'state/api'
import LoadingContainer from 'components/LoadingContainer'

function Breakdown() {
  const { data, isLoading } = useGetSalesQuery()
  const theme = useTheme()

  return (
    <Box sx={containerStyleScene}>
      <Header title={'breakDown'} />
      <Box
        sx={{
          ...containerStyle,
          backgroundColor: theme.palette.overviewScene.background,
          padding: '16px',
          borderRadius: '0.55rem',
        }}
      >
        <LoadingContainer isLoading={isLoading}>
          <Box sx={{ height: '90%' }}>
            <BreakDownChart data={data} isLoading={isLoading} />
          </Box>
        </LoadingContainer>
      </Box>
    </Box>
  )
}

export default Breakdown
