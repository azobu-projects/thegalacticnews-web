import React from 'react'
import styled from '@xstyled/emotion'

const ArticleStyled = styled.article`
  display: flex;
`

const ArticlePart = styled.div`
  margin-right: 20;
`

const ArticleCategory = styled.span`
  font-family: Poppins;
  font-weight: bold;
  font-size: 12;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`

const ArticleTitle = styled.h4`
  margin: 0;
  font-family: Poppins;
  font-size: 16;
  font-weight: normal;
  max-width: 200;
`

const ArticleSmall = () => {
  return (
    <ArticleStyled>
      <ArticlePart>
        <img src='/uploads/images/transporter.jpg' alt='Transporter' />
      </ArticlePart>
      <ArticlePart>
        <ArticleCategory>Tech</ArticleCategory>
        <ArticleTitle>New transporter engine has been discovered</ArticleTitle>
      </ArticlePart>
    </ArticleStyled>
  )
}

export default ArticleSmall
