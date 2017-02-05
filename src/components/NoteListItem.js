import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'
import ListItem from './ListItem'
import { colors } from '../styles'
import { getNoteTitleAndExcerpt } from '../utils'

const StyledListItem = styled(ListItem)`
  padding: 0.8rem 1.5rem;
  position: relative;

  ${props => props.selected && css`
    background: white;
  `}

  &::after {
    content: '';
    position: absolute;
    left: 0; right: 0; top: 0; bottom: 0;
    border-left: 0.3rem solid ${colors.primary};
    opacity: ${props => props.selected ? 1 : 0};

    transition: opacity 0.25s;
  }
`

const Title = styled.h3`
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-weight: normal;
  opacity: ${props => props.placeholder ? 0.5 : 1};
`

const Excerpt = styled.p`
  margin: 0;
  color: ${props => props.theme.subtext};
  opacity: ${props => props.placeholder ? 0.5 : 1};

  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

export default function NoteListItem({ note, selected, onClick }) {
  const { title, excerpt } = getNoteTitleAndExcerpt(note.text)

  return (
    <StyledListItem divider selected={selected} onClick={() => onClick(note.id)}>
      <Title placeholder={!title}>
        {title || 'A new note'}
      </Title>
      <Excerpt placeholder={!excerpt}>
        {excerpt || 'Your next great idea starts here'}
      </Excerpt>
    </StyledListItem>
  )
}

NoteListItem.propTypes = {
  note: PropTypes.shape({
    text: PropTypes.string.isRequired
  }).isRequired,
  selected: PropTypes.bool,
  onClick: PropTypes.func
}

NoteListItem.defaultProps = {
  selected: false,
  onClick: undefined
}
