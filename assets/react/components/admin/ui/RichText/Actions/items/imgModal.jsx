import React, {useState} from 'react'
import Close from "../../../../../../icon/icon-ui/Close"
import {SwitchInput, TxtLabelInput} from "../../../"



const ImgModal = ({close, update, props, create, command}) => {
  const { atEnd, src } = props
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

          <div className='flex justify-between p-1'>
            <TxtLabelInput 
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