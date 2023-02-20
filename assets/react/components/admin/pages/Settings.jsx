import React, { useEffect, useState } from 'react'
import { uppercase } from '../../Functions/app'
import Selector from '../ui/Selector'
import TxtInput from '../ui/TxtInput'

const Settings = ({ data, ajax }) => {

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

  return (
    <div className="content-full">
      <div className='title mb-8'>Paramètres</div>
      <div className='flex flex-col gap-3 py-3 justify-between'>
        {
          state ? <>
            <TxtInput type="text" label={uppercase(changeName("Author"))} id="Author" value={state.Author} placeholder={changeName("Author")}
              inputCls='input-txt w-full' labelCls='label'
            />
            <TxtInput type="text" label={uppercase(changeName("Description"))} id="Description" value={state.Description} placeholder={changeName("Description")}
              inputCls='input-txt w-full' labelCls='label'
            />
            <TxtInput type="text" label={uppercase(changeName("SiteName"))} id="SiteName" value={state.SiteName} placeholder={changeName("SiteName")}
              inputCls='input-txt w-full' labelCls='label'
            />
            <Selector cls='selector' iconCls='icon' active={state.Landing} list={state.Pages}>
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