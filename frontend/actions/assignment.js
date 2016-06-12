import { SET_ASSIGNMENT, FETCH_ASSIGNMENT } from '../constants/ActionTypes'

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
