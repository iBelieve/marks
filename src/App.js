import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'
import { Sidebar, NotesList } from './components'
import { DefaultTheme } from './styles'

const Wrapper = styled.div`
  display: flex;
  height: 100%;
`

const App = () => (
  <Router>
    <DefaultTheme>
      <Wrapper>
        <Sidebar/>
        <NotesList/>
        {/* <Route exact path="/" component={Home}/> */}
      </Wrapper>
    </DefaultTheme>
  </Router>
)

export default App
