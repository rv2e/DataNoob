import { SET_EDITOR } from '../constants/ActionTypes'

export const setEditor = (codeAssignment, id) => {
  return {
    type: SET_EDITOR,
    codeAssignment, id
  }
}
