import React from 'react'
import styled from '@xstyled/emotion'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const ArticleStyled = styled.article`
  display: flex;
  padding: 20;
  transition: all 0.2s ease-in-out;
  color: text;
  &:hover {
    background-color: background;
    box-shadow: 0 8px 6px -6px hsla(0, 0%, 20%, 20%);
  }
`

const ArticlePart = styled.div`
  margin-right: 20;
  display: flex;
  flex-direction: column;
`

const Image = styled.img`
  width: 100;
  height: 100;
  object-fit: cover;
  object-position: 50% 50%;
`

const Category = styled.span`
  font-weight: bold;
  font-size: 12;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  vertical-align: text-top;
`

const Title = styled.h4`
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
          <Image src={article.imageUrl} alt={article.alt} />
        </ArticlePart>
        <ArticlePart>
          <Category>{article.category}</Category>
          <Title>{article.title}</Title>
        </ArticlePart>
      </ArticleStyled>
    </Link>
  )
}

ArticleSmall.propTypes = {
  article: PropTypes.object.isRequired
}

export default ArticleSmall
