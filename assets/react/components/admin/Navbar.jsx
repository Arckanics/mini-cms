import React, { useEffect, useState } from 'react'
import NavLi from './ui/NavLi'
import Logout from '../../icon/icon-ui/Logout.jsx'
import { useLocation } from 'react-router-dom'
import { updateTitle, endOfPath } from '../../Functions/app'
import { useDispatch } from 'react-redux'
import { clearData, setUrl } from './redux/reducers/ajaxSlice'

const Navbar = ({Pages}) => {
  const dispatch = useDispatch()
  const location = useLocation()
  const [enable, setEnable] = useState(false)

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

  return (
    <section id='navbar' className={!enable ? 'fadeOutLeft' : ''}>
      <section id="navbar-top">
        <div id="nav-title">
          <h1>Mini-CMS</h1>
        </div>
        <nav id="navigation">
          <ul className='flex flex-col gap-2'>
          {
            Pages.map(
              ({name,path},i) => {
              return <NavLi key={i} to={`/mini-admin${path}`.replace(/\/$/g, '')}
                        onClick={() => {updateTitle(path); dispatch(setUrl(path))}}
                      >
                    <div className='link-txt'>{name}</div>
                    </NavLi>})
          }
          </ul>
        </nav>
      </section>
      <nav id="nav-opts">
        <ul className='icon-nav'>
          <NavLi to="/mini-admin/logout" onClick={handleLogout}><Logout Cls="svg-icon" /></NavLi>
        </ul>
      </nav>
    </section>
  )
}

export default Navbar