import { FETCH_ASSIGNMENT, FETCH_RESULT_ASSIGNMENT } from '../constants/ActionTypes'
import { setCurrentAssignment, setAssignment, setResultAssignment } from '../actions/assignment'
import _ from 'lodash'
import request from '../utils/request'

const getNewAssignment = (dispatch, action) => {
  dispatch(setCurrentAssignment(null))
  request(`/assignment/${action.id}`)
  .then((response) => {
    console.log(response)
    dispatch(setAssignment({
      language: response.language,
      codeAssignment: response.editor,
      description: response.description,
      outputConsole: null,
      id: action.id
    }))
  })
  .catch(() => {
    // HANDLE FAIL
  })
}

const getResultAssignment = (dispatch, action) => {
  dispatch({type: 'LOAD_RESULT_ASSIGNMENT'})
  const data = JSON.stringify({code: action.code})
  request(`/assignment/${action.id}`, data, 'POST')
  .then((response) => {
    console.log(response)
    dispatch(setResultAssignment(response.id, response.codeInterpreted, response.isCorrect))
  })
  .catch(() => {
    // HANDLE FAIL
  })
}

const assignment = store => next => action => {
  switch (action.type) {
    case FETCH_ASSIGNMENT:
      const assignments = store.getState().assignments
      const isNewAssigment = _.isEmpty(assignments && assignments[action.id])
      if (isNewAssigment) {
        getNewAssignment(store.dispatch, action)
      } else {
        store.dispatch(setCurrentAssignment(action.id))
      }

      break
    case FETCH_RESULT_ASSIGNMENT:
      getResultAssignment(store.dispatch, action)
      break
    default:
      return next(action)
  }
}

export default assignment
