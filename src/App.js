import React from 'react'
import styled from 'styled-components'
import { Sidebar } from './components'
import { NoteEditor, NotesList } from './containers'
import { DefaultTheme } from './styles'

const Wrapper = styled.div`
  display: flex;
  height: 100%;
`

export default function App() {
  return (
    <DefaultTheme>
      <Wrapper>
        <Sidebar/>
        <NotesList/>
        <NoteEditor/>
      </Wrapper>
    </DefaultTheme>
  )
}
