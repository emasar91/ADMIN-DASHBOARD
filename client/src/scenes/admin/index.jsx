import React from 'react'
//import Constant
import { containerStyleScene, containerStyle } from '../constants'

//import material ui
import {
  Box,
  useTheme,
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
} from '@mui/material'

//import libraries foreign
import { FormattedMessage } from 'react-intl'

//import own components
import Header from 'components/Header'
import LoadingContainer from 'components/LoadingContainer'

//import fetch data
import { useGetAdminsQuery } from 'state/api'

const Admin = () => {
  const theme = useTheme()
  const { data, isLoading } = useGetAdminsQuery()
  const rowTitles = [
    {
      headerName: 'id',
    },
    {
      headerName: 'name',
    },
    {
      headerName: 'email',
    },
    {
      headerName: 'phoneNumber',
    },
    {
      headerName: 'country',
    },
    {
      headerName: 'occupation',
    },
    {
      headerName: 'role',
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
    admin: theme.palette.adminScene.table.role.admin,
  }

  const cellStyle = {
    color: theme.palette.adminScene.table.text,
    fontSize: '14px',
    lineHeight: '21px',
    padding: '12px 8px',
  }
  return (
    <Box sx={containerStyleScene}>
      <Header title={'admin'} />
      <Box
        sx={{
          ...containerStyle,
          borderRadius: '0.55rem',
        }}
      >
        <Box
          sx={{
            padding: '16px',
            backgroundColor: theme.palette.adminScene.background,
            height: '100%',
          }}
        >
          <LoadingContainer isLoading={isLoading}>
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
                          id={`admins.table.titles.${row.headerName}`}
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
                            color: theme.palette.adminScene.table.role.text,
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
          </LoadingContainer>
        </Box>
      </Box>
    </Box>
  )
}

export default Admin
