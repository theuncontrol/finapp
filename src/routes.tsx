import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'

import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

const Routes = () => {
  return (
    <Router>
      <Route exact component={SignIn} path="/" />
      <Route component={SignUp} path="/signup" />
    </Router>
  )
}

export default Routes
