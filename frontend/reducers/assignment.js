import { SET_ASSIGNMENT } from '../constants/ActionTypes'

const initialState = {
  text: 'No Assignment set yet.',
  state: '',
  id: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ASSIGNMENT:
      return {
        ...state,
        text: action.text
      }
    default:
      return state
  }
}
