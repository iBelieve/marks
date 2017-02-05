import React from 'react'
import styled from 'styled-components'
import { Sidebar, NotesList } from './components'
import { DefaultTheme } from './styles'

const Wrapper = styled.div`
  display: flex;
  height: 100%;
`

const notes = [
  { id: 1,
    title: 'Hello, world',
    excerpt: 'This is the excerpt of my note, and it should wrap nicely to another line.' },
  { id: 2,
    title: 'Tutorial',
    excerpt: 'Getting started with this cool new app.' }
]

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedNoteId: null
    }
  }

  selectNote = (note) => {
    this.setState({ selectedNoteId: note.id })
  }

  render() {
    const { selectedNoteId } = this.state

    return (
      <DefaultTheme>
        <Wrapper>
          <Sidebar/>
          <NotesList
            notes={notes}
            selectedNoteId={selectedNoteId}
            onNoteClick={this.selectNote}
          />
        </Wrapper>
      </DefaultTheme>
    )
  }
}

export default App
