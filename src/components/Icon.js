import React, { PropTypes } from 'react'
import styled from 'styled-components'
import classnames from 'classnames'

const StyledIcon = styled.i`
  color: ${props => props.theme.icon}
`

const Icon = ({ name, className, ...props }) => {
  const iconClass = classnames('mdi', `mdi-${name}`, className)

  return (<StyledIcon className={iconClass} {...props}/>)
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string
}

Icon.defaultProps = {
  className: undefined
}

export default Icon
