import React, { useEffect, useState } from 'react'
import { capitalize } from '../../../Functions/app'
import { useDispatch, useSelector } from 'react-redux'
import { pushData } from '../redux/reducers/ajaxSlice'
import Selector from '../ui/Selector'
import TxtInput from '../ui/TxtInput'
import axios from 'axios'
import Button from '../ui/Button'

const Settings = ({ url }) => {
  const axiosSet = useSelector((state) => state.ajax.axios)
  const ajax = axios.create({...axiosSet})
  const data = useSelector((state) => state.ajax.data.settings)
  const dispatch = useDispatch()
  const [ change, setChange ] = useState(false)
  
  useEffect(() => {
    !data ? ajax.get(url)
      .then(res => {
        dispatch(pushData({ name: 'settings', data: res.data }))
      }) : ajax.get('/refresh')
  }, [])

  const changeName = (v) => {
    switch (v) {
      case 'Author':
        return 'auteur';
      case 'Description': 
        return 'description';
      case 'SiteName':
        return 'nom du site';
      case 'Landing':
        return 'page d\'accueil';
      default: 
        return '';
    }
  }

  const handleChange = (e, prop) => {
    !change ? setChange(true) : null
    dispatch(pushData({ name: 'settings', data: {...data, [prop]: e.target.value} }))
  }

  const setLanding = (v) => {
    !change ? setChange(true) : null
    dispatch(pushData({ name: 'settings', data: {...data, Landing: v} }))
  }

  return (
    <div className="content-full">
      <div className='title mb-8'>Paramètres</div>
      <div className='flex flex-col gap-3 py-3 justify-between'>
        {
          data ? <>
            <TxtInput type="text" onChange={(e) => handleChange(e, 'Author')} label={capitalize(changeName("Author"))} id="Author" value={data.Author} placeholder={changeName("Author")}
              inputCls='input-txt w-full secondary' divCls='input-wrap p-2 secondary' labelCls='label'
            />
            <TxtInput type="text" onChange={(e) => handleChange(e, 'Description')} label={capitalize(changeName("Description"))} id="Description" value={data.Description} placeholder={changeName("Description")}
              inputCls='input-txt w-full secondary' divCls='input-wrap p-2 secondary' labelCls='label'
            />
            <TxtInput type="text" onChange={(e) => handleChange(e, 'SiteName')} label={capitalize(changeName("SiteName"))} id="SiteName" value={data.SiteName} placeholder={changeName("SiteName")}
              inputCls='input-txt w-full secondary' divCls='input-wrap p-2 secondary' labelCls='label'
            />
            <Selector cls='secondary' iconCls='icon' active={data.Landing} list={data.Pages} action={setLanding}>
              <h2 className='block py-2'>Page</h2>
            </Selector>
          </> : 
          null
        }
        {
          change && <Button btnCls={'btn secondary fadeInLeft'} divCls={"p-2 flex justify-end"}>Sauvegarder</Button>
        }
      </div>
    </div>
  )
}

export default Settings