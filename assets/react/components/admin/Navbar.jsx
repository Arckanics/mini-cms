import React, { useEffect, useState } from 'react'
import { Menu, Logout } from '../../icon/icon-ui/'
import { FontAwesomeIcon as Faw } from '@fortawesome/react-fontawesome'
import { NavLink, useLocation } from 'react-router-dom'
import { updateTitle, endOfPath } from '../../Functions/app'
import { useDispatch } from 'react-redux'
import { clearData, setUrl } from './redux/reducers/ajaxSlice'


import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faPowerOff } from '@fortawesome/free-solid-svg-icons'

library.add(faBars, faPowerOff)

const Navbar = ({Pages}) => {
  const dispatch = useDispatch()
  const location = useLocation()
  const [enable, setEnable] = useState(false)
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    updateTitle(endOfPath(location.pathname))
    setTimeout(() => {
      setEnable(true)
    }, 50)

  }, [])

  const handleLogout = () => {
    updateTitle(n)
    dispatch(clearData())
  }

  const handleActive = e => {
    e.preventDefault();
    e.stopPropagation();
    console.log(toggle);
    setToggle(!toggle)
  }

  return (
    <section id='navbar' className={!enable ? 'fadeOutLeft' : ''}>
      <section id="navbar-top">
        <div id="nav-title">
          <h1>Mini-CMS</h1>
        </div>
        <nav id="navigation">
          <ul className='icon-nav mobile'>
            <li>
              <div onClick={handleActive} className={'nav-link' + (toggle ? " active" : "")}><Faw icon="bars" className='svg-icon' /></div>
            </li>
          </ul>
          <ul className={'nav-item-menu flex flex-col gap-2' + (toggle ? " toggle" : "")}>
          {
            Pages.map(
              ({name,path},i) => {
              return <li key={"navli"+i}>
                      <NavLink className='nav-link' to={`/mini-admin${path}`.replace(/\/$/g, '')} onClick={() => {setToggle(false); updateTitle(path); dispatch(setUrl(path)) }} end>
                      <div className='link-txt'>{name}</div>
                      </NavLink>
                    </li>})
          }
          </ul>
        </nav>
      </section>
      <nav id="nav-opts">
        <ul className='icon-nav'>
          <li>
            <NavLink className='nav-link reverse' to="/mini-admin/logout" onClick={handleLogout} end><Faw icon="power-off" className='svg-icon' rotate={90} /></NavLink>
          </li>
        </ul>
      </nav>
    </section>
  )
}

export default Navbar