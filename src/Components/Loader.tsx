import React from 'react'
import Loading from "../assets/Loading.svg"

import { StyledLoader } from '../styles/styles'

const Loader = () => {
  return (
    <StyledLoader>
        
        <img width={200} height={200} src={Loading} alt="" />
    </StyledLoader>
  )
}

export default Loader
