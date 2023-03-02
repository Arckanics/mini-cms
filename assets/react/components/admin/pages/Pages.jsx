import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ContentNav from '../ui/ContentNav'
import axios from 'axios'
import { pushData } from '../redux/reducers/ajaxSlice'

const Pages = ({ url }) => {
  const axiosSet = useSelector((state) => state.ajax.axios)
  const ajax = axios.create({...axiosSet})
  const data = useSelector((state) => state.ajax.data.pages)
  const dispatch = useDispatch()

  useEffect(() => {
    !data ? ajax.get(url)
    .then(res => {
      dispatch(pushData({ name: 'pages', data: res.data }))
    }) : ajax.get('/refresh')
  }, [])

  const header = [
    {tag: 'title', name: 'titre', draw: 'value', colSize: 6},
    {tag: 'settings', name: 'landing', draw: 'bool', colSize: 1}
  ]

  return (
    <div className="content-full">
      <div className='title mb-8'>Pages</div>
      { data && <ContentNav data={data} header={header} action={null} />}
    </div>
  )
}

export default Pages