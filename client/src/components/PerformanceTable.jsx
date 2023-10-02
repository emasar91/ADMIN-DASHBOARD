import React from 'react'

import {
  Box,
  useTheme,
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  CircularProgress,
  Typography,
} from '@mui/material'
import { FormattedMessage } from 'react-intl'

const PerformanceTable = ({
  rowTitles,
  data,
  isLoading,
  isDashboard = false,
}) => {
  const theme = useTheme()

  const rowStyles = {
    backgroundColor: theme.palette.costumersScene.table.cellStyle1,
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.costumersScene.table.cellStyle2,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }

  const cellStyle = {
    color: theme.palette.performanceScene.table.text,
    fontSize: '14px',
    lineHeight: '21px',
    padding: '12px 8px',
  }

  const rowsData = data?.sales?.map((sale) => {
    const color =
      Number(sale.cost) < 100
        ? theme.palette.performanceScene.table.cost.low
        : Number(sale.cost) < 1000 && Number(sale.cost) > 100
        ? theme.palette.performanceScene.table.cost.mid
        : theme.palette.performanceScene.table.cost.hight

    return {
      id: sale._id,
      userId: data.user._id,
      name: data.user.name,
      createdAt: sale.createdAt,
      products: sale.products.length,
      cost: sale.cost,
      color: color,
    }
  })
  return (
    <Box
      sx={{
        padding: '16px',
        backgroundColor: theme.palette.performanceScene.background,
      }}
    >
      {!isLoading ? (
        <TableContainer
          sx={{
            boxShadow: 'none',
            display: 'block',
            overflowX: 'auto',
          }}
        >
          <Table sx={{ minWidth: 700 }} aria-label='customized table'>
            <TableHead>
              <TableRow>
                {rowTitles.map((row) => (
                  <TableCell
                    key={row.headerName}
                    sx={{ textAlign: 'center', fontWeight: 700 }}
                  >
                    <FormattedMessage
                      id={`performance.table.titles.${row.headerName}`}
                    />
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rowsData?.map((row) => (
                <TableRow key={row.id} sx={rowStyles}>
                  <TableCell align='center' sx={cellStyle}>
                    {row.id}
                  </TableCell>
                  {!isDashboard && (
                    <TableCell align='center' sx={cellStyle}>
                      {row.userId}
                    </TableCell>
                  )}
                  <TableCell align='center' sx={cellStyle}>
                    {row.name}
                  </TableCell>
                  <TableCell align='center' sx={cellStyle}>
                    {row.createdAt}
                  </TableCell>
                  <TableCell align='center' sx={cellStyle}>
                    {row.products}
                  </TableCell>
                  <TableCell align='center' sx={cellStyle}>
                    <span
                      style={{
                        backgroundColor: row.color,
                        padding: '2px 4px',
                        borderRadius: '0.2rem',
                        width: '100%',
                        display: 'block',
                        color: theme.palette.performanceScene.table.cost.text,
                      }}
                    >
                      $ {row.cost}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '80vh',
          }}
        >
          <CircularProgress color={'primary'} />
          <Typography sx={{ paddingTop: '24px' }}>Loading</Typography>
        </Box>
      )}
    </Box>
  )
}

export default PerformanceTable
