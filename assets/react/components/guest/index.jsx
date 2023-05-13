import React, { useEffect, useState } from 'react'
import axios from 'axios'
const index = () => {
  const [linkLoad, setLinkLoad] = useState(null)
  const ajax = axios.create({
    headers: {
      "XmlHttpRequest": true
    }
  })
  useEffect(() => {
    !linkLoad ? ajax.get('/page-list').then(res => {
      setLinkLoad([...res.data])
    }) : null
  }, [linkLoad])

  return (
    <>
    </>
  )
}

export default index