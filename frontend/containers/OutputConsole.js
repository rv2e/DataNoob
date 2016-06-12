import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router'
import { setAssignment } from '../actions/assignment'
import store from '../store'

let OutputConsole = ({ outputConsole }) => (
  <div className='panel panel-success'>
    <div className='panel-heading'>
      <h3 className='panel-title'>Console</h3>
    </div>
    <div className='panel-body'>
      <code>{outputConsole || 'Run the code to see the output'}</code>
    </div>
  </div>
)

const mapStateToProps = (state, ownProps) => {
  return {
    outputConsole: state.assignments.current.outputConsole
  }
}

const mapDispatchToProps = (dispatch) => {
  return { }
}

OutputConsole = connect(mapStateToProps, mapDispatchToProps)(OutputConsole)

export default OutputConsole
