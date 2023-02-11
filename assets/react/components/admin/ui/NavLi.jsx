import React from 'react'
import { NavLink } from 'react-router-dom'

const NavLi = ({ children, to }) => {
  return (
    <li>
      <NavLink className='nav-link' to={to}>{ children }</NavLink>
    </li>
  )
}

export default NavLi