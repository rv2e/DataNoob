import React, { Component, PropTypes } from 'react'
import { Link, withRouter } from 'react-router'

let NavItem = ({to, children, router}) => {
  const isActive = router.isActive(to)
  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to}>{children}</Link>
    </li>
  )
}

NavItem = withRouter(NavItem)

const Header = () => (
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
          <NavItem to='/assignment/1'>Exercise 1</NavItem>
          <NavItem to='/assignment/2'>Exercise 2</NavItem>
        </ul>
      </div>
    </div>
  </nav>
)

export default Header
