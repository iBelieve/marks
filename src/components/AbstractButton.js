import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import Icon from './Icon'
import { colors, fonts } from '../styles'

const styles = ({ disabled }) => css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: ${disabled ? 'default' : 'pointer'};
  pointer-events: ${disabled && 'none'};
  box-sizing: border-box;
  appearance: none;
  border-style: none;
  cursor: default;

  transition: all 0.25;

  font-size: 1rem;
  font-family: ${fonts.button};

  color: ${props => props.theme.text};
  background: transparent;
  opacity: ${disabled ? 0.6 : 1};
  padding: 0;

  &:focus {
    outline: none;
  }
`

const StyledLink = styled(Link)`${styles}`
const Anchor = styled.a`${styles}`
const StyledButton = styled.button`${styles}`

const StyledIcon = styled(({ hasText, ...props }) => (<Icon {...props}/>))`
  margin: ${props => props.hasText && (props.right ? '0 0 0 0.5em' : '0 0.5em 0 0')};
  display: inline-flex;
`

StyledIcon.propTypes = {
  name: PropTypes.string.isRequired,
  hasText: PropTypes.bool.isRequired
}

// Main component
const AbstractButton = ({ icon, children, ...props }) => {
  const Element = props.to ? StyledLink : props.href ? Anchor : StyledButton

  return (
    <Element {...props}>
      {icon && <StyledIcon name={icon} hasText={!!children}/>}
      {children}
    </Element>
  )
}

AbstractButton.propTypes = {
  disabled: PropTypes.bool,
  type: PropTypes.string,
  to: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.string,
  children: PropTypes.node
}

AbstractButton.defaultProps = {
  disabled: false,
  type: 'button',
  to: undefined,
  href: undefined,
  icon: undefined,
  children: undefined
}

export default AbstractButton
