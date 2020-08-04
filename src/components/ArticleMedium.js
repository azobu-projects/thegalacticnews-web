import React from 'react'
import styled from '@xstyled/emotion'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const LinkStyled = styled(Link)``

const ArticleStyled = styled.article`
  display: flex;
  align-items: flex-end;
  min-height: 300;
  max-width: 345;
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
  max-width: 90%;
`

const ArticleCategory = styled.span`
  font-weight: bold;
  font-size: 14;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`

const ArticleTitle = styled.h4`
  margin: 0;
  font-size: 18;
  font-weight: normal;
`

const ArticleMedium = ({ article }) => {
  return (
    <LinkStyled to={`/articles/${article.slug}`}>
      <ArticleStyled imageUrl={article.imageUrl}>
        <ArticlePart>
          <ArticleCategory>{article.category}</ArticleCategory>
          <ArticleTitle>{article.title}</ArticleTitle>
        </ArticlePart>
      </ArticleStyled>
    </LinkStyled>
  )
}

ArticleMedium.propTypes = {
  article: PropTypes.object.isRequired
}

export default ArticleMedium
