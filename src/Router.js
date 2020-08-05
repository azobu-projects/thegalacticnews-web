import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import {
  Home,
  About,
  Register,
  Login,
  Logout,
  Articles,
  Article,
  NotFound
} from './pages'
import { ScrollToTop } from './containers'

const Router = () => {
  return (
    <BrowserRouter>
      <>
        <ScrollToTop></ScrollToTop>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
          <Route path='/logout' component={Logout} />
          <Route exact path='/articles' component={Articles} />
          <Route path='/articles/:slug' component={Article} />
          <Route component={NotFound} />
        </Switch>
      </>
    </BrowserRouter>
  )
}

export default Router
