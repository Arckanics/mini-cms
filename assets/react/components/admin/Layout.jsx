import React, { useEffect, useState } from 'react'
import Login from './pages/Login'
import Navbar from './Navbar'
import Content from './Content'
import axios from 'axios'
import { endOfPath, setBaseUrl, strContains } from '../Functions/app'
import { Route, Routes, useNavigate } from 'react-router-dom'
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
          Pages.map(({path,Page},i) => {
            return <Route key={i} path={`mini-admin${path}`} element={
              <>
                <Navbar Pages={Pages} Ajax={AdminXML} swapPage={swapPage}/>
                <Content>
                  <Page data={state} ajax={AdminXML}/>
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