import React from 'react'

//import material ui
import { useTheme, Box } from '@mui/material'

//import libraries foreign
import { ResponsivePie } from '@nivo/pie'

//import own components
import LoadingContainer from './LoadingContainer'

const BreakDownChart = ({ data, isLoading, isDashboard = false }) => {
  const theme = useTheme()

  const colors = [
    theme.palette.breakdownScene.chart.color1,
    theme.palette.breakdownScene.chart.color2,
    theme.palette.breakdownScene.chart.color3,
    theme.palette.breakdownScene.chart.color4,
  ]

  const formattedData =
    !isLoading &&
    Object.entries(data?.salesByCategory).map(([category, sales], i) => ({
      id: category.toUpperCase(),
      label: category.toUpperCase(),
      value: sales,
      color: colors[i],
    }))

  return (
    <Box
      height={isDashboard ? '400px' : '100%'}
      width={undefined}
      minHeight={isDashboard ? '325px' : undefined}
      minWidth={isDashboard ? '325px' : undefined}
      position='relative'
    >
      <LoadingContainer isLoading={isLoading}>
        <ResponsivePie
          data={formattedData || []}
          theme={{
            tooltip: {
              container: {
                color: theme.palette.breakdownScene.chart.tooltip.text,
                backgroundColor:
                  theme.palette.breakdownScene.chart.tooltip.background,
              },
            },
          }}
          colors={{ datum: 'data.color' }}
          margin={
            isDashboard
              ? { top: 40, right: 80, bottom: 100, left: 50 }
              : { top: 40, right: 80, bottom: 80, left: 80 }
          }
          sortByValue={true}
          innerRadius={0.45}
          activeOuterRadiusOffset={8}
          borderWidth={1}
          borderColor={{
            from: 'color',
            modifiers: [['darker', 0.2]],
          }}
          enableArcLinkLabels={!isDashboard}
          arcLinkLabelsTextColor={theme.palette.breakdownScene.chart.values}
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: 'color' }}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={{
            from: 'color',
            modifiers: [['darker', 2]],
          }}
          legends={[
            {
              anchor: 'bottom',
              direction: 'row',
              justify: false,
              translateX: isDashboard ? 20 : 0,
              translateY: isDashboard ? 50 : 56,
              itemsSpacing: 0,
              itemWidth: 85,
              itemHeight: 18,
              itemTextColor: '#999',
              itemDirection: 'left-to-right',
              itemOpacity: 1,
              symbolSize: 18,
              symbolShape: 'circle',
            },
          ]}
        />
      </LoadingContainer>
    </Box>
  )
}

export default BreakDownChart
