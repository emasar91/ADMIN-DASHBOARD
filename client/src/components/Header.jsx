import { Typography, Box, useTheme } from '@mui/material'
import React from 'react'
import { FormattedMessage } from 'react-intl'
const Header = ({ title }) => {
  const theme = useTheme()
  return (
    <Box>
      <Typography
        variant={'h2'}
        sx={{
          fontWeight: 'bold',
          marginBottom: '5px',
          fontSize: '21px',
          color: theme.palette.scenes.title,
        }}
      >
        <FormattedMessage id={`title.${title}`} />
      </Typography>
    </Box>
  )
}

export default Header
