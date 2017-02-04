import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'
import { Sidebar, NotesList } from './components'
import { DefaultTheme } from './styles'

const Wrapper = styled.div`
  display: flex;
  height: 100%;
`

const notes = [
  { title: 'Hello, world', excerpt: 'This is the excerpt of my note, and it should wrap nicely to another line.' },
  { title: 'Tutorial', excerpt: 'Getting started with this cool new app.' }
]

const App = () => (
  <Router>
    <DefaultTheme>
      <Wrapper>
        <Sidebar/>
        <NotesList notes={notes}/>
        {/* <Route exact path="/" component={Home}/> */}
      </Wrapper>
    </DefaultTheme>
  </Router>
)

export default App
