import React from 'react'
import { Router } from '@reach/router'
import Login from '../components/modules/Login/Login'

const App = () => (
  <Router>
    <Login path="/app/login" />
  </Router>
)
export default App
