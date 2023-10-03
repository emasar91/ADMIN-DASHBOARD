import React, { useMemo } from 'react'
//import Constant
import { containerStyleScene, containerStyle } from '../constants'

//import material ui
import { Box, useTheme } from '@mui/material'

//import libraries foreign
import { FormattedMessage } from 'react-intl'
import 'react-datepicker/dist/react-datepicker.css'

//import own components
import Header from 'components/Header'
import MonthlyChart from '../../components/MonthlyChart'
import LoadingContainer from 'components/LoadingContainer'

//import fetch data
import { useGetSalesQuery } from 'state/api'

const Monthly = () => {
  const theme = useTheme()
  const { data, isLoading } = useGetSalesQuery()

  const [formattedData] = useMemo(() => {
    if (!data) return []

    const { monthlyData } = data
    const totalSalesLine = {
      id: <FormattedMessage id={'monthly.totalSales'} />,
      color: theme.palette.dailyScene.chart.line1,
      data: [],
    }
    const totalUnitsLine = {
      id: <FormattedMessage id={'monthly.totalUnits'} />,
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
      <Header title={'monthly'} />
      <Box
        sx={{
          ...containerStyle,
          backgroundColor: theme.palette.overviewScene.background,
          padding: '16px',
          borderRadius: '0.55rem',
        }}
      >
        <LoadingContainer isLoading={isLoading}>
          <Box sx={{ height: '95%' }}>
            <MonthlyChart data={formattedData} />
          </Box>
        </LoadingContainer>
      </Box>
    </Box>
  )
}

export default Monthly
