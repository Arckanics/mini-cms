import React from 'react'
import Login from './pages/Login'

const Layout = ({ children }) => {
  return (
    <section id="layout">
      {
        !window.location.pathname.match(/login|login\//) ? children : <Login/>
      }
    </section>
  )
}

export default Layout