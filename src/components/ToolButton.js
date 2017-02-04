import styled from 'styled-components'
import AbstractButton from './AbstractButton'
// import { colors } from '../styles'

const ToolButton = styled(AbstractButton)`
  width: 38px;
  height: 38px;
  transition: all 0.25s;

  i {
    font-size: 1.2rem;
  }

  &:hover {
    background: ${props => props.theme.hover};
  }
`

export default ToolButton
