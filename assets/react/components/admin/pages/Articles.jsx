import React, { useEffect, useState } from 'react'
import { PagesContainer, ContentNav, ModalEditor } from '../ui'
import { useSelector, useDispatch } from 'react-redux'
import { pushData } from '../redux/reducers/ajaxSlice'
import axios from 'axios'

// CRUD Complet pour les Articles

const Articles = () => {
  const axiosSet = useSelector((state) => state.ajax.axios)
  const ajax = axios.create({...axiosSet, params: {page: 'articles'}})
  const articles = useSelector((state) => state.ajax.data.articles)
  const pages = useSelector((state) => state.ajax.data.pages)
  const dispatch = useDispatch()
  const [modal, setModal] = useState({enable: false, data: null, title: ''})

  useEffect(() => {
    ajax.get('/request')
    .then(res => {
      dispatch(pushData({ name: 'articles', data: res.data }))
    }).catch(res => {
      const status = res.response.status
      if (status === 302) {
        location.replace('/mini-admin/logout')
      }
    })

    ajax.get('/request', {...axiosSet, params: {page: 'pages'}})
    .then(res => {
      dispatch(pushData({ name: 'pages', data: res.data }))
    }).catch(res => {
      const status = res.response.status
      if (status === 302) {
        location.replace('/mini-admin/logout')
      }
    })
  }, [])

  const closeModal = () => {
    setModal({...modal, enable: false})
  }
  // envoie des données
  const sendData = ({type, where, data}) => {

  }


  // ouvre l'édition d'articles
  const updateArticle = (id) => {
    const article = articles.find(a => a.id == id)
    setModal({...modal, enable: true, title: 'Modifier', data: article})
  }

  // supprime les articles
  const removeArticle = (id) => {
    console.log(id);
  }

  const header = [
    {tag: 'title', name: 'titre', draw: 'string', colSize: 2},
    {tag: 'sort', name: 'ordre', draw: 'number', colSize: "1-5"},
    {tag: 'page', name: 'page', draw: 'object.title', colSize: 2},
    {tag: 'published', name: 'visible', draw: 'bool', colSize: 1},
    {tag: 'isdynamic', name: 'dynamique', draw: 'bool', colSize: 1}
  ]

  return (
    <PagesContainer title={'Articles'}>
      { typeof articles === 'object' && typeof pages === 'object' ? <ContentNav 
        data={articles} header={header} 
        update={updateArticle} remove={removeArticle} 
        /> 
        : 
        null
      }
      {
        // fenêtre d'édition et création des articles
        modal.enable ? 
        <ModalEditor data={modal.data} title={modal.title} close={closeModal} command={sendData}
          schema={
            {
              isdynamic: {type: "bool", name: 'Dynamique'},
              publishbegin: {type: 'date', name: "Début", draw: "title"},
              publishend: {type: 'date', name: "Fin", draw: "title"},
              title: {type: "string", name: "Titre"},
              pages: {type: 'select', name: "Page", draw: "title", list: pages},
              sort: {type: "sorting", name: 'Ordre', list: articles},
              published: {type: "bool", name: 'Visible'},
              content: {type: "text", name: 'Contenu'},
            }
          } /> : null
      }
    </PagesContainer>
  )
}

export default Articles