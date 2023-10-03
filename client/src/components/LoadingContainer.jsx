import React from 'react'

//import own components
import LoadingBox from './LoadingBox'

const LoadingContainer = ({ children, isLoading, height }) => {
  return (
    <LoadingBox isLoading={isLoading} height={height}>
      {children}
    </LoadingBox>
  )
}

export default LoadingContainer
