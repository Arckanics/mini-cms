import React from 'react'
import Close from '../../../icon/icon-ui/Close'
import Selector from './Selector'
import SwitchInput from './SwitchInput'

const ModalEditor = ({ data, schema, title, close }) => {
  return (
    <section className='modal-editor'>
      <div className='title-bar'>
        <div className='title-bar-txt'>{title}</div>
        <div className='title-bar-close' onClick={close}><Close cls="w-6 h-6" /></div>
      </div>
      <div className='modal-window'>
        {
          Object.entries(schema).map(([key,value],i) => {
            let Input;
            switch (value.type) {
              case 'string':
                Input = <div className='flex gap-3'>
                  <label className='input-label p-2 font-bold'>{value.name} :</label>
                  <input className='input-txt secondary' type="text" value={data ? data[key] : null} placeholder={value.name}/>
                </div>
                break;
              case 'bool':
                Input = <div className='flex gap-3'>
                  <label className='input-label p-2 font-bold'>{value.name} :</label>
                  <SwitchInput value={data ? data[key] : false} />
                </div>
                break;
              case 'sorting':
                  console.log(value);
                  Input = <div className='flex gap-3'>
                    <label className='input-label p-2 font-bold'>{value.name} :</label>
                    <Selector cls={'secondary p-0'} iconCls={'icon'} list={value.list} active={data ? data[key] : value.list[0].id} />
                  </div>
                break;
            }

            return <div key = {i} className='modal-field'>{Input}</div>
          })
        }
      </div>
    </section>
  )
}

export default ModalEditor