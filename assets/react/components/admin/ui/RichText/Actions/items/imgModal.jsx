import React, {useState} from 'react'
import Close from "../../../../../../icon/icon-ui/Close"
import {Checkbox, SwitchInput, TxtLabelInput} from "../../../"



const ImgModal = ({close, command, props}) => {
  const [inputFile, isInputFile] = useState(true)
  return (
    <div className='toolbar-modal'>
      <div className='modal-titlebar'>
        <div className='title-text' >Image :</div>
        <button className="btn danger"><Close cls="icon" /></button>
      </div>
      <div className='modal-content'>
          <div>
            <label className='p-2 underline' >Type d'image :</label>
            <div className='flex justify-between py-1 px-2'>
              <label className={'font-bold' + (inputFile ? ' color-secondary' : "")}>En ligne</label>
              <SwitchInput cls='secondary neutral' change={() => isInputFile(!inputFile)} value={!inputFile} />
              <label className={'font-bold' + (!inputFile ? ' color-secondary' : "")}>Locale</label>
            </div>
          </div>

          <div className='flex justify-between'>
            <TxtLabelInput 
              placeholder={"https://...."}
              label="Adresse :"
              labelCls='label'
              divCls='input-wrap p-2 secondary'
              inputCls="input-txt secondary"
              type="text"
              id="urlInput"
              value={null} 
            />
          </div>
          <div>
            <label className='p-2 underline' >Position :</label>
            <div className='flex justify-between py-1 px-2'>
              <label className='font-bold'>Gauche</label>
              <SwitchInput cls='secondary neutral' />
              <label className='font-bold'>Droite</label>
            </div>
          </div>
      </div>
    </div>
  )
}

export default ImgModal