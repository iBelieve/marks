import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import Home from './components'
import { Sidebar } from './components'

const App = () => (
  <Router>
    <Sidebar/>
    {/* <Route exact path="/" component={Home}/> */}
  </Router>
)

export default App
