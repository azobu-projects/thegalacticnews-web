import React from 'react'
import styled from '@xstyled/emotion'

import { Page, Hero, LinkAnchor } from '../components'

const HeadingAside = styled.h2`
  text-transform: uppercase;
  letter-spacing: 0.1em;
  display: flex;
  align-items: center;
  margin: 0;
  img {
    margin-right: 10;
  }
`

const ContentRow = styled.div`
  display: flex;
  margin: 100 0;
  justify-content: center;
`

const ContentColumn = styled.div`
  display: flex;
  flex-direction: column;
`

const Home = () => {
  return (
    <Page>
      <Hero heading='Latest Updates' />

      <ContentRow>
        <ContentColumn>
          <HeadingAside>
            <img src='/assets/images/shape-circle.png' alt='Circle' />
            Trending
          </HeadingAside>
          <div>News</div>
          <div>News</div>
          <div>News</div>
          <div>News</div>
          <div>News</div>
        </ContentColumn>

        <ContentColumn>
          <div>Mission</div>
          <div>Mission</div>
          <div>Mission</div>
        </ContentColumn>
      </ContentRow>

      <ContentRow>
        <LinkAnchor to='/articles'>
          <img src='/assets/images/shape-triangle.png' alt='Triangle' />
          More Articles
        </LinkAnchor>
      </ContentRow>
    </Page>
  )
}

export default Home
