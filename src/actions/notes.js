export const ADD_NOTE = 'ADD_NOTE'
export const SELECT_NOTE = 'SELECT_NOTE'
export const EDIT_SELECTED_NOTE = 'EDIT_SELECTED_NOTE'

export function addNote() {
  return { type: ADD_NOTE }
}

export function selectNote(id) {
  return { type: SELECT_NOTE, id }
}

export function editSelectedNote(text, editorState) {
  return { type: EDIT_SELECTED_NOTE, text, editorState }
}
