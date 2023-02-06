import React from 'react'
import { Link } from 'react-router-dom'

const NavLink = ({ children, to }) => {
  return (
    <li>
      <Link className='nav-link' to={to}>{ children }</Link>
    </li>
  )
}

export default NavLink