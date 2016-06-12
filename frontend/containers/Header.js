import React, { Component, PropTypes } from 'react'
import { Link, withRouter } from 'react-router'
import NavItem from '../components/NavItem'
import { connect } from 'react-redux'

const Header = ({ assignments }) => (
  <nav className='navbar navbar-default'>
    <div className='container-fluid'>
      <div className='navbar-header'>
        <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#navBar'>
          <span className='icon-bar'></span>
          <span className='icon-bar'></span>
          <span className='icon-bar'></span>
        </button>
        <Link to='/' className='navbar-brand'>Data Noob</Link>
      </div>
      <div className='collapse navbar-collapse' id='navBar'>
        <ul className='nav navbar-nav'>
          <NavItem to='/assignment/1' succeed={assignments['1'] ? assignments['1'].isCorrect : false} >
            Exercise 1
          </NavItem>
          <NavItem to='/assignment/2' succeed={assignments['2'] ? assignments['2'].isCorrect : false} >
              Exercise 2
          </NavItem>
        </ul>
      </div>
    </div>
  </nav>
)

const mapStateToProps = (state) => {
  return {
    assignments: state.assignments
  }
}

export default connect(mapStateToProps)(Header)
