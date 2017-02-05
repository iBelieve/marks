import React, { PropTypes } from 'react'
import styled from 'styled-components'
import MarkdownEditor from './MarkdownEditor'

const Wrapper = styled.div`
  padding: 48px;
  flex-grow: 1;
`

export default function NoteEditor({ visible, ...props }) {
  return (
    <Wrapper>
      {visible ? (
        <MarkdownEditor {...props}/>
      ) : (
        <span>No note selected</span>
      )}
    </Wrapper>
  )
}

NoteEditor.propTypes = {
  visible: PropTypes.bool
}

NoteEditor.defaultProps = {
  visible: false
}
