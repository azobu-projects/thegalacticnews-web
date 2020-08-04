import React from 'react'

import { Page } from '../components'

const Home = () => {
  return (
    <Page>
      <div>
        <h1>Latest Updates</h1>
      </div>

      <div>
        <aside>
          <h2>Trending</h2>
          <div>News</div>
          <div>News</div>
          <div>News</div>
          <div>News</div>
          <div>News</div>
        </aside>
        <section>
          <div>Mission</div>
          <div>Mission</div>
          <div>Mission</div>
        </section>
      </div>

      <div>
        <a href='/articles'>More Articles</a>
      </div>
    </Page>
  )
}

export default Home
