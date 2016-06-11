import { SET_ASSIGNMENT } from '../constants/ActionTypes'

export const setAssignment = (text) => { 
  return { 
    type: SET_ASSIGNMENT, 
    text 
    }
}
