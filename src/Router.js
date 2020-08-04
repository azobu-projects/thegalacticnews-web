import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Home, NotFound } from './pages'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
