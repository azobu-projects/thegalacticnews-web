import React from 'react'
import styled from '@xstyled/emotion'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import ReactHtmlParser from 'react-html-parser'

import { Page, HeroArticle } from '../components'

import articles from '../data/articles.json'

const Image = styled.img`
  max-width: 100%;
`

const Body = styled.div`
  p {
    font-size: 1.2em;
  }
`

const Article = () => {
  const { slug } = useParams()
  const article = articles.find((article) => {
    return article.slug === slug
  })

  if (article) {
    return (
      <Page mode='article'>
        <HeroArticle heading={article.title} author={article.author} />
        <Image src={article.imageUrl} alt={article.title} />
        <Body>{ReactHtmlParser(article.body)}</Body>
      </Page>
    )
  } else {
    return <Page>Article Not Found</Page>
  }
}

Article.propTypes = {
  article: PropTypes.object.isRequired
}

export default Article
