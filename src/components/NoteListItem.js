import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'
import ListItem from './ListItem'
import { colors } from '../styles'

const StyledListItem = styled(ListItem)`
  padding: 0.8rem 1.5rem;
  position: relative;

  ${props => props.selected && css`
    background: white;

    &::after {
      content: '';
      position: absolute;
      left: 0; right: 0; top: 0; bottom: 0;
      border-left: 0.3rem solid ${colors.primary};
    }
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
