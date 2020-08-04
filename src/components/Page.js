import React from 'react'
import PropTypes from 'prop-types'
import styled from '@xstyled/emotion'

import { HeaderContainer, FooterContainer } from '../containers'

const PageStyled = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`

const Main = styled.main`
  flex: 1;
  max-width: 960px;
  margin: 0 auto;
`

const Page = ({ children }) => {
  return (
    <PageStyled>
      <HeaderContainer />
      <Main>{children}</Main>
      <FooterContainer />
    </PageStyled>
  )
}

Page.propTypes = {
  children: PropTypes.any.isRequired
}

export default Page
