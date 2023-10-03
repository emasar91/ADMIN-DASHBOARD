import React, { useState } from 'react'
//import Constant
import { containerStyleScene, containerStyle } from '../constants'

//import material ui
import {
  Box,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  useTheme,
} from '@mui/material'

//import libraries foreign
import { FormattedMessage } from 'react-intl'

//import own components
import Header from 'components/Header'
import OverviewChart from '../../components/OverviewChart'

const Overview = () => {
  const theme = useTheme()
  const [view, setView] = useState('units')
  return (
    <Box sx={containerStyleScene}>
      <Header title={'overView'} />
      <Box
        sx={{
          ...containerStyle,
          backgroundColor: theme.palette.overviewScene.background,
          padding: '16px',
          borderRadius: '0.55rem',
        }}
      >
        <FormControl sx={{ mt: '1rem' }}>
          <InputLabel>
            <FormattedMessage id={'overView.view'} />
          </InputLabel>
          <Select
            value={view}
            label={'View'}
            onChange={(e) => setView(e.target.value)}
          >
            <MenuItem value='sales'>
              <FormattedMessage id={'overView.sales'} />
            </MenuItem>
            <MenuItem value='units'>
              <FormattedMessage id={'overView.units'} />
            </MenuItem>
          </Select>
        </FormControl>
        <OverviewChart view={view} />
      </Box>
    </Box>
  )
}

export default Overview
