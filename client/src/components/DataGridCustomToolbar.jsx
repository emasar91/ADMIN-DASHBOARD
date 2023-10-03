import React from 'react'

//import material ui
import { IconButton, TextField, InputAdornment } from '@mui/material'
import { Search } from '@mui/icons-material'

//import libraries foreign
import {
  GridToolbarDensitySelector,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarColumnsButton,
} from '@mui/x-data-grid'

//import own components
import BoxFlexBetween from './BoxFlexBetween'

const DataGridCustomToolbar = ({ setSearchInput, setSearch, searchInput }) => {
  return (
    <GridToolbarContainer>
      <BoxFlexBetween width={'100%'}>
        <BoxFlexBetween>
          <GridToolbarColumnsButton />
          <GridToolbarDensitySelector />
          <GridToolbarExport />
        </BoxFlexBetween>
        <TextField
          label='Search...'
          sx={{ mb: '0.5rem', width: '15rem' }}
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
          variant='standard'
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton
                  onClick={() => {
                    setSearch(searchInput)
                    setSearchInput('')
                  }}
                >
                  <Search />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </BoxFlexBetween>
    </GridToolbarContainer>
  )
}

export default DataGridCustomToolbar
