import React from 'react'
import PropTypes from 'prop-types'
import styled from '@xstyled/emotion'

import { HeaderContainer, FooterContainer } from '../containers'

const PageStyled = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  color: text;
  background-color: backgroundAlt;
  transition: background-color 0.2s ease-in-out;
`

const Main = styled.main`
  flex: 1;
  max-width: ${(props) => (props.mode === 'article' ? '720px' : '1080px')};
  margin: 0 auto;
`

const Page = ({ mode, children }) => {
  return (
    <PageStyled>
      <HeaderContainer />
      <Main mode={mode}>{children}</Main>
      <FooterContainer />
    </PageStyled>
  )
}

Page.propTypes = {
  mode: PropTypes.string,
  children: PropTypes.any.isRequired
}

export default Page
