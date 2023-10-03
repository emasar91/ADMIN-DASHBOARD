import React from 'react'

//import Constant
import { containerStyleScene, containerStyle } from '../constants'

//import material ui
import { Box } from '@mui/material'

//import libraries foreign
import { useSelector } from 'react-redux'

//import own components
import Header from 'components/Header'
import PerformanceTable from 'components/PerformanceTable'
import { rowTitles } from './performanceTableTitle'

//import fetch data
import { useGetUserPerformanceQuery } from 'state/api'

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
