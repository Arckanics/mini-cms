import React, { useState } from 'react'
import Login from './pages/Login'
import Navbar from './Navbar'
import Content from './Content'
import axios from 'axios'
import { setBaseUrl, strContains } from '../Functions/app'
import { Route, Routes } from 'react-router-dom'
import Settings from './pages/Settings'
import Footer from './Footer'

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
  const [state, setState] = useState();

  const swapPage = (path) => {
    AdminXML.get(path)
      .then(res => {
        console.log(res);
      })
  }

  return (
    <section id="layout">
      {
        !strContains(window.location.pathname, 'login') && <Navbar Pages={Pages} Ajax={AdminXML} swapPage={swapPage}/>
      }
      <Routes>
        <Route path='mini-admin/login' element={<Login ajax={AdminXML} />} />
        {
          Pages.map(({path,name,Page},i) => {
            return <Route key={i} path={`mini-admin${path}`} element={
              <>
                <Content>
                  <Page/>
                  <Footer/>
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