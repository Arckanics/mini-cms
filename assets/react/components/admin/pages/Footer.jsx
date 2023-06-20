import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { pushData } from '../redux/reducers/ajaxSlice'
import axios from 'axios'
import { PagesContainer } from '../ui'
import { SocialCard } from '../ui/Inputs'
import { faAdd } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon as Faw } from '@fortawesome/react-fontawesome'



const Footer = () => {
  const axiosSet = useSelector(state => state.ajax.axios);
  const ajax = axios.create({ ...axiosSet, params: { page: "footer" } });
  const dispatch = useDispatch()
  const data = useSelector(state => state.ajax.data.footer);
  const [cardMake, setCardMake] = useState(false)
  library.add(faAdd)

  useEffect(() => {
    ajax
      .get("/request")
      .then(res => {
        console.log('res');
        dispatch(pushData({ name: "footer", data: [...res.data] }));
      })
      .catch(res => {
        const status = res.response.status;
        if (status === 302) {
          location.replace("/mini-admin/logout");
        }
      });
  }, [])

  const createCard = e => {
    setCardMake(true)
  }

  return (
    <PagesContainer title="Pied de page" inDesign={false} >
      <div className='card-nav'>
        {
          data 
          ? data.map(({name,icon,url},k) => <SocialCard key={k} icon={icon} name={name} url={url} />)
          : null
        }
        {
          !cardMake
          ? <div className='card new' onClick={createCard}>
            <Faw icon="add" className='add-icon' />
          </div>
          : null
        }
      </div>

    </PagesContainer>
  )
}

export default Footer