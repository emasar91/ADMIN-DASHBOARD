import React, { useState } from 'react'
//import Constant
import { containerStyleScene, containerStyle } from '../constants'

//import material ui
import { useTheme, Box } from '@mui/material'

//import libraries foreign
import { DataGrid } from '@mui/x-data-grid'
import { FormattedMessage } from 'react-intl'
import { useSelector } from 'react-redux'

//import own components
import Header from 'components/Header'
import DataGridCustomToolbar from '../../components/DataGridCustomToolbar'

//import fetch data
import { useGetTransactionsQuery } from 'state/api'

const Transactions = () => {
  const theme = useTheme()
  const lang = useSelector((state) => state.global.languageSelected)

  const [page, setPage] = useState(0)
  const [pageSize, setPageSize] = useState(25)
  const [sort, setSort] = useState({})
  const [search, setSearch] = useState('')
  const [searchInput, setSearchInput] = useState('')

  const { data, isLoading } = useGetTransactionsQuery({
    page,
    pageSize,
    sort: JSON.stringify(sort),
    search,
  })

  const columns = [
    {
      field: '_id',
      headerName: <FormattedMessage id={'transactions.table.titles.id'} />,
      flex: 1,
    },
    {
      field: 'userId',
      headerName: <FormattedMessage id={'transactions.table.titles.userId'} />,
      flex: 1,
    },
    {
      field: 'createdAt',
      headerName: (
        <FormattedMessage id={'transactions.table.titles.createdAt'} />
      ),
      renderCell: (params) => {
        const date = new Date(params.value)
        return date.toLocaleString(lang, {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      },
      flex: 1,
    },
    {
      field: 'products',
      headerName: (
        <FormattedMessage id={'transactions.table.titles.products'} />
      ),
      sortable: false,
      renderCell: (params) => params.value.length,
      flex: 0.5,
    },
    {
      field: 'cost',
      headerName: <FormattedMessage id={'transactions.table.titles.cost'} />,
      renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
      flex: 1,
    },
  ]

  return (
    <Box sx={containerStyleScene}>
      <Header title={'transactions'} />
      <Box
        sx={{
          containerStyle,
          height: '82vh',
          backgroundColor: theme.palette.transactionScene.background,
          borderRadius: '0.33rem',
        }}
      >
        <DataGrid
          sx={{ borderRadius: '0.33rem' }}
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={(data && data.transactions) || []}
          columns={columns}
          rowCount={(data && data.total) || 0}
          pagination
          page={page}
          pageSize={pageSize}
          paginationMode='server'
          sortingMode='server'
          onPageChange={(newPage) => setPage(newPage)}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          onSortModelChange={(newSortModel) => setSort(...newSortModel)}
          components={{ Toolbar: DataGridCustomToolbar }}
          componentsProps={{
            toolbar: { setSearchInput, setSearch, searchInput },
          }}
        />
      </Box>
    </Box>
  )
}

export default Transactions
