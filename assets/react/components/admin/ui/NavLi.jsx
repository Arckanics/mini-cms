import React from 'react'
import { NavLink } from 'react-router-dom'

const NavLi = ({ children, to, onClick }) => {
  return (
    <li>
      <NavLink className='nav-link' to={to} onClick={onClick}>{ children }</NavLink>
    </li>
  )
}

export default NavLi