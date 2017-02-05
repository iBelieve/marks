import { connect } from 'react-redux'
import { NotesList } from '../components'
import { addNote, selectNote } from '../actions/notes'

const mapStateToProps = state => ({
  notes: state.notes.allIds.map(id => ({ ...state.notes.byId[id], id })),
  selectedId: state.notes.selectedId
})

const mapDispatchToProps = dispatch => ({
  onNoteClick: id => dispatch(selectNote(id)),
  addNote: () => dispatch(addNote())
})

export default connect(mapStateToProps, mapDispatchToProps)(NotesList)
