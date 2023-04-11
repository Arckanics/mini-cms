import React, {useState} from 'react'
import Close from "../../../../../../icon/icon-ui/Close"
import {ImageFileInput, SwitchInput, TxtLabelInput} from "../../../"
import { useSelector } from 'react-redux'
import axios from 'axios'



const ImgModal = ({close, update, props, create, command}) => {
  const cfg = useSelector((state) => state.ajax.axios)
  const xml = axios.create({...cfg, headers: {...cfg.headers, 'Content-Type' : 'multipart/form-data'}})
  const { atEnd, src } = props

  const fileSys = (e) => {
    const file = e.target.files[0];
    if (file) {
      const form = new FormData();
      form.append("image", file)
      xml.post('/fileupload', form)
        .then(res => {
          console.log(res);
        })
        .catch(res => {
          console.log(res);
        })
    }
  }
  return (
    <div className='toolbar-modal'>
      <div className='modal-titlebar'>
        <div className='title-text' >Image :</div>
        <button className="btn danger" onClick={close}><Close cls="icon" /></button>
      </div>
      <div className='modal-content'>
          <div>
            <label className='p-2 underline' >Type d'image :</label>
            <div className='flex justify-between py-1 px-2'>
              <label className={'font-bold' + (!src.isFile ? ' color-secondary' : "")}>En ligne</label>
              <SwitchInput 
                cls='secondary neutral' 
                change={() => update(
                  {name:'src', value:{...src, isFile: !src.isFile}}
                  )
                } 
                value={src.isFile} />
              <label className={'font-bold' + (src.isFile ? ' color-secondary' : "")}>Locale</label>
            </div>
          </div>

          <div className='p-1'>
            { src.isFile 
              ? <ImageFileInput 
                  cls="flex gap-1 p-1"
                  addCls='btn secondary p-1 w-7 grow-0'
                  browse="btn p-1 grey grow block"
                  id="sendFile"
                  change={fileSys}
                />
              : <TxtLabelInput 
                  placeholder={"https://...."}
                  label="Adresse :"
                  labelCls='label'
                  divCls='input-wrap p-2 secondary'
                  inputCls="input-txt secondary"
                  type="text"
                  id="urlInput"
                  value={props.src.url}
                  onChange={(e) => update({name:'src',value: {
                    ...src,
                    url: e.target.value,
                  }})}
                /> 
            }
          </div>
          <div>
            <label className='p-2 underline' >Position :</label>
            <div className='flex justify-between py-1 px-2'>
              <label className={'font-bold' + (!atEnd ? ' color-secondary' : "")}>Gauche</label>
              <SwitchInput cls='secondary neutral' value={atEnd} change={() => update({name:'atEnd',value: !atEnd})}/>
              <label className={'font-bold' + (atEnd ? ' color-secondary' : "")}>Droite</label>
            </div>
          </div>

          { create 
            ? <div className='py-1 px-2'><button className='btn secondary w-full rounded-lg p-1' onClick={command}>Insérer</button></div>
            : null
          }
      </div>
    </div>
  )
}

export default ImgModal