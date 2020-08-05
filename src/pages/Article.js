import React from 'react'
import styled from '@xstyled/emotion'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'

import { PageArticle, HeroArticle } from '../components'

import articles from '../data/articles.json'

const Image = styled.img`
  max-width: 100%;
`

const Article = () => {
  const { slug } = useParams()
  const article = articles.find((article) => {
    return article.slug === slug
  })

  if (article) {
    return (
      <PageArticle>
        <HeroArticle heading={article.title} author={article.author} />
        <Image src={article.imageUrl} alt={article.title} />
      </PageArticle>
    )
  } else {
    return <PageArticle>Article Not Found</PageArticle>
  }
}

Article.propTypes = {
  article: PropTypes.object.isRequired
}

export default Article
