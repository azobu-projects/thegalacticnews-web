import React from 'react'
import styled from '@xstyled/emotion'

import { Page, Hero } from '../components'
import { RegisterFormContainer } from '../containers'

const Row = styled.div`
  max-width: 480;
  margin: 0 auto;
`

const Register = () => {
  return (
    <Page>
      <Hero heading='Create Your Account' />
      <Row>
        <RegisterFormContainer />
      </Row>
    </Page>
  )
}

export default Register
