import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router'
import { setAssignment } from '../actions/assignment'
import store from '../store'

let OutputConsole = ({ outputConsole }) => (
    <p>OutputConsole test {outputConsole}</p>
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
