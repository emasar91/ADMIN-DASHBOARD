import React, { useState } from 'react'
import { containerStyleScene, containerStyle } from '../constants'
import OverviewChart from '../../components/OverviewChart'
import {
  Box,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  useTheme,
} from '@mui/material'
import Header from 'components/Header'

const Overview = () => {
  const theme = useTheme()
  const [view, setView] = useState('units')
  return (
    <Box sx={containerStyleScene}>
      <Header title={'OverView'} />
      <Box
        sx={{
          ...containerStyle,
          backgroundColor: theme.palette.overviewScene.background,
          padding: '16px',
          borderRadius: '0.55rem',
        }}
      >
        <FormControl sx={{ mt: '1rem' }}>
          <InputLabel>View</InputLabel>
          <Select
            value={view}
            label={'View'}
            onChange={(e) => setView(e.target.value)}
          >
            <MenuItem value='sales'>Sales</MenuItem>
            <MenuItem value='units'>Units</MenuItem>
          </Select>
        </FormControl>
        <OverviewChart view={view} />
      </Box>
    </Box>
  )
}

export default Overview