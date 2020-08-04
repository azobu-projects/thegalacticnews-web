import React from 'react'
import PropTypes from 'prop-types'
import styled from '@xstyled/emotion'

const Heading = styled.h1`
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 100;
  font-size: 48;
  text-align: center;
`

const Hero = ({ heading }) => {
  return (
    <div>
      <Heading>{heading}</Heading>
    </div>
  )
}

Hero.propTypes = {
  heading: PropTypes.string.isRequired
}

export default Hero
