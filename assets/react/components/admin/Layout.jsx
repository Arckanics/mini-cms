import React from 'react'
import Login from './pages/Login'
import Navbar from './Navbar'
import Content from './Content'
import axios from 'axios'
import { getBaseURL } from '../Functions/app'
import { Route, Routes } from 'react-router-dom'
import Settings from './pages/Settings'

const AdminXML = axios.create({
  baseURL: getBaseURL('mini-admin'),
  headers: {
    'XMLHttpRequest': true,
    'Content-Type': 'application/json'
  }
})

const Pages = [
  {name: "Parametres", path: "/", Page: Settings},
  {name: "Pages", path: "/pages", Page: Settings},
  {name: "Articles", path: "/articles", Page: Settings},
]

const Layout = () => {
  return (
    <section id="layout">
      <Routes>
        {
          Pages.map((p,i) => {
            return <Route key={i} path={`mini-admin${p.path}`} element={<Navbar Pages={Pages}/>} />
          })
        }
      </Routes>
      <Routes>
        <Route path='mini-admin/login' element={<Login ajax={AdminXML} />} />
        {
          Pages.map(({path,name,Page},i) => {
            return <Route key={i} path={`mini-admin${path}`} element={<Content><Page/></Content>} />
          })
        }
      </Routes>
    </section>
  )
}

export default Layout