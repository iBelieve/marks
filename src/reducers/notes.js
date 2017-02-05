import { ADD_NOTE, SELECT_NOTE, EDIT_SELECTED_NOTE } from '../actions/notes'

const initialState = {
  nextId: 1,
  byId: {},
  allIds: [],
  selectedId: null
}

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        nextId: state.nextId + 1,
        byId: {
          ...state.byId,
          [state.nextId]: {
            title: '',
            text: '',
            editorState: null
          }
        },
        allIds: [...state.allIds, state.nextId],
        selectedId: state.nextId
      }
    case SELECT_NOTE:
      return {
        ...state,
        selectedId: action.id
      }
    case EDIT_SELECTED_NOTE:
      return {
        ...state,
        byId: {
          ...state.byId,
          [state.selectedId]: {
            ...state.byId[state.selectedId],
            text: action.text,
            editorState: action.editorState
          }
        }
      }
    default:
      return state
  }
}
