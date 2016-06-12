import { combineReducers } from 'redux'
import assignments from './assignment'
import { routerReducer } from 'react-router-redux'

const reducers = combineReducers({
  assignments,
  routing: routerReducer
})

export default reducers
