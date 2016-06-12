import { SET_ASSIGNMENT, FETCH_ASSIGNMENT, FETCH_RESULT_ASSIGNMENT } from '../constants/ActionTypes'

export const setAssignment = (text) => {
  return {
    type: SET_ASSIGNMENT,
    text
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
