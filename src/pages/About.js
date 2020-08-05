import React from 'react'
import styled from '@xstyled/emotion'

import { PageArticle, Hero } from '../components'

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

const About = () => {
  return (
    <PageArticle>
      <Hero heading='About Us'></Hero>

      <Row>
        <Highlight>
          <b>The Galactic News</b> is dedicated to helping humans and aliens
          understand the universe through interconnected information.
        </Highlight>
      </Row>

      <h4>Our Statistics</h4>

      <Row>
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
    </PageArticle>
  )
}

export default About
