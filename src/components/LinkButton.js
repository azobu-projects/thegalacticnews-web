import React from 'react'
import PropTypes from 'prop-types'
import styled from '@xstyled/emotion'
import { Link } from 'react-router-dom'

const LinkButtonStyled = styled(Link)`
  padding: 10 20;
  border-radius: 100;
  text-decoration: none;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #fff;
  background-color: primary;
  &:hover {
    background-color: secondary;
  }
`

const LinkButton = ({ to, children }) => {
  return <LinkButtonStyled to={to}>{children}</LinkButtonStyled>
}

LinkButton.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired
}

export default LinkButton
