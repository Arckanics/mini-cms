import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Header, Navbar, Content, Footer } from './components'
import { Provider } from 'react-redux'
import store from "./redux/store"

const index = () => {
  const [linkLoad, setLinkLoad] = useState(undefined)
  const [landing, setLanding] = useState(1)
  const [socials, setSocials] = useState(null)
  const ajax = axios.create({
    headers: {
      "XmlHttpRequest": true
    }
  })
  useEffect(() => {
    !linkLoad ? ajax.get('/request/page-list').then(res => {
      setLanding(res.data.landing)
      setLinkLoad([...res.data.data])
    }) : null
    !socials
    ? ajax.get('/request/socials')
    : null
  }, [linkLoad])

  

  return (
    <Provider store={store}>
      <Header>
        { linkLoad && <Navbar links={linkLoad} landing={landing}/> }
      </Header>
        { linkLoad && <Content /> }
      <Footer>

      </Footer>
      
    </Provider>
  )
}

export default index