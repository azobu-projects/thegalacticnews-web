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

import articles from '../data/articles.json'

const Heading = styled.h2`
  text-transform: uppercase;
  letter-spacing: 0.1em;
  display: flex;
  align-items: center;
  margin-top: 0;
  padding-left: 20;
  color: text;
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
  margin-right: 20;
`

const ColumnMain = styled.div``

const ColumnMainGrid = styled.div`
  margin: 20;
  display: grid;
  grid-row-gap: 20;
  grid-column-gap: 20;
  grid-template-rows: 100%;
  grid-template-columns: 50% 50%;
`

const Home = () => {
  return (
    <Page>
      <Hero heading='Latest Updates' />

      <Row>
        <ColumnAside>
          <Heading>
            <img src='/assets/images/shape-circle.svg' alt='Circle' />
            Trending
          </Heading>
          {articles
            .filter((article) => {
              return article.isFeatured && article.mode === 'small'
            })
            .filter((article, index) => {
              return index < 5
            })
            .map((article, index) => {
              return <ArticleSmall key={index} article={article} />
            })}
        </ColumnAside>

        <ColumnMain>
          {articles
            .filter((article) => {
              return article.isFeatured && article.mode === 'large'
            })
            .filter((article, index) => {
              return index < 1
            })
            .map((article, index) => {
              return <ArticleLarge key={index} article={article} />
            })}
          <ColumnMainGrid>
            {articles
              .filter((article) => {
                return article.isFeatured && article.mode === 'medium'
              })
              .filter((article, index) => {
                return index < 2
              })
              .map((article, index) => {
                return <ArticleMedium key={index} article={article} />
              })}
          </ColumnMainGrid>
        </ColumnMain>
      </Row>

      <Row>
        <LinkAnchor to='/articles'>
          <img src='/assets/images/shape-triangle.svg' alt='Triangle' />
          More Articles
        </LinkAnchor>
      </Row>
    </Page>
  )
}

export default Home
