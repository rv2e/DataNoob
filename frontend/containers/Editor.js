import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router'
import { getResultAssignment } from '../actions/assignment'
import AceEditor from 'react-ace'
import 'brace/mode/python'
import 'brace/theme/twilight'
import 'brace/ext/language_tools'
import store from '../store'

let Editor = ({codeAssignment, id, onClick}) => {
  let input = codeAssignment
  return (
    <div>
      <h3>Editor</h3>
      <AceEditor
        mode='python'
        theme='twilight'
        onChange={(newValue) => input = newValue }
        value={input}
        width=''
        editorProps={{$blockScrolling: true}}
      />
      <button type='button' className='btn btn-info' onClick={() => onClick(input, id)}>
        Run code!
      </button>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    codeAssignment: state.assignment.text,
    id: 1 // CHANGE
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (code, id) => {
      dispatch(getResultAssignment(id, code))
    }
  }
}

Editor = connect(mapStateToProps, mapDispatchToProps)(Editor)
export default Editor
