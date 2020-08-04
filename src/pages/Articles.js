import React from 'react'
import { Link } from 'react-router-dom'
import styled from '@xstyled/emotion'

import { Page, Hero } from '../components'

import articles from '../data/articles.json'

const ArticleCard = styled.div`
  padding: 20;
  border: 2;
  margin-bottom: 20;
`

const Articles = () => {
  return (
    <Page>
      <Hero heading='Articles'></Hero>
      {articles.map((article, index) => {
        return (
          <Link key={index} to={`/articles/${article.slug}`}>
            <ArticleCard>
              <h3>{article.title}</h3>
            </ArticleCard>
          </Link>
        )
      })}
    </Page>
  )
}

export default Articles
