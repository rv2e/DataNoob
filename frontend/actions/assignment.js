import { SET_ASSIGNMENT, SET_CURRENT_ASSIGNMENT,
  FETCH_ASSIGNMENT, FETCH_RESULT_ASSIGNMENT } from '../constants/ActionTypes'

export const setCurrentAssignment = (id) => {
  return {
    type: SET_CURRENT_ASSIGNMENT,
    id
  }
}

export const setAssignment = ({ language, codeAssignment, description, outputConsole, id }) => {
  return {
    type: SET_ASSIGNMENT,
    language, codeAssignment, description, outputConsole, id
  }
}

export const newAssignment = (id) => {
  return {
    type: FETCH_ASSIGNMENT,
    id
  }
}

export const getResultAssignment = (id, code) => {
  return {
    type: FETCH_RESULT_ASSIGNMENT,
    id,
    code
  }
}
