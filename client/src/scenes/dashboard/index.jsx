import React from 'react'
//import Constant
import { containerStyleScene, containerStyle } from '../constants'

//import material ui
import {
  EmailOutlined,
  PointOfSaleOutlined,
  PersonAddOutlined,
  TrafficOutlined,
} from '@mui/icons-material'
import { Box, useTheme, useMediaQuery } from '@mui/material'

//import libraries foreign
import { useSelector } from 'react-redux'
import { FormattedMessage } from 'react-intl'

//import own components
import StatBox from 'components/StatBox'
import OverviewChart from 'components/OverviewChart'
import PerformanceTable from 'components/PerformanceTable'
import BreakDownChart from 'components/BreakDownChart'
import LoadingContainer from 'components/LoadingContainer'
import Header from 'components/Header'
import { rowTitles } from '../performance/performanceTableTitle'

//import fetch data
import {
  useGetDashboardQuery,
  useGetUserPerformanceQuery,
  useGetSalesQuery,
} from 'state/api'

const Dashboard = () => {
  const theme = useTheme()
  const isNonMediumScreen = useMediaQuery('(min-width: 1200px)')
  const { data, isLoading } = useGetDashboardQuery()
  const userId = useSelector((state) => state.global.userId)
  const { data: dataTable, isLoading: isLoadingTable } =
    useGetUserPerformanceQuery(userId)

  const { data: pieData, isLoading: pieIsLoading } = useGetSalesQuery()

  return (
    <Box sx={containerStyleScene}>
      <Header title={'dashboard'} />
      <Box sx={{ height: '85vh' }}>
        <LoadingContainer isLoading={isLoading}>
          <Box
            sx={{
              ...containerStyle,
              padding: '16px',
              borderRadius: '0.55rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(12,1fr)',
              gridAutoRows: '136px',
              gap: '20px',
              '& > div': {
                gridColumn: isNonMediumScreen ? undefined : 'span 12',
              },
            }}
          >
            <StatBox
              title={
                <FormattedMessage id={'dashboard.statBox.totalCostumers'} />
              }
              value={data && data.totalCustomers}
              increase='+14'
              description={
                <FormattedMessage id={'dashboard.statBox.sinceLastMonth'} />
              }
              icon={
                <EmailOutlined
                  sx={{ color: theme.palette.secondary[300], fontSize: '26px' }}
                />
              }
            />
            <StatBox
              title={<FormattedMessage id={'dashboard.statBox.salesToday'} />}
              value={data && data.todayStats.totalSales}
              increase='+21'
              description={
                <FormattedMessage id={'dashboard.statBox.sinceLastMonth'} />
              }
              icon={
                <PointOfSaleOutlined
                  sx={{ color: theme.palette.secondary[300], fontSize: '26px' }}
                />
              }
            />
            <Box
              sx={{
                gridColumn: 'span 8',
                gridRow: 'span 2',
                backgroundColor: theme.palette.dashboardScene.background,
                borderRadius: '0.55rem',
              }}
            >
              <OverviewChart view='sales' isDashboard={true} />
            </Box>
            <StatBox
              title={<FormattedMessage id={'dashboard.statBox.monthlySales'} />}
              value={data && data.thisMonthStats.totalSales}
              increase='+5'
              description={
                <FormattedMessage id={'dashboard.statBox.sinceLastMonth'} />
              }
              icon={
                <PersonAddOutlined
                  sx={{ color: theme.palette.secondary[300], fontSize: '26px' }}
                />
              }
            />
            <StatBox
              title={<FormattedMessage id={'dashboard.statBox.yearlySales'} />}
              value={data && data.yearlySalesTotal}
              increase='+43'
              description={
                <FormattedMessage id={'dashboard.statBox.sinceLastMonth'} />
              }
              icon={
                <TrafficOutlined
                  sx={{ color: theme.palette.secondary[300], fontSize: '26px' }}
                />
              }
            />

            <Box
              sx={{
                gridColumn: 'span 8',
                gridRow: 'span 3',
                backgroundColor: theme.palette.dashboardScene.background,
                borderRadius: '0.55rem',
                overflowY: 'auto',
              }}
            >
              <PerformanceTable
                rowTitles={rowTitles(true)}
                data={dataTable}
                isLoading={isLoadingTable}
                isDashboard={true}
              />
            </Box>
            <Box
              sx={{
                gridColumn: 'span 4',
                gridRow: 'span 3',
                backgroundColor: theme.palette.dashboardScene.background,
                borderRadius: '0.55rem',
                overflowY: 'auto',
              }}
            >
              <BreakDownChart
                data={pieData}
                isLoading={pieIsLoading}
                isDashboard={true}
              />
            </Box>
          </Box>
        </LoadingContainer>
      </Box>
    </Box>
  )
}

export default Dashboard
