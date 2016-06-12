import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router'
import store from '../store'

let Guide = ({ text }) => (
    <p>Guide test</p>
)

const mapStateToProps = (state, ownProps) => {
  return {
    assignmentText: state.assignment.text
  }
}

const mapDispatchToProps = (dispatch) => {
  return { }
}

Guide = connect(mapStateToProps, mapDispatchToProps)(Guide)

export default Guide
