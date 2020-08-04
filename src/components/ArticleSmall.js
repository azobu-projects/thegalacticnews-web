import React from 'react'
import styled from '@xstyled/emotion'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const ArticleStyled = styled.article`
  display: flex;
`

const ArticlePart = styled.div`
  margin-right: 20;
`

const ArticleCategory = styled.span`
  font-weight: bold;
  font-size: 12;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  vertical-align: text-top;
`

const ArticleTitle = styled.h4`
  margin: 0;
  font-size: 16;
  font-weight: normal;
  max-width: 200;
`

const ArticleSmall = ({ article }) => {
  return (
    <Link to={`/articles/${article.slug}`}>
      <ArticleStyled>
        <ArticlePart>
          <img src={article.imageUrl} alt={article.alt} />
        </ArticlePart>
        <ArticlePart>
          <ArticleCategory>{article.category}</ArticleCategory>
          <ArticleTitle>{article.title}</ArticleTitle>
        </ArticlePart>
      </ArticleStyled>
    </Link>
  )
}

ArticleSmall.propTypes = {
  article: PropTypes.object.isRequired
}

export default ArticleSmall
