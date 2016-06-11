import { SET_LOCATION } from '../constants/ActionTypes'

const location = store => next => action => {
  switch (action.type) {
    case SET_LOCATION: {
      console.log('new location %s', action.nextLocation.location.pathname)
    }
  }
  return next(action)
}

export default location
