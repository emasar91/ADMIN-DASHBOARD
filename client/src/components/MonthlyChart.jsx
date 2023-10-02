import React from 'react'
import { ResponsiveLine } from '@nivo/line'
import { useTheme } from '@mui/material'
import { FormattedMessage } from 'react-intl'

const DailyChart = ({ data }) => {
  const theme = useTheme()

  return (
    <ResponsiveLine
      data={data}
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
      margin={{ top: 50, right: 10, bottom: 70, left: 60 }}
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
        orient: 'bottom',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 90,
        legend: <FormattedMessage id={'monthly.chart.month'} />,
        legendOffset: 60,
        legendPosition: 'middle',
      }}
      axisLeft={{
        orient: 'left',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: <FormattedMessage id={'monthly.chart.total'} />,
        legendOffset: -50,
        legendPosition: 'middle',
      }}
      enableGridX={false}
      enableGridY={false}
      pointSize={10}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabelYOffset={-12}
      enableArea={true}
      legends={[
        {
          anchor: 'top-right',
          direction: 'column',
          justify: false,
          translateX: -20,
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
      ]}
    />
  )
}

export default DailyChart
