import React, {useEffect} from 'react'
import PagesContainer from '../ui/PagesContainer'
import ContentNav from '../ui/ContentNav'
import { useSelector, useDispatch } from 'react-redux'
import { pushData } from '../redux/reducers/ajaxSlice'
import axios from 'axios'

const Articles = ({ url }) => {
  const axiosSet = useSelector((state) => state.ajax.axios)
  const ajax = axios.create({...axiosSet})
  const data = useSelector((state) => state.ajax.data.articles)
  const dispatch = useDispatch()

  useEffect(() => {
    !data ? ajax.get(url)
    .then(res => {
      dispatch(pushData({ name: 'articles', data: res.data }))
    }) : ajax.get('/refresh')
  }, [])

  const header = [
    {tag: 'title', name: 'titre', draw: 'value', colSize: 8},
    {tag: 'page_id', name: 'page', draw: 'value', colSize: 1},
    {tag: 'published', name: 'Visible', draw: 'bool', colSize: 1},
    {tag: 'is_dynamic', name: 'Dynamique', draw: 'bool', colSize: 1}
  ]

  return (
    <PagesContainer title={'Articles'}>
      { data && <ContentNav data={data} header={header} action={null} /> }
    </PagesContainer>
  )
}

export default Articles