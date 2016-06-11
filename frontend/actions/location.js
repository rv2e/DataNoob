import { SET_LOCATION } from '../constants/ActionTypes'

export const setLocation = (location) => {
  return {
    type: SET_LOCATION,
    nextLocation: location
  }
}
