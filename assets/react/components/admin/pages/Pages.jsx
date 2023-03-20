import React, { useEffect } from 'react'
import { PagesContainer, ContentNav } from '../ui'
import { useDispatch, useSelector } from 'react-redux'
import { pushData } from '../redux/reducers/ajaxSlice'
import axios from 'axios'


// CRUD Complet pour les Pages

const Pages = () => {
  const axiosSet = useSelector((state) => state.ajax.axios)
  const ajax = axios.create({...axiosSet, params: {page: 'pages'}})
  const data = useSelector((state) => state.ajax.data.pages)
  const dispatch = useDispatch()

  useEffect(() => {
    ajax.get('/request')
    .then(res => {
      dispatch(pushData({ name: 'pages', data: res.data }))
    }).catch(res => {
      const status = res.response.status
      if (status === 302) {
        location.replace('/mini-admin/logout')
      }
    })
  }, [])

  const header = [
    {tag: 'title', name: 'titre', draw: 'string', colSize: 4},
    {tag: 'sort', name: 'ordre', draw: 'number', colSize: "1-5"},
    {tag: 'settings', name: 'landing', draw: 'bool', colSize: 2}
  ]

  return (
    <PagesContainer title={'Pages'}>
      {data ? <ContentNav data={data} header={header} action={null} /> : null}
    </PagesContainer>
  )
}

export default Pages