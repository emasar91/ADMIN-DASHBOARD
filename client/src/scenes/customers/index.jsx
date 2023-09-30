import React from 'react'
import { useGetCustomersQuery } from 'state/api'
import Header from 'components/Header'
import { containerStyleScene, containerStyle } from '../constants'
import {
  Box,
  useTheme,
  CircularProgress,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'

const Customers = () => {
  const theme = useTheme()
  const { data, isLoading } = useGetCustomersQuery()

  const rowTitles = [
    {
      headerName: 'ID',
    },
    {
      headerName: 'Name',
    },
    {
      headerName: 'Email',
    },
    {
      headerName: 'Phone Number',
    },
    {
      headerName: 'Country',
    },
    {
      headerName: 'Occupation',
    },
    {
      headerName: 'Role',
    },
  ]

  const rowsData = data?.map((ele) => {
    return {
      id: ele._id,
      name: ele.name,
      email: ele.email,
      phoneNumber: ele.phoneNumber.replace(
        /^(\d{3})(\d{3})(\d{4})/,
        '($1) $2-$3'
      ),
      country: ele.country,
      occupation: ele.occupation,
      role: ele.role,
    }
  })

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

  const roleStyles = {
    admin: theme.palette.costumersScene.table.role.admin,
    superadmin: theme.palette.costumersScene.table.role.superadmin,
    user: theme.palette.costumersScene.table.role.user,
  }

  const cellStyle = {
    color: theme.palette.costumersScene.table.text,
    fontSize: '14px',
    lineHeight: '21px',
    padding: '12px 8px',
  }

  return (
    <Box sx={containerStyleScene}>
      <Header title={'Customers'} />
      <Box
        sx={{
          ...containerStyle,
          borderRadius: '0.55rem',
        }}
      >
        <Box
          sx={{
            padding: '16px',
            backgroundColor: theme.palette.costumersScene.background,
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
                        {row.headerName}
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
                      <TableCell align='center' sx={cellStyle}>
                        {row.name}
                      </TableCell>
                      <TableCell align='center' sx={cellStyle}>
                        {row.email}
                      </TableCell>
                      <TableCell align='center' sx={cellStyle}>
                        {row.phoneNumber}
                      </TableCell>
                      <TableCell align='center' sx={cellStyle}>
                        {row.country}
                      </TableCell>
                      <TableCell align='center' sx={cellStyle}>
                        {row.occupation}
                      </TableCell>
                      <TableCell align='center' sx={cellStyle}>
                        <span
                          style={{
                            backgroundColor: roleStyles[row.role],
                            padding: '2px 4px',
                            borderRadius: '0.2rem',
                            width: '100%',
                            display: 'block',
                            color: theme.palette.costumersScene.table.role.text,
                          }}
                        >
                          {row.role}
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
      </Box>
    </Box>
  )
}

export default Customers
