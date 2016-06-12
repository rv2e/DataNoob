import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router'
import { setAssignment } from '../actions/assignment'
import store from '../store'

let OutputConsole = ({ outputConsole, isCorrect}) => (
  <div className={isCorrect === false ? 'panel panel-danger' : 'panel panel-success'}>
    <div className='panel-heading'>
      <h3 className='panel-title'>Console</h3>
    </div>
    <div className='panel-body'>
      <code>{outputConsole}</code>
    </div>
  </div>
)

const mapStateToProps = (state, ownProps) => {
  let isCorrect = state.assignments.current.isCorrect
  let outputConsole = state.assignments.current.outputConsole
  outputConsole = outputConsole || isCorrect !== null ? outputConsole : 'Run the code to see the output...'
  outputConsole = outputConsole ? outputConsole : 'Your code output nothing, try again...'
  return {
    outputConsole: outputConsole,
    isCorrect: isCorrect,
  }
}

const mapDispatchToProps = (dispatch) => {
  return { }
}

OutputConsole = connect(mapStateToProps, mapDispatchToProps)(OutputConsole)

export default OutputConsole
