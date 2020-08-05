import React from 'react'
import { Link } from 'react-router-dom'
import styled from '@xstyled/emotion'

import { Page, Hero } from '../components'

import articles from '../data/articles.json'

const ArticleCards = styled.div`
  width: 720;
`

const LinkStyled = styled(Link)`
  display: block;
  color: text;
  padding: 20;
  &:hover {
    background-color: background;
    box-shadow: 0 8px 6px -6px hsla(0, 0%, 20%, 20%);
  }
`

const ArticleCard = styled.div`
  display: flex;
  align-items: center;
`

const Title = styled.h3`
  padding: 0 20;
  margin: 0;
`

const Image = styled.img`
  height: 100;
  width: 100;
  object-fit: cover;
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
                <Image src={article.imageUrl} />
                <Title>{article.title}</Title>
              </ArticleCard>
            </LinkStyled>
          )
        })}
      </ArticleCards>
    </Page>
  )
}

export default Articles
