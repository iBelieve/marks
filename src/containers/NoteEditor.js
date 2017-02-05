import { connect } from 'react-redux'
import { NoteEditor } from '../components'
import { editSelectedNote } from '../actions/notes'

const mapStateToProps = (state) => {
  if (state.notes.selectedId != null) {
    const note = state.notes.byId[state.notes.selectedId]
    return { text: note.text, editorState: note.editorState, visible: true }
  } else {
    return { visible: false }
  }
}

const mapDispatchToProps = dispatch => ({
  onChange: (text, editorState) => dispatch(editSelectedNote(text, editorState))
})

export default connect(mapStateToProps, mapDispatchToProps)(NoteEditor)
