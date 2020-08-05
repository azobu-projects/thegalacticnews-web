import React from 'react'

import { Page, Hero } from '../components'
import { RegisterFormContainer } from '../containers'

const Register = () => {
  return (
    <Page>
      <Hero heading='Create Your Account' />
      <RegisterFormContainer />
    </Page>
  )
}

export default Register
