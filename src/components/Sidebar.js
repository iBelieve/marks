import React from 'react'
import styled from 'styled-components'
import { DarkTheme, colors } from '../styles'
import Toolbar from './Toolbar'
import ToolButton from './ToolButton'

const Wrapper = styled.div`
  background: ${colors.sidebar};
  width: 200px;
  height: 100%;
`

const Sidebar = () => (
  <DarkTheme>
    <Wrapper>
      <Toolbar dark actions={<ToolButton icon="settings"/>}/>
    </Wrapper>
  </DarkTheme>
)

export default Sidebar
