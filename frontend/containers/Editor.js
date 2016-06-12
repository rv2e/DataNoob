import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router'
import { getResultAssignment } from '../actions/assignment'
import { setEditor } from '../actions/editor'
import AceEditor from 'react-ace'
import 'brace/mode/python'
import 'brace/mode/r'
import 'brace/theme/twilight'
import 'brace/ext/language_tools'
import store from '../store'

class Editor extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      text: null,
      id: null
    }
  }

  render() {
    let { codeAssignment, id, language, onClick, onChange } = this.props
    this.state.text = codeAssignment
    this.state.id = id
    return (
      <div className='panel panel-primary'>
        <div className='panel-heading'>
          <h3 className='panel-title'>Editor</h3>
        </div>
        <div className='panel-body'>
          <AceEditor
            mode={language}
            theme='twilight'
            onChange={(newValue) => this.state.text = newValue }
            value={this.state.text}
            width=''
            height='300px'
            editorProps={{$blockScrolling: true}}
          />
        </div>
        <div className='panel-footer'>
          <button type='button' className='btn btn-info' onClick={() => onClick(this.state.text, id)}>
            Run code!
          </button>
        </div>
      </div>
    )
  }

  // keep the text of the code in the store
  componentWillReceiveProps(nextProps) {
    if ((nextProps.id !== this.state.id) && this.state.id) {
      this.props.onChange(this.state.text, this.state.id)
    }
  }

  // keep the text of the code in the store
  componentWillUnmount(nextProps) {
    this.props.onChange(this.state.text, this.state.id)
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    codeAssignment: state.assignments.current.codeAssignment,
    language: state.assignments.current.language,
    id: state.assignments.current.id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (code, id) => {
      dispatch(getResultAssignment(id, code))
    },

    onChange: (codeAssignment, id) => {
      dispatch(setEditor(codeAssignment, id))
    }
  }
}

Editor = connect(mapStateToProps, mapDispatchToProps)(Editor)
export default Editor
