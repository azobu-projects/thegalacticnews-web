import React from 'react'
import styled from '@xstyled/emotion'

import icons from '../data/socials.json'

const FooterStyled = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000;
  color: #fff;
  padding-top: 100;
  margin-top: 200;
`

const SocialList = styled.div``

const SocialLink = styled.a`
  margin: 0 10px;
`

const Copyright = styled.p`
  margin-top: 50px;
`

const Footer = () => {
  return (
    <FooterStyled>
      <SocialList>
        {icons.map((icon, index) => {
          return (
            <SocialLink key={index} href={icon.url} target='_blank'>
              <img src={icon.imageUrl} alt={icon.title} />
            </SocialLink>
          )
        })}
      </SocialList>
      <Copyright>Copyright © 1970-2020 The Galactic News Int.</Copyright>
    </FooterStyled>
  )
}

export default Footer
