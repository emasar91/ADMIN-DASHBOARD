import React, { useState } from 'react'
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined'
import {
  Card,
  CardActions,
  CardContent,
  Collapse,
  Button,
  Typography,
  Rating,
  useTheme,
  IconButton,
} from '@mui/material'

import { TitleFormat } from '../utils'

const Product = ({
  _id,
  name,
  description,
  price,
  rating,
  category,
  supply,
  stat,
}) => {
  const theme = useTheme()
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card
      sx={{
        backgroundImage: 'none',
        borderRadius: '0.55rem',
        boxShadow: 'none',
        backgroundColor: theme.palette.productScene.product.background,
      }}
    >
      <CardContent sx={{ padding: '16px 16px 8px 16px !important' }}>
        <Typography
          sx={{
            fontSize: 14,
            color: theme.palette.productScene.product.category,
          }}
          gutterBottom
        >
          {TitleFormat(category)}
        </Typography>
        <Typography
          variant='h5'
          component='div'
          sx={{
            fontSize: 14,
            color: theme.palette.productScene.product.title,
          }}
          gutterBottom
        >
          {name}
        </Typography>
        <Typography
          variant='h5'
          component='div'
          gutterBottom
          sx={{
            fontSize: 14,
            color: 'blue',
            marginBottom: '1.5rem',
            color: theme.palette.productScene.product.price,
          }}
        >
          ${Number(price).toFixed(2)}
        </Typography>
        <Rating value={rating} readOnly />
        <Typography variant='body2'>{description}</Typography>
        {!isExpanded ? (
          <CardActions sx={{ padding: '8px 0 0 0', justifyContent: 'end' }}>
            <Button
              variant='primary'
              size='small'
              onClick={() => setIsExpanded(!isExpanded)}
            >
              see More
            </Button>
          </CardActions>
        ) : (
          <CardActions
            sx={{ padding: '0', justifyContent: 'end', margin: '0' }}
          >
            <IconButton onClick={() => setIsExpanded(!isExpanded)}>
              <ExpandLessOutlinedIcon />
            </IconButton>
          </CardActions>
        )}
        <Collapse
          in={isExpanded}
          timeout={'auto'}
          unmountOnExit
          sx={{ color: 'green' }}
        >
          <CardContent
            sx={{
              padding: '0 !important',
              color: theme.palette.productScene.product.actionButtons.moreData,
            }}
          >
            <Typography>ID: {_id}</Typography>
            <Typography>Supply left: {supply}</Typography>
            <Typography>
              Yearly Sales This Year: {stat[0].yearlySalesTotal}
            </Typography>
            <Typography>
              Yearly Units Sold this Year: {stat[0].yearlyTotalSoldUnits}
            </Typography>
          </CardContent>
        </Collapse>
      </CardContent>
    </Card>
  )
}

export default Product
