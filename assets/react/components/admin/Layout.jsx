import React, { useEffect } from 'react'
import Login from './pages/Login'
import Navbar from './Navbar'
import Content from './Content'
import { cleanPath } from '../Functions/app'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Settings from './pages/Settings'
import Pages from './pages/Pages'
import Footer from './Footer'
import { setUrl } from './redux/reducers/ajaxSlice'


const Menu = [
  {name: "Parametres", path: "/", Page: Settings},
  {name: "Pages", path: "/pages", Page: Pages},
  {name: "Articles", path: "/articles", Page: Settings},
]

const Layout = () => {
  const url = useSelector((state) => state.ajax.url)
  const dispatch = useDispatch()
  const nav = useNavigate()

  useEffect(() => {
    location.pathname.match(/\/$/, '') ? nav(cleanPath(location.pathname)) : undefined
  })

  const swapPage = (path) => {
    dispatch(setUrl(path))
  }

  url === "" ? swapPage(cleanPath(location.pathname)) : null

  return (
    <section id="layout">
      <Routes>
        <Route path='mini-admin/login' element={<Login/>} />
        {
          Menu.map(({path,Page},i) => {
            return <Route key={i} path={`mini-admin${path}`} element={
              <>
                <Navbar Pages={Menu} swapPage={swapPage}/>
                <Content>
                  <Page data={{url: path}} />
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