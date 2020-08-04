import React from 'react'
import styled from '@xstyled/emotion'

import { LinkButton, LinkAnchor } from '../components'

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  border-bottom: 2;
  border-color: #ccc;
`

const HeaderSegment = styled.div`
  display: flex;
  align-items: center;
  padding: 20;
  * {
    margin: 0 5px;
  }
`

const Logo = styled.img`
  padding: 0 10;
`

const Header = () => {
  return (
    <HeaderStyled>
      <HeaderSegment>
        <LinkButton to='/menu'>Menu</LinkButton>
        <LinkAnchor to='/'>
          <Logo src='/assets/images/logo.svg' alt='The Galactic News' />
        </LinkAnchor>
      </HeaderSegment>
      <HeaderSegment>
        <LinkButton to='/register'>Register</LinkButton>
        <LinkButton to='/login'>Login</LinkButton>
      </HeaderSegment>
    </HeaderStyled>
  )
}

export default Header
