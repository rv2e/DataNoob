import { SET_ASSIGNMENT, FETCH_ASSIGNMENT } from '../constants/ActionTypes'
import { backend } from '../config'
import $ from 'jquery'
import _ from 'lodash'

const getNewAssignemnt = (dispatch, action) => {
  dispatch({type: 'LOAD_NEW_ASSIGNMENT'})

  $.get(`http://${backend.hostname}:${backend.port}/assignment/${action.id}`)
  .done((response) => {
    console.log(response)
    dispatch({type: 'SET_NEW_ASSIGNMENT', id: action.id})
  })
  .fail(() => {
    // HANDLE FAIL
  })
}

const assignment = store => next => action => {
  switch (action.type) {
    case FETCH_ASSIGNMENT:
      console.log('request to: %s', `${hostname}:${port}/${action.id}`)
      const isNewAssigment = _.isEmpty(store.assignment && store.assignment[action.id])
      if (isNewAssigment) {
        getNewAssignemnt(store.dispatch, action)
      }

      break
    default:
      return next(action)
  }
}

export default assignment
