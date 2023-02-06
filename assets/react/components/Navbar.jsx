import React from 'react'
import { Link } from 'react-router-dom'
import NavLink from './ui/NavLink'

const Pages = [
  {name: "Parametres", path: "/"},
  {name: "Pages", path: "/pages"},
  {name: "Articles", path: "/articles"},
]

const Navbar = () => {
  return (
    <section id='navbar'>
      <div id="nav-title">
        <h1>Mini-CMS</h1>
      </div>
      <nav>
        <ul>
        {
          Pages.map(({name,path},i) => <NavLink key={i} to={`/mini-admin${path}`.replace(/\/$/g, '')}><div className='link-txt'>{name}</div></NavLink>)
        }
        </ul>
      </nav>
    </section>
  )
}

export default Navbar