import React from 'react'
import styled, { useColorMode } from '@xstyled/emotion'

import { Page, Hero } from '../components'

const Highlight = styled.p`
  font-size: 42;
  margin: 0;
`

const Row = styled.div`
  display: flex;
  margin-bottom: 100;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 100;
`

const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20;
`

const Number = styled.span`
  font-size: 72;
  font-family: 'Space Mono', monospace;
`

const Logo = styled.img``

const logo = {
  light: '/assets/images/logo-light.svg',
  dark: '/assets/images/logo-dark.svg'
}

const About = () => {
  const [mode] = useColorMode(false)

  return (
    <Page mode='article'>
      <Hero heading='About Us'></Hero>

      <Row>
        <Highlight>
          <b>The Galactic News</b> is dedicated to helping humans and aliens
          understand the universe through interconnected information.
        </Highlight>
      </Row>

      <Row>
        <Column>
          <h4>Our Statistics</h4>
        </Column>
        <Column>
          <Item>
            <Number>300</Number>
            <span>species on staff</span>
          </Item>
          <Item>
            <Number>120</Number>
            <span>planets</span>
          </Item>
        </Column>
        <Column>
          <Item>
            <Number>90</Number>
            <span>languages</span>
          </Item>
          <Item>
            <Number>4.2m</Number>
            <span>subscribers</span>
          </Item>
        </Column>
      </Row>

      <Row>
        <Logo
          src={mode === 'dark' ? logo['dark'] : logo['light']}
          alt='The Galactic News'
        />
      </Row>
    </Page>
  )
}

export default About
