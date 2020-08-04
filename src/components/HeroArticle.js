import React from 'react'
import PropTypes from 'prop-types'
import styled from '@xstyled/emotion'

const HeroArticleStyled = styled.div`
  margin: 100 0;
`

const Title = styled.h1`
  letter-spacing: 0.1em;
  font-size: 48;
`

const Author = styled.h2`
  font-weight: normal;
`

const HeroArticle = ({ heading, author }) => {
  return (
    <HeroArticleStyled>
      <Title>{heading}</Title>
      <Author>by {author}</Author>
    </HeroArticleStyled>
  )
}

HeroArticle.propTypes = {
  heading: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
}

export default HeroArticle
