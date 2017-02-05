import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'
import ListItem from './ListItem'
import { colors } from '../styles'

const StyledListItem = styled(ListItem)`
  padding: 0.8rem 1.5rem;

  ${props => props.selected && css`
    padding-left: 1.2rem;
    border-left: 0.3rem solid ${colors.primary};
    background: white;
  `}
`

const Title = styled.h3`
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-weight: normal;
`

const Excerpt = styled.p`
  margin: 0;
  color: ${props => props.theme.subtext}
`

const NoteListItem = ({ note, selected, onClick }) => (
  <StyledListItem divider selected={selected} onClick={() => onClick(note)}>
    <Title>{note.title}</Title>
    <Excerpt>{note.excerpt}</Excerpt>
  </StyledListItem>
)

NoteListItem.propTypes = {
  note: PropTypes.shape({
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired
  }).isRequired,
  selected: PropTypes.bool,
  onClick: PropTypes.func
}

NoteListItem.defaultProps = {
  selected: false,
  onClick: undefined
}

export default NoteListItem
