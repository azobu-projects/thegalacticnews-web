import React from 'react'
import styled from '@xstyled/emotion'

import {
  Page,
  Hero,
  LinkAnchor,
  ArticleSmall,
  ArticleMedium,
  ArticleLarge
} from '../components'

const Heading = styled.h2`
  text-transform: uppercase;
  letter-spacing: 0.1em;
  display: flex;
  align-items: center;
  img {
    margin-right: 10;
  }
`

const Row = styled.div`
  display: flex;
  margin: 100 0;
  justify-content: center;
`

const ColumnAside = styled.div`
  display: flex;
  flex-direction: column;
  & > * {
    margin-bottom: 20;
  }
`

const ColumnMain = styled.div``

const Home = () => {
  return (
    <Page>
      <Hero heading='Latest Updates' />

      <Row>
        <ColumnAside>
          <Heading>
            <img src='/assets/images/shape-circle.png' alt='Circle' />
            Trending
          </Heading>
          <ArticleSmall />
          <ArticleSmall />
          <ArticleSmall />
          <ArticleSmall />
          <ArticleSmall />
        </ColumnAside>

        <ColumnMain>
          <ArticleLarge />
          <ArticleMedium />
          <ArticleMedium />
        </ColumnMain>
      </Row>

      <Row>
        <LinkAnchor to='/articles'>
          <img src='/assets/images/shape-triangle.png' alt='Triangle' />
          More Articles
        </LinkAnchor>
      </Row>
    </Page>
  )
}

export default Home
