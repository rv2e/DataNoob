import { SET_ASSIGNMENT, SET_CURRENT_ASSIGNMENT, SET_EDITOR } from '../constants/ActionTypes'

const initialState = {
  0: {
    language: null,
    codeAssignment: null,
    description: null,
    outputConsole: null,
    id: 0
  },
  current: null
}

const createAssignment = (action) => {
  return {
    language: action.language,
    codeAssignment: action.codeAssignment,
    description: action.description,
    outputConsole: action.outputConsole,
    id: action.id
  }
}

const updateCurrentAssignment = (current, assignment) => {
  if (current.id == assignment.id) return assignment
  return { ...current }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ASSIGNMENT:
      const newAssignment = createAssignment(action)
      return {
        ...state,
        [action.id]: newAssignment,
        current: newAssignment
      }
    case SET_CURRENT_ASSIGNMENT:
      return {
        ...state,
        current: { ...state[action.id] }
      }
    case SET_EDITOR:
      let update = {
        ...state[action.id],
        codeAssignment: action.codeAssignment
      }
      return {
        ...state,
        [action.id]: update,
        current: updateCurrentAssignment(state.current, update)
      }
    default:
      return state
  }
}
