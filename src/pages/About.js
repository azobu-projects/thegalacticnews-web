import React from 'react'

import { Page, Hero } from '../components'

const About = () => {
  return (
    <Page>
      <Hero heading='About Us'></Hero>

      <div>
        <p>
          <b>The Galactic News</b> is dedicated to helping humans and aliens
          understand the universe through interconnected information.
        </p>
      </div>

      <div>
        <div>
          <span>300</span>
          <span>species on staff</span>
        </div>

        <div>
          <span>90</span>
          <span>languages</span>
        </div>

        <div>
          <span>120</span>
          <span>planets</span>
        </div>

        <div>
          <span>4.2m</span>
          <span>subscribers</span>
        </div>
      </div>
    </Page>
  )
}

export default About
