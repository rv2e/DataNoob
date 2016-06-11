import { combineReducers } from 'redux'
import  outputConsole from './outputConsole'
import  editor from './editor'
import assignment from './assignment'
import { routerReducer } from 'react-router-redux'

const reducers = combineReducers({
  outputConsole,
  assignment,
  editor,
  routing: routerReducer
})

export default reducers
