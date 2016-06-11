import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router'
import { setAssignment } from '../actions/assignment'
import store from '../store'

let Editor = ({ text }) => (
  <p>Editor</p>
)

const mapStateToProps = (state, ownProps) => {
  return {
    assignmentText: state.assignment.text
  }
}

const mapDispatchToProps = (dispatch) => {
  return { }
}

Editor = connect(mapStateToProps, mapDispatchToProps)(Editor)

export default Editor
