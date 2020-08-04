import React from 'react'

import { HeaderContainer, FooterContainer } from '../containers'

const Page = ({ children }) => {
  return (
    <main>
      <HeaderContainer />
      {children}
      <FooterContainer />
    </main>
  )
}

export default Page
