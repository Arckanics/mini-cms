import React from 'react'
import Login from './pages/Login'
import Navbar from './Navbar'
import Content from './Content'
import axios from 'axios'
import { setBaseUrl } from '../Functions/app'
import { Route, Routes } from 'react-router-dom'
import Settings from './pages/Settings'

const AdminXML = axios.create({
  baseURL: setBaseUrl('mini-admin'),
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
        <Route path='mini-admin/login' element={<Login ajax={AdminXML} />} />
        {
          Pages.map(({path,name,Page},i) => {
            return <Route key={i} path={`mini-admin${path}`} element={
              <>
                <Navbar Pages={Pages}/>
                <Content>
                  <Page/>
                </Content>
              </>
            } />
          })
        }
      </Routes>
    </section>
  )
}

export default Layout