import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'
import ListItem from './ListItem'
import Icon from './Icon'

const StyledListItem = styled(ListItem)`
  ${props => props.selected && css`
    background: ${props.theme.active};
  `}
`

const StyledIcon = styled(Icon)`
  margin-right: 1rem;
`

const SectionListItem = ({ icon, text, selected }) => (
  <StyledListItem selected={selected}>
    {icon && <StyledIcon name={icon}/>}
    {text}
  </StyledListItem>
)

SectionListItem.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string.isRequired,
  selected: PropTypes.bool
}

SectionListItem.defaultProps = {
  icon: null,
  selected: false
}

export default SectionListItem
