import React, { useState, useMemo } from 'react'

//import Constant
import { containerStyleScene, containerStyle } from '../constants'

//import material ui
import { Box, useTheme } from '@mui/material'

//import libraries foreign
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { FormattedMessage } from 'react-intl'

//import own components
import Header from 'components/Header'
import DailyChart from '../../components/DailyChart'
import LoadingContainer from 'components/LoadingContainer'

//import fetch data
import { useGetSalesQuery } from 'state/api'

const Daily = () => {
  const theme = useTheme()
  const [startDate, setStartDate] = useState(new Date('2021-02-01'))
  const [endDate, setEndDate] = useState(new Date('2021-03-01'))
  const { data, isLoading } = useGetSalesQuery()

  const [formattedData] = useMemo(() => {
    if (!data) return []

    const { dailyData } = data
    const totalSalesLine = {
      id: <FormattedMessage id={'daily.totalSales'} />,
      color: theme.palette.dailyScene.chart.line1,
      data: [],
    }
    const totalUnitsLine = {
      id: <FormattedMessage id={'daily.totalUnits'} />,
      color: theme.palette.dailyScene.chart.line2,
      data: [],
    }

    Object.values(dailyData).forEach(({ date, totalSales, totalUnits }) => {
      const dateFormatted = new Date(date)
      if (dateFormatted >= startDate && dateFormatted <= endDate) {
        const splitDate = date.substring(date.indexOf('-') + 1)

        totalSalesLine.data = [
          ...totalSalesLine.data,
          { x: splitDate, y: totalSales },
        ]
        totalUnitsLine.data = [
          ...totalUnitsLine.data,
          { x: splitDate, y: totalUnits },
        ]
      }
    })

    const formattedData = [totalSalesLine, totalUnitsLine]
    return [formattedData]
  }, [data, startDate, endDate])

  return (
    <Box sx={containerStyleScene}>
      <Header title={'daily'} />
      <Box
        sx={{
          ...containerStyle,
          backgroundColor: theme.palette.overviewScene.background,
          padding: '16px',
          borderRadius: '0.55rem',
        }}
      >
        <Box display={'flex'} justifyContent={'end'}>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={startDate}
          />
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
          />
        </Box>
        <LoadingContainer isLoading={isLoading} height={'97%'}>
          <Box sx={{ height: '95%' }}>
            <DailyChart data={formattedData} />
          </Box>
        </LoadingContainer>
      </Box>
    </Box>
  )
}

export default Daily
