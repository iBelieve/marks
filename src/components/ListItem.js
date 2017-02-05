import { PropTypes } from 'react'
import styled, { css } from 'styled-components'
import AbstractButton from './AbstractButton'

const ListItem = styled(AbstractButton)`
  padding: 0.5rem 1.5rem;
  transition: background 0.25s;
  display: block;
  text-align: left;

  &:hover {
    background: ${props => props.theme.hover};
  }

  ${props => props.divider && css`
    border-bottom: 1px solid ${props.theme.divider};
  `}
`

ListItem.propTypes = {
  selected: PropTypes.bool
}

ListItem.defaultProps = {
  selected: false
}

export default ListItem
