import React, { useEffect } from 'react'
import axios from 'axios'
const index = () => {

  const ajax = axios.create({
    headers: {
      "XmlHttpRequest": true
    }
  })
  useEffect(() => {
    ajax.get('/page-list')
  }, [])

  return (
    <div>index</div>
  )
}

export default index