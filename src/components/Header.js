import React from 'react'
import styled from '@xstyled/emotion'

import { LinkButton, LinkAnchor } from '../components'

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  border-bottom: 2;
  border-color: #ccc;
  background-color: #fff;
`

const HeaderSegment = styled.div`
  display: flex;
  align-items: center;
  padding: 20;
  a {
    margin-right: 20px;
  }
`

const HeaderSegmentButtons = styled.div`
  display: flex;
  align-items: center;
  padding: 20;
  a {
    margin: 0 5px;
  }
`

const Logo = styled.img``

const Header = () => {
  return (
    <HeaderStyled>
      <HeaderSegment>
        <LinkAnchor to='/'>
          <Logo src='/assets/images/logo.svg' alt='The Galactic News' />
        </LinkAnchor>
        <LinkAnchor to='/about'>About</LinkAnchor>
        <LinkAnchor to='/articles'>Articles</LinkAnchor>
      </HeaderSegment>

      <HeaderSegmentButtons>
        <LinkButton to='/register'>Register</LinkButton>
        <LinkButton to='/login'>Login</LinkButton>
      </HeaderSegmentButtons>
    </HeaderStyled>
  )
}

export default Header
