import React, { useEffect } from 'react'
import { PagesContainer, ContentNav } from '../ui'
import { useDispatch, useSelector } from 'react-redux'
import { pushData } from '../redux/reducers/ajaxSlice'
import axios from 'axios'

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
    {tag: 'title', name: 'titre', draw: 'string', colSize: 4},
    {tag: 'sort', name: 'ordre', draw: 'number', colSize: "1-5"},
    {tag: 'settings', name: 'landing', draw: 'bool', colSize: 2}
  ]

  return (
    <PagesContainer title={'Pages'}>
      { data && <ContentNav data={data} header={header} action={null} /> }
    </PagesContainer>
  )
}

export default Pages