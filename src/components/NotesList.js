import React, { PropTypes } from 'react'
import styled from 'styled-components'
import Toolbar from './Toolbar'
import ToolButton from './ToolButton'
import ListView from './ListView'
import NoteListItem from './NoteListItem'

const Wrapper = styled.div`
  width: 250px;
  height: 100%;
  border-right: 1px solid ${props => props.theme.divider};
  display: flex;
  flex-direction: column;
`

const NotesList = ({ notes, selectedNoteId, onNoteClick }) => (
  <Wrapper>
    <Toolbar border actions={<ToolButton icon="pencil"/>}/>
    <ListView>
      {notes.map(note => (
        <NoteListItem
          key={note.id}
          note={note}
          selected={selectedNoteId === note.id}
          onClick={onNoteClick}
        />
      ))}
    </ListView>
  </Wrapper>
)

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired
  })).isRequired,
  selectedNoteId: PropTypes.string,
  onNoteClick: PropTypes.func.isRequired
}

NotesList.defaultProps = {
  selectedNoteId: null
}

export default NotesList
