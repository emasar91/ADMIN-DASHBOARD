import React from 'react'
import { Box, CircularProgress, Typography } from '@mui/material'
import { FormattedMessage } from 'react-intl'

const LoadingBox = () => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '70vh',
      }}
    >
      <CircularProgress color={'primary'} />
      <Typography sx={{ paddingTop: '24px' }}>
        <FormattedMessage id={'loading'} />
      </Typography>
    </Box>
  )
}

export default LoadingBox
