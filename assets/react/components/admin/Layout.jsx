import React, { useEffect, useState } from 'react'
import Login from './pages/Login'
import Navbar from './Navbar'
import Content from './Content'
import axios from 'axios'
import { endOfPath, setBaseUrl, strContains } from '../Functions/app'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Settings from './pages/Settings'
import Pages from './pages/Pages'
import Footer from './Footer'

const AdminXML = axios.create({
  baseURL: setBaseUrl('mini-admin'),
  headers: {
    'XMLHttpRequest': true,
    'Content-Type': 'application/json'
  }
})

const Menu = [
  {name: "Parametres", path: "/", Page: Settings},
  {name: "Pages", path: "/pages", Page: Pages},
  {name: "Articles", path: "/articles", Page: Settings},
]

const Layout = () => {
  const [state, setState] = useState({});
  const nav = useNavigate()

  useEffect(() => {
    swapPage(endOfPath(location.pathname));
    return location.pathname.match(/\/$/, '') ? nav(location.pathname.replace(/\/$/, '')) : undefined
  }, [])

  const swapPage = (path) => {
    setState({url: path})
  }

  return (
    <section id="layout">
      <Routes>
        <Route path='mini-admin/login' element={<Login ajax={AdminXML} />} />
        {
          Menu.map(({path,Page},i) => {
            return <Route key={i} path={`mini-admin${path}`} element={
              <>
                <Navbar Pages={Menu} Ajax={AdminXML} swapPage={swapPage}/>
                <Content>
                  <Page data={{url: path}} ajax={AdminXML}/>
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