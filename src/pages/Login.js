import React from 'react'

import { Page, Hero } from '../components'
import { LoginFormContainer } from '../containers'

const Login = () => {
  return (
    <Page>
      <Hero heading='Login to your account' />
      <LoginFormContainer />
    </Page>
  )
}

export default Login
