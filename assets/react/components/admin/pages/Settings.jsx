import React, { useEffect, useState } from 'react'
import { capitalize } from '../../Functions/app'
import { useSelector } from 'react-redux'
import Selector from '../ui/Selector'
import TxtInput from '../ui/TxtInput'
import axios from 'axios'

const Settings = ({ data }) => {
  const axiosSet = useSelector((state) => state.ajax.axios)
  const ajax = axios.create({...axiosSet})
  const [state, setState] = useState(null)
  
  useEffect(() => {
    ajax.get(data.url)
      .then(res => {
        setState(res.data.data)
      })
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

  const setLanding = (v) => {
    setState({...state, Landing: v})
  }

  return (
    <div className="content-full">
      <div className='title mb-8'>Paramètres</div>
      <div className='flex flex-col gap-3 py-3 justify-between'>
        {
          state ? <>
            <TxtInput type="text" label={capitalize(changeName("Author"))} id="Author" value={state.Author} placeholder={changeName("Author")}
              inputCls='input-txt w-full secondary' divCls='input-wrap p-2 secondary' labelCls='label'
            />
            <TxtInput type="text" label={capitalize(changeName("Description"))} id="Description" value={state.Description} placeholder={changeName("Description")}
              inputCls='input-txt w-full secondary' divCls='input-wrap p-2 secondary' labelCls='label'
            />
            <TxtInput type="text" label={capitalize(changeName("SiteName"))} id="SiteName" value={state.SiteName} placeholder={changeName("SiteName")}
              inputCls='input-txt w-full secondary' divCls='input-wrap p-2 secondary' labelCls='label'
            />
            <Selector cls='secondary' iconCls='icon' active={state.Landing} list={state.Pages} action={setLanding}>
              <h2 className='block py-2'>Page</h2>
            </Selector>
          </> : 
          null
        }
      </div>
    </div>
  )
}

export default Settings