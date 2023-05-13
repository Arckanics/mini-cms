import React, { useEffect, useState } from 'react'
import axios from 'axios'
const index = () => {
  const [linkLoad, setLinkLoad] = useState(undefined)
  const ajax = axios.create({
    headers: {
      "XmlHttpRequest": true
    }
  })
  useEffect(() => {
    !linkLoad ? ajax.get('/request/page-list').then(res => {
      setLinkLoad([...res.data.data])
    }) : null
  }, [linkLoad])

  return (
    <>
    </>
  )
}

export default index