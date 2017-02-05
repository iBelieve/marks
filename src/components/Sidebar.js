import React from 'react'
import styled from 'styled-components'
import { DarkTheme, colors } from '../styles'
import Toolbar from './Toolbar'
import ToolButton from './ToolButton'
import ListView from './ListView'
import SectionListItem from './SectionListItem'

const Wrapper = styled.div`
  background: ${colors.sidebar};
  width: 200px;
  height: 100%;
  flex-shrink: 0;
`

const Sidebar = () => (
  <DarkTheme>
    <Wrapper>
      <Toolbar dark actions={<ToolButton icon="settings"/>}/>
      <ListView>
        <SectionListItem selected icon="note-multiple-outline" text="All Notes"/>
        <SectionListItem icon="delete" text="Deleted Notes"/>
      </ListView>
    </Wrapper>
  </DarkTheme>
)

export default Sidebar
