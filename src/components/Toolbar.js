import React, { PropTypes } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  ${props => props.border && `border-bottom: 1px solid ${props.theme.divider};`}
  color: ${props => props.theme.text};
  height: 38px;
  display: flex;
  -webkit-app-region: drag;
  -webkit-user-select: none;
  cursor: default;
`

const Content = styled.div`
  height: 100%;
  flex-grow: 1;
`

const Actions = styled.div`
  height: 100%;
`

const Toolbar = ({ border, dark, actions, children }) => (
  <Wrapper border={border} dark={dark}>
    <Content>{children}</Content>
    <Actions>{actions}</Actions>
  </Wrapper>
)

Toolbar.propTypes = {
  border: PropTypes.bool,
  dark: PropTypes.bool,
  actions: PropTypes.node,
  children: PropTypes.node
}

Toolbar.defaultProps = {
  border: false,
  dark: false,
  actions: [],
  children: null
}

export default Toolbar
