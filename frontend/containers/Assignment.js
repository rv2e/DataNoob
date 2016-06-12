import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router'
import { newAssignment } from '../actions/assignment'
import store from '../store'
import Editor from './Editor'
import Guide from '../components/Guide'
import OutputConsole from './OutputConsole'
import _ from 'lodash'

let Assignment = ({ isLoading }) => {
  let component
  if (!isLoading) {
    component = (
      <div className='row'>
        <div className='col-sm-4'>
         <Guide />
        </div>
        <div className='col-sm-8'>
         <Editor />
         <OutputConsole />
        </div>
      </div>
    )
  } else {
    component = <h1>Loading...</h1>
  }

  return (
    <div className='container-fluid jumbotron'>
      {component}
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLoading: _.isEmpty(state.assignments.current)
  }
}

Assignment = connect(mapStateToProps)(Assignment)

const onEnter = (nextLocation) => {
  let id = nextLocation.params.assignment_id
  store.dispatch(newAssignment(id))
}

const AssignmentRoute = <Route path='assignment/:assignment_id'
  component={Assignment} onEnter={onEnter} />

export default AssignmentRoute
