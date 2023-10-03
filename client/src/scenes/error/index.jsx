import React from 'react'

//import material ui
import { Button, Typography, Paper } from '@mui/material'

//import libraries foreign
import { FormattedMessage } from 'react-intl'

//import assets
import ERROR_IMAGE from '../../assets/ERROR.png'

const style = (theme) => ({
  root: {
    height: '100vh',
    display: 'grid',
    alignItems: 'start',
    margin: 0,
    padding: 0,
    background: theme.palette.app.background,
  },
  text: {
    color: 'white',
    backgroundColor: theme.palette.success.main,
    maxWidth: 400,
    border: 'white solid 1px',
    borderRadius: '8px',
    padding: '8px',
    textAlign: 'center',
  },
})

const ErrorPage = () => {
  return (
    <Paper sx={(theme) => style(theme).root}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: ' -webkit-fill-available',
          rowGap: '25px',
        }}
      >
        <Typography sx={(theme) => style(theme).text}>
          <FormattedMessage id='body.errorPage' />
        </Typography>
        <Button size='medium' color='success' variant='contained' href='/'>
          <FormattedMessage id='body.home' />
        </Button>
        <img style={{ maxWidth: '800px' }} src={ERROR_IMAGE} alt='Error Page' />
      </div>
    </Paper>
  )
}

export default ErrorPage
