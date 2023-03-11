import React, { useEffect } from 'react'
import Login from './pages/Login'
import Navbar from './Navbar'
import Content from './Content'
import { cleanPath } from '../../Functions/app'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Settings from './pages/Settings'
import Pages from './pages/Pages'
import Footer from './Footer'
import { setUrl } from './redux/reducers/ajaxSlice'
import Articles from './pages/Articles'
import Toast from './ui/Toast'


const Menu = [
  {name: "Parametres", path: "/", Page: Settings},
  {name: "Pages", path: "/pages", Page: Pages},
  {name: "Articles", path: "/articles", Page: Articles},
]

const Layout = () => {
  const url = useSelector((state) => state.ajax.url)
  const dispatch = useDispatch()
  const nav = useNavigate()

  useEffect(() => {
    url === "" ? swapPage(cleanPath(location.pathname)) : null
    location.pathname.match(/\/$/, '') ? nav(cleanPath(location.pathname)) : undefined
  }, [])

  return (
    <section id="layout">
      <Routes>
        <Route path='mini-admin/login' element={<Login/>} />
        {
          Menu.map(({path,Page},i) => {
            return <Route key={i} path={`mini-admin${path}`} element={
              <>
                <Navbar Pages={Menu} />
                <Content>
                  <Page url={path} />
                  <Footer/>
                </Content>
              </>
            } />
          })
        }
      </Routes>
      <Toast/>
    </section>
  )
}

export default Layout