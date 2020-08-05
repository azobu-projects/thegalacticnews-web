import React from 'react'
import styled, { useColorMode } from '@xstyled/emotion'

import { ColorModeToggle } from '../containers'
import { LinkButton, LinkAnchor } from '../components'

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  border-bottom: 2;
  border-color: border;
  background-color: background;
  transition: background-color 0.2s ease-in-out;
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

const logo = {
  light: '/assets/images/logo-light.svg',
  dark: '/assets/images/logo-dark.svg'
}

const Header = () => {
  const [mode] = useColorMode(false)

  return (
    <HeaderStyled>
      <HeaderSegment>
        <LinkAnchor to='/'>
          <Logo
            src={mode === 'dark' ? logo['dark'] : logo['light']}
            alt='The Galactic News'
          />
        </LinkAnchor>
        <LinkAnchor to='/about'>About</LinkAnchor>
        <LinkAnchor to='/articles'>Articles</LinkAnchor>
      </HeaderSegment>

      <HeaderSegmentButtons>
        <ColorModeToggle></ColorModeToggle>
        <LinkButton to='/register'>Register</LinkButton>
        <LinkButton to='/login'>Login</LinkButton>
      </HeaderSegmentButtons>
    </HeaderStyled>
  )
}

export default Header
