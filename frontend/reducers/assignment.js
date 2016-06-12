import { SET_ASSIGNMENT, SET_CURRENT_ASSIGNMENT,
  SET_EDITOR, RESULT_ASSIGNMENT } from '../constants/ActionTypes'

const initialState = {
  0: {
    language: null,
    codeAssignment: null,
    description: null,
    outputConsole: null,
    isCorrect: null,
    id: 0,
  },
  current: null
}

const createAssignment = (action) => {
  return {
    language: action.language,
    codeAssignment: action.codeAssignment,
    description: action.description,
    outputConsole: action.outputConsole,
    isCorrect: null,
    id: action.id
  }
}

const updateCurrentAssignment = (current, assignment) => {
  if (current.id === assignment.id) return assignment
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
      var update = {
        ...state[action.id],
        codeAssignment: action.codeAssignment
      }
      return {
        ...state,
        [action.id]: update,
        current: updateCurrentAssignment(state.current, update)
      }
    case RESULT_ASSIGNMENT:
      var update = {...state[action.id] }
      update.outputConsole = action.outputConsole
      update.isCorrect = action.isCorrect

      return {
        ...state,
        [action.id]: update,
        current: updateCurrentAssignment(state.current, update)
      }
    default:
      return state
  }
}
