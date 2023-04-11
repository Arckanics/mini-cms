import React, {useState} from 'react'
import Close from "../../../../../../icon/icon-ui/Close"
import {ImageFileInput, SwitchInput, TxtLabelInput} from "../../../"
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { notify } from '../../../../redux/reducers/notificationSlice'



const ImgModal = ({close, update, props, create, command}) => {
  const dispatch = useDispatch()
  const cfg = useSelector((state) => state.ajax.axios)
  const xml = axios.create({...cfg, headers: {...cfg.headers, 'Content-Type' : 'multipart/form-data'}})
  const { atEnd, src, isFile } = props

  const fileSys = (e) => {
    const file = e.target.files[0];
    if (file) {
      const form = new FormData();
      form.append("image", file)
      xml.post('/fileupload', form)
        .then(res => {
          console.log(res);
          dispatch(notify({
            type: "success",
            msg: "image importée !"
          }))
          const data = res.data
          update({ name: 'src',
            value: `${data.path}/${data.name}`})
          
        })
        .catch(res => {
          console.log(res);
        })
    }
  }

  const imgBrowse = () => {
    xml.get('/imgbrowser')
      .then(res => {
        console.log(res);
      })
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
              <label className={'font-bold' + (!isFile ? ' color-secondary' : "")}>En ligne</label>
              <SwitchInput 
                cls='secondary neutral' 
                change={() => update(
                  {name:'isFile', value: !isFile}
                  )
                } 
                value={isFile} />
              <label className={'font-bold' + (isFile ? ' color-secondary' : "")}>Locale</label>
            </div>
          </div>

          <div className='p-1'>
            { isFile 
              ? <ImageFileInput 
                  cls="flex gap-1 p-1"
                  addCls='btn secondary p-1 w-7 grow-0'
                  browse="btn p-1 grey grow block"
                  id="sendFile"
                  change={fileSys}
                  imgBrowse={imgBrowse}
                />
              : <TxtLabelInput 
                  placeholder={"https://...."}
                  label="Adresse :"
                  labelCls='label'
                  divCls='input-wrap p-2 secondary'
                  inputCls="input-txt secondary"
                  type="text"
                  id="urlInput"
                  value={src}
                  onChange={(e) => update({name:'src',value: e.target.value})}
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