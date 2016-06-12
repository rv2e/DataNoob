import React, { Component, PropTypes } from 'react'
import { Link, withRouter } from 'react-router'

let NavItem = ({to, children, router, succeed}) => {
  const isActive = router.isActive(to)
  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to}>
      {children}{ succeed ?
        <i className='fa fa-check' style={{color:'green'}}></i> : ''
      }
      </Link>
    </li>
  )
}

NavItem = withRouter(NavItem)

export default NavItem
