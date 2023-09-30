import React, { useMemo } from 'react'
import { ResponsiveLine } from '@nivo/line'
import { Box, Typography, CircularProgress, useTheme } from '@mui/material'
import { useGetSalesQuery } from 'state/api'

const OverviewChart = ({ isDashboard = false, view }) => {
  const theme = useTheme()
  const { data, isLoading } = useGetSalesQuery()

  const [totalSalesLine, totalUnitsLine] = useMemo(() => {
    if (!data) return []

    const { monthlyData } = data
    const totalSalesLine = {
      id: 'totalSales',
      color: theme.palette.overviewScene.chart.line1,
      data: [],
    }
    const totalUnitsLine = {
      id: 'totalUnits',
      color: theme.palette.overviewScene.chart.line2,
      data: [],
    }

    Object.values(monthlyData).reduce(
      (acc, { month, totalSales, totalUnits }) => {
        const curSales = acc.sales + totalSales
        const curUnits = acc.units + totalUnits

        totalSalesLine.data = [
          ...totalSalesLine.data,
          { x: month, y: curSales },
        ]
        totalUnitsLine.data = [
          ...totalUnitsLine.data,
          { x: month, y: curUnits },
        ]

        return { sales: curSales, units: curUnits }
      },
      { sales: 0, units: 0 }
    )

    return [[totalSalesLine], [totalUnitsLine]]
  }, [data])

  return (
    <Box height={'90%'}>
      {!isLoading ? (
        <ResponsiveLine
          data={view === 'sales' ? totalSalesLine : totalUnitsLine}
          theme={{
            axis: {
              domain: {
                line: {
                  stroke: theme.palette.overviewScene.chart.values,
                },
              },
              legend: {
                text: {
                  fill: theme.palette.overviewScene.chart.values,
                },
              },
              ticks: {
                line: {
                  stroke: theme.palette.overviewScene.chart.values,
                  strokeWidth: 1,
                },
                text: {
                  fill: theme.palette.overviewScene.chart.values,
                },
              },
            },
            legends: {
              text: {
                fill: theme.palette.overviewScene.chart.values,
              },
            },
          }}
          colors={{ datum: 'color' }}
          margin={{ top: 20, right: 70, bottom: 50, left: 70 }}
          xScale={{ type: 'point' }}
          yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: false,
            reverse: false,
          }}
          yFormat=' >-.2f'
          curve='catmullRom'
          axisTop={null}
          axisRight={null}
          axisBottom={{
            format: (v) => {
              if (isDashboard) return v.slice(0, 3)
              return v
            },
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDashboard ? '' : 'Month',
            legendOffset: 36,
            legendPosition: 'middle',
          }}
          axisLeft={{
            orient: 'left',
            tickValues: 5,
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDashboard
              ? ''
              : `Total ${view === 'sales' ? 'Revenue' : 'Units'} for Year`,
            legendOffset: -60,
            legendPosition: 'middle',
          }}
          pointSize={10}
          pointColor={{ from: 'color', modifiers: [] }}
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
          pointLabelYOffset={-12}
          enableArea={true}
          enableGridX={false}
          enableGridY={false}
          legends={
            !isDashboard
              ? [
                  {
                    anchor: 'top-left',
                    direction: 'column',
                    justify: false,
                    translateX: 15,
                    translateY: 0,
                    itemsSpacing: 0,
                    itemDirection: 'left-to-right',
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: 'circle',
                    symbolBorderColor: 'rgba(0, 0, 0, .5)',
                  },
                ]
              : undefined
          }
        />
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
  )
}

export default OverviewChart
