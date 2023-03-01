import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ContentNav from '../ui/ContentNav'
import axios from 'axios'

const Pages = ({ data }) => {
  const axiosSet = useSelector((state) => state.ajax.axios)
  const ajax = axios.create({...axiosSet})
  const [state, setState] = useState(null)

  useEffect(() => {
    ajax.get(data.url)
      .then(res => {
        setState(res.data)
      })
  }, [])

  const header = [
    {tag: 'title', name: 'titre', draw: 'value', colSize: 6},
    {tag: 'settings', name: 'landing', draw: 'bool', colSize: 1}
  ]

  return (
    <div className="content-full">
      <div className='title mb-8'>Pages</div>
      { state && <ContentNav data={state} header={header} action={null} />}
    </div>
  )
}

export default Pages