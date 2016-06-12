import { FETCH_ASSIGNMENT, FETCH_RESULT_ASSIGNMENT } from '../constants/ActionTypes'
import _ from 'lodash'
import request from '../utils/request'

const getNewAssignemnt = (dispatch, action) => {
  dispatch({type: 'LOAD_NEW_ASSIGNMENT'})
  request(`/assignment/${action.id}`)
  .then((response) => {
    console.log(response)
    dispatch({type: 'SET_NEW_ASSIGNMENT', id: action.id})
  })
  .catch(() => {
    // HANDLE FAIL
  })
}

const getResultAssignemnt = (dispatch, action) => {
  dispatch({type: 'LOAD_NEW_ASSIGNMENT'})
  const data = JSON.stringify({code: action.code})
  request(`/assignment/${action.id}`, data, 'POST')
  .then((response) => {
    console.log(response)
    dispatch({type: 'RESULT_ASSIGNMENT', result: response})
  })
  .catch(() => {
    // HANDLE FAIL
  })
}

const assignment = store => next => action => {
  switch (action.type) {
    case FETCH_ASSIGNMENT:
      const isNewAssigment = _.isEmpty(store.assignment && store.assignment[action.id])
      if (isNewAssigment) {
        getNewAssignemnt(store.dispatch, action)
      }
      else {
        // store.dispatch()
      }
      break
    case FETCH_RESULT_ASSIGNMENT:
      getResultAssignemnt(store.dispatch, action)
      break
    default:
      return next(action)
  }
}

export default assignment
