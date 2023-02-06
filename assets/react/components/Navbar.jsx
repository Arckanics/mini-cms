import React from 'react'
import NavLi from './ui/NavLi'

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
          Pages.map(({name,path},i) => <NavLi key={i} to={`/mini-admin${path}`.replace(/\/$/g, '')}><div className='link-txt'>{name}</div></NavLi>)
        }
        </ul>
      </nav>
    </section>
  )
}

export default Navbar