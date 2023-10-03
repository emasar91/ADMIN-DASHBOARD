import React from 'react'

//import material ui
import { Box, CircularProgress, Typography } from '@mui/material'

//import libraries foreign
import { FormattedMessage } from 'react-intl'

const LoadingBox = ({ isLoading, children, height = '100%' }) => {
  return (
    <>
      {isLoading ? (
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: height,
          }}
        >
          <CircularProgress color={'primary'} />
          <Typography sx={{ paddingTop: '24px' }}>
            <FormattedMessage id={'loading'} />
          </Typography>
        </Box>
      ) : (
        <>{children}</>
      )}
    </>
  )
}

export default LoadingBox
