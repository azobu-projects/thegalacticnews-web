import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Home, About, Articles, Article, NotFound } from './pages'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route exact path='/articles' component={Articles} />
        <Route path='/articles/:slug' component={Article} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
