import { SET_ASSIGNMENT, FETCH_ASSIGNMENT } from '../constants/ActionTypes'
import { backend } from '../config'
import bb from 'bluebird'
import _ from 'lodash'

const request = (path) => {
  return new bb.Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    const uri = encodeURI(`://${backend.hostname}:${backend.port}${path}`)
    xhr.open('GET', uri);
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.onload = function() {
      if (xhr.status === 200) {
        console.log(xhr)
        try {
          const response = JSON.parse(xhr.responseText)
          resolve(response)
        } catch (error) {
          reject(xhr)
        }
      } else {
        reject(xhr)
      }
    }

    xhr.send(JSON.stringify({
      name: 'John Smith',
      age: 34
    }))
  })
}

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

const assignment = store => next => action => {
  switch (action.type) {
    case FETCH_ASSIGNMENT:
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
