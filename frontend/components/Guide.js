import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router'
import store from '../store'

let Guide = ({ description }) => (
  <div className='panel panel-info'>
    <div className='panel-heading'>
      <h3 className='panel-title'>Description</h3>
    </div>
    <div className='panel-body'>
      {description}
    </div>
  </div>
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
