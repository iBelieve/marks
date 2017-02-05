import React, { PropTypes } from 'react'
import styled from 'styled-components'
import Toolbar from './Toolbar'
import ToolButton from './ToolButton'
import ListView from './ListView'
import NoteListItem from './NoteListItem'

const Wrapper = styled.div`
  width: 280px;
  height: 100%;
  border-right: 1px solid ${props => props.theme.divider};
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`

const NotesList = ({ notes, selectedId, onNoteClick, addNote }) => (
  <Wrapper>
    <Toolbar border actions={<ToolButton icon="pencil" onClick={addNote}/>}/>
    <ListView>
      {notes.map(note => (
        <NoteListItem
          key={note.id}
          note={note}
          selected={selectedId === note.id}
          onClick={onNoteClick}
        />
      ))}
    </ListView>
  </Wrapper>
)

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired
  })).isRequired,
  selectedId: PropTypes.number,
  onNoteClick: PropTypes.func.isRequired,
  addNote: PropTypes.func.isRequired
}

NotesList.defaultProps = {
  selectedId: null
}

export default NotesList
