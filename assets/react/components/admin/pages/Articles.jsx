import React, {useEffect} from 'react'
import PagesContainer from '../ui/PagesContainer'
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

  return (
    <PagesContainer title={'Articles'}>
      <div>Articles</div>
    </PagesContainer>
  )
}

export default Articles