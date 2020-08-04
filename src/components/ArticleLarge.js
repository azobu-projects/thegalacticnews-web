import React from 'react'
import styled from '@xstyled/emotion'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const ArticleStyled = styled.article`
  display: flex;
  align-items: flex-end;
  background-image: ;
  min-height: 425;
  max-width: 710;
  margin-bottom: 20;
  color: #fff;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%),
    ${(props) => `url(${props.imageUrl})`};
  background-position: center;
  background-size: cover;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 12px -12px hsla(0, 0%, 20%, 80%);
  }
`

const ArticlePart = styled.div`
  margin: 20;
  max-width: 80%;
`

const ArticleCategory = styled.span`
  font-weight: bold;
  font-size: 18;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`

const ArticleTitle = styled.h4`
  margin: 0;
  font-size: 36;
  font-weight: normal;
`

const ArticleLarge = ({ article }) => {
  return (
    <Link to={`/articles/${article.slug}`}>
      <ArticleStyled imageUrl={article.imageUrl}>
        <ArticlePart>
          <ArticleCategory>{article.category}</ArticleCategory>
          <ArticleTitle>{article.title}</ArticleTitle>
        </ArticlePart>
      </ArticleStyled>
    </Link>
  )
}

ArticleLarge.propTypes = {
  article: PropTypes.object.isRequired
}

export default ArticleLarge
