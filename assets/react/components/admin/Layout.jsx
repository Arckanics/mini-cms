import React from 'react'
import Login from './pages/Login'
import axios from 'axios'
import { getBaseURL } from '../Functions/app'

const AdminXML = axios.create({
  baseURL: getBaseURL('mini-admin')
})

const Layout = ({ children }) => {
  return (
    <section id="layout">
      {
        !window.location.pathname.match(/login|login\//) ? children : <Login ajax={AdminXML}/>
      }
    </section>
  )
}

export default Layout