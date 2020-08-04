import React from 'react'
import styled from '@emotion/styled'

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #cccccc;
`

const HeaderSegment = styled.div`
  padding: 20px;
`

const Header = () => {
  return (
    <HeaderStyled>
      <HeaderSegment>
        <a href='/menu'>Menu</a>
      </HeaderSegment>
      <HeaderSegment>
        <a href='/'>
          <img src='/assets/images/logo.svg' alt='The Galactic News' />
        </a>
      </HeaderSegment>
      <HeaderSegment>
        <a href='/register'>Register</a>
        <a href='/login'>Login</a>
      </HeaderSegment>
    </HeaderStyled>
  )
}

export default Header
