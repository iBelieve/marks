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

const NotesList = ({ notes }) => (
  <Wrapper>
    <Toolbar border actions={<ToolButton icon="pencil"/>}/>
    <ListView>
      {notes.map((note, index) => (
        <NoteListItem
          key={note.title}
          note={note}
          selected={index === 0}
        />
      ))}
    </ListView>
  </Wrapper>
)

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired
  })).isRequired
}

export default NotesList
