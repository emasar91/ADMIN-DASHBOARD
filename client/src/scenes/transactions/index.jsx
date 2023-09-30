import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { useGetTransactionsQuery } from 'state/api'
import Header from 'components/Header'
import { useTheme, Box } from '@mui/material'
import { containerStyleScene, containerStyle } from '../constants'
import DataGridCustomToolbar from '../../components/DataGridCustomToolbar'

const Transactions = () => {
  const theme = useTheme()

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
      headerNAme: 'ID',
      flex: 1,
    },
    {
      field: 'userId',
      headerNAme: 'User ID',
      flex: 1,
    },
    {
      field: 'createdAt',
      headerNAme: 'Created At',
      flex: 1,
    },
    {
      field: 'products',
      headerNAme: '# of products',
      flex: 0.5,
      sortable: false,
      renderCell: (params) => params.value.length,
    },
    {
      field: 'cost',
      headerNAme: 'Cost',
      renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
      flex: 1,
    },
  ]

  return (
    <Box sx={containerStyleScene}>
      <Header title={'Transactions'} />
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
