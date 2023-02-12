import React from 'react'
import NavLi from './ui/NavLi'
import Logout from '../../icon/icon-ui/Logout.jsx'

const Pages = [
  {name: "Parametres", path: "/"},
  {name: "Pages", path: "/pages"},
  {name: "Articles", path: "/articles"},
]

const Navbar = () => {

  const handleLogout = () => {
    updateTitle(n)
    console.log('logout');
  }

  const uppercase = (txt) => {
    return txt.charAt(0).toUpperCase() + txt.slice(1)
  }

  const updateTitle = (n) => {
    n = n.replace(/\//g, "")
    let title = document.querySelector('title')
    title.innerText = `Mini-CMS -> ${(n.length > 0 ? uppercase(n) : "Settings")}`
  }

  const setNav = (n) => {
    updateTitle(n)
  }

  return (
    <section id='navbar'>
      <section id="navbar-top">
        <div id="nav-title">
          <h1>Mini-CMS</h1>
        </div>
        <nav id="navigation">
          <ul>
          {
            Pages.map(
              ({name,path},i) => 
              <NavLi key={i} to={`/mini-admin${path}`.replace(/\/$/g, '')}
                onClick={() => setNav(path)}
              >
              <div className='link-txt'>{name}</div>
              </NavLi>)
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