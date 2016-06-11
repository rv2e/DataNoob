import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router'
import { setAssignment } from '../actions/assignment'
import store from '../store'

let OutputConsole = ({ text }) => (
    <p>OutputConsole test</p>
)

const mapStateToProps = (state, ownProps) => {
  return {
    text: state.assignment.text
  }
}

const mapDispatchToProps = (dispatch) => {
  return { }
}

OutputConsole = connect(mapStateToProps, mapDispatchToProps)(OutputConsole)

export default OutputConsole
