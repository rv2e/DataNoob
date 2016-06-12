import React, { Component } from 'react';
import Header from '../containers/Header'

export default class App extends Component {
  render() {
    return (
      <div className='wrapper'>
        <Header/>
        <main className='main' >{this.props.children}</main>
      </div>
    )
  }
}
