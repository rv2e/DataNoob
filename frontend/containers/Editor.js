import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router'
import AceEditor from 'react-ace'
import 'brace/mode/python'
import 'brace/theme/twilight'
import 'brace/ext/language_tools'
import store from '../store'

let Editor = ({codeAssignment, onClick}) => {
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
      <button type='button' className='btn btn-info' onClick={() => onClick(input)}>
        Run code!
      </button>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    codeAssignment: state.assignment.text
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (code) => {
      console.log(code);
      console.log('----------')
    }
  }
}

Editor = connect(mapStateToProps, mapDispatchToProps)(Editor)
export default Editor
