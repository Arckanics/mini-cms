import React, { useEffect, useState } from 'react'
import { uppercase } from '../../Functions/app'
import TxtInput from '../ui/TxtInput'

const Settings = ({ data, ajax }) => {

  const [state, setState] = useState(null)
  
  useEffect(() => {
    ajax.get(data.url)
      .then(res => {
        setState(res.data.data)
      })
  }, [])

  const objectToArray = (d) => {
    let format = []
    for (const [key, value] of Object.entries(d)) {
      console.log(key, ": ", value);
      format.push({[key]: value})
    }
    return format;
  }

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
            <h1 className='text-xl text-red-500'> choix de page </h1>
          </> : 
          null
        }
      </div>
    </div>
  )
}

export default Settings