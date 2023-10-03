import React from 'react'
import { Box, useMediaQuery } from '@mui/material'

import Header from 'components/Header'
import { useGetProductsQuery } from 'state/api'
import Product from '../../components/Product'
import { containerStyleScene, containerStyle } from '../constants'
import LoadingContainer from 'components/LoadingContainer'

const Products = () => {
  const { data, isLoading } = useGetProductsQuery()
  const isNonMobile = useMediaQuery('(min-width:1000px)')
  return (
    <Box sx={containerStyleScene}>
      <Header title={'products'} />
      <Box sx={containerStyle}>
        <LoadingContainer isLoading={isLoading}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
              justifyContent: 'space-between',
              rowGap: '20px',
              columnGap: '1.33%',

              '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' },
            }}
          >
            {data?.map(
              ({
                _id,
                name,
                description,
                price,
                rating,
                category,
                supply,
                stat,
              }) => (
                <Product
                  key={_id}
                  _id={_id}
                  name={name}
                  description={description}
                  price={price}
                  rating={rating}
                  category={category}
                  supply={supply}
                  stat={stat}
                />
              )
            )}
          </Box>
        </LoadingContainer>
      </Box>
    </Box>
  )
}

export default Products
