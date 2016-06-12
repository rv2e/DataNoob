import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router'
import store from '../store'

let Guide = ({ description }) => (
    <p>{description}</p>
)

const mapStateToProps = (state, ownProps) => {
  return {
    description: state.assignments.current.description
  }
}

const mapDispatchToProps = (dispatch) => {
  return { }
}

Guide = connect(mapStateToProps, mapDispatchToProps)(Guide)

export default Guide
