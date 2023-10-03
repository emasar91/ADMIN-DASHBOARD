import React from 'react'
import { useSelector } from 'react-redux'
import { useGetUserPerformanceQuery } from 'state/api'
import { containerStyleScene, containerStyle } from '../constants'
import { Box } from '@mui/material'
import Header from 'components/Header'
import PerformanceTable from 'components/PerformanceTable'
import { rowTitles } from './performanceTableTitle'

const Performance = () => {
  const userId = useSelector((state) => state.global.userId)
  const { data, isLoading } = useGetUserPerformanceQuery(userId)

  return (
    <Box sx={containerStyleScene}>
      <Header title={'performance'} />
      <Box
        sx={{
          ...containerStyle,
          borderRadius: '0.55rem',
        }}
      >
        <PerformanceTable
          rowTitles={rowTitles(false)}
          data={data}
          isLoading={isLoading}
        />
      </Box>
    </Box>
  )
}

export default Performance
