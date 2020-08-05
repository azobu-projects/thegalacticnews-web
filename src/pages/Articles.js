import React from 'react'
import { Link } from 'react-router-dom'
import styled from '@xstyled/emotion'

import { Page, Hero } from '../components'

import articles from '../data/articles.json'

const ArticleCards = styled.div``

const LinkStyled = styled(Link)`
  display: block;
  border: 2;
  margin-bottom: 20;
  padding: 20;
  &:nth-of-type(even) {
    border-color: #aaa;
  }
`

const ArticleCard = styled.div``

const ArticleTitle = styled.h3`
  margin: 0;
`

const Articles = () => {
  return (
    <Page>
      <Hero heading='Articles'></Hero>
      <ArticleCards>
        {articles.map((article, index) => {
          return (
            <LinkStyled key={index} to={`/articles/${article.slug}`}>
              <ArticleCard>
                <ArticleTitle>{article.title}</ArticleTitle>
              </ArticleCard>
            </LinkStyled>
          )
        })}
      </ArticleCards>
    </Page>
  )
}

export default Articles
