import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Header, Navbar } from './components'
const index = () => {
  const [linkLoad, setLinkLoad] = useState(undefined)
  const [landing, setLanding] = useState(1)
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
  }, [linkLoad])

  return (
    <>
      <Header>
        <Navbar links={linkLoad} landing={landing}/>
      </Header>
    </>
  )
}

export default index