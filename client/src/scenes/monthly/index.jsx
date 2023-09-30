import React, { useMemo } from 'react'
import { containerStyleScene, containerStyle } from '../constants'
import { Box, useTheme, CircularProgress, Typography } from '@mui/material'
import Header from 'components/Header'
import { useGetSalesQuery } from 'state/api'
import MonthlyChart from '../../components/MonthlyChart'

import 'react-datepicker/dist/react-datepicker.css'

const Monthly = () => {
  const theme = useTheme()
  const { data, isLoading } = useGetSalesQuery()

  const [formattedData] = useMemo(() => {
    if (!data) return []

    const { monthlyData } = data
    const totalSalesLine = {
      id: 'Total Sales',
      color: theme.palette.dailyScene.chart.line1,
      data: [],
    }
    const totalUnitsLine = {
      id: 'Total Units',
      color: theme.palette.dailyScene.chart.line2,
      data: [],
    }

    Object.values(monthlyData).forEach(({ month, totalSales, totalUnits }) => {
      totalSalesLine.data = [
        ...totalSalesLine.data,
        { x: month, y: totalSales },
      ]
      totalUnitsLine.data = [
        ...totalUnitsLine.data,
        { x: month, y: totalUnits },
      ]
    })

    const formattedData = [totalSalesLine, totalUnitsLine]
    return [formattedData]
  }, [data])

  return (
    <Box sx={containerStyleScene}>
      <Header title={'Monthly'} />
      <Box
        sx={{
          ...containerStyle,
          backgroundColor: theme.palette.overviewScene.background,
          padding: '16px',
          borderRadius: '0.55rem',
        }}
      >
        {!isLoading ? (
          <Box sx={{ height: '95%' }}>
            <MonthlyChart data={formattedData} />
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

export default Monthly