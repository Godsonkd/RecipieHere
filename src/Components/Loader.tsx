import React from 'react'
import Loading from "../assets/Loading.svg"

import { StyledLoader } from '../styles/styles'

const Loader = () => {
  return (
    <StyledLoader>
        
        <img  src={Loading} alt="" />
    </StyledLoader>
  )
}

export default Loader
