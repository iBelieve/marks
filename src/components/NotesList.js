import React from 'react'
import styled from 'styled-components'
import Toolbar from './Toolbar'
import ToolButton from './ToolButton'

const Wrapper = styled.div`
  width: 250px;
  height: 100%;
  border-right: 1px solid ${props => props.theme.divider};
`

const NotesList = () => (
  <Wrapper>
    <Toolbar border actions={<ToolButton icon="pencil"/>}/>
  </Wrapper>
)

export default NotesList
