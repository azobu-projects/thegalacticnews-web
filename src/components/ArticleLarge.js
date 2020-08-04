import React from 'react'
import styled from '@xstyled/emotion'
import { Link } from 'react-router-dom'

const ArticleStyled = styled.article`
  display: flex;
  align-items: flex-end;
  background-image: ;
  min-height: 425;
  max-width: 710;
  color: #fff;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%),
    ${(props) => `url(${props.imageUrl})`};
  background-position: center;
  background-size: cover;
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

const ArticleLarge = () => {
  return (
    <Link to='/articles/slug'>
      <ArticleStyled imageUrl='/uploads/images/millennium-falcon.jpg'>
        <ArticlePart>
          <ArticleCategory>Mission</ArticleCategory>
          <ArticleTitle>
            Millennium Falcon crew finally docks with the ISS
          </ArticleTitle>
        </ArticlePart>
      </ArticleStyled>
    </Link>
  )
}

export default ArticleLarge
