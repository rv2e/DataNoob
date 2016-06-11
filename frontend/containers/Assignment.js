import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router'
import { setAssignment } from '../actions/assignment'
import store from '../store'
import Editor from './Editor'
import Guide from './Guide'
import OutputConsole from './OutputConsole'

let Assignment = ({ assignmentText }) => {
  var component
  if (true) {
    component = (
      <div>
        <div className='col-xs-4'>
         <Guide />
        </div>
        <div className='col-xs-8'>
         <Editor />
         <OutputConsole />
        </div>
      </div>
    )
  } else {
    component = <p>hello</p>
  }
  return (
    <div className='container-fluid jumbotron'>
      <p>{assignmentText}</p>
      {component}
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    assignmentText: state.assignment.text
  }
}

const mapDispatchToProps = (dispatch) => {
  return { }
}

Assignment = connect(mapStateToProps, mapDispatchToProps)(Assignment)

const onEnter = (nextLocation) => {
  var text = ''
  if (nextLocation.params.assignment_id === '1') {
    text = 'you are on the first exercise'
  } else {
    text = 'you are on the second exercise'
  }

  store.dispatch(setAssignment(text))
}

const AssignmentRoute = <Route path='assignment/:assignment_id'
component={Assignment} onEnter={onEnter} />


export default AssignmentRoute
