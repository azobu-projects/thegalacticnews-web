import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Home, About, Articles, NotFound } from './pages'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/articles' component={Articles} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
