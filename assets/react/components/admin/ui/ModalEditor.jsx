import React, { useEffect, useState } from 'react'
import Calendar from '../../../icon/icon-ui/Calendar'
import Close from '../../../icon/icon-ui/Close'
import DatePicker from './DatePicker'
import Selector from './Selector'
import SwitchInput from './SwitchInput'

const ModalEditor = ({ data, schema, title, close }) => {
  const [mData, setData] = useState(null)

  useEffect(() => {
    const empty = {}
    Object.entries(schema).map(([name, par],i) => {
      let val;
      switch (par.type) {
        case "string":
        case "text":
          val = "";
          break;
        case "select":
        case "sorting":
          val = par.list.length - 1
          break;
        case "bool":
          val = false
          break;
        case "date":
          val = new Date();
          break;
        default:
          val = ""
          break;
      }
      empty[name] = val
    })
    !data ? setData({...empty}) : setData({...data})
  }, [])

  return !mData ? null : (
    <section className='modal-editor'>
      <div className='title-bar'>
        <div className='title-bar-txt'>{title}</div>
        <div className='title-bar-close' onClick={close}><Close cls="w-6 h-6" /></div>
      </div>
      <div className='modal-window'>
        {
          Object.entries(schema).map(([key,value],i) => {
            console.log(key, mData[key]);
            let Input;
            switch (value.type) {
              case 'string':
                Input = <div className='flex gap-3'>
                  <label className='input-label p-2 font-bold'>{value.name} :</label>
                  <input className='input-txt secondary' type="text" value={mData[key]} placeholder={value.name}/>
                </div>
                break;
              case 'bool':
                Input = <div className='flex gap-3'>
                  <label className='input-label p-2 font-bold'>{value.name} :</label>
                  <SwitchInput value={mData[key]} />
                </div>
                break;
              case 'sorting':
              case 'select':
                  Input = <div className='flex gap-3'>
                    <label className='input-label p-2 font-bold'>{value.name} :</label>
                    <Selector cls={'secondary p-0'} iconCls={'icon'} list={value.list} active={mData[key]} />
                  </div>
                break;
              case 'date':
                Input = <div className='flex gap-3'>
                  <label className='input-label p-2 font-bold'>{value.name} : </label>
                  <DatePicker value={mData[key]}/>
                </div>
                break;
              default:
                console.log(value.type)
            }

            return <div key = {i} className='modal-field'>{Input}</div>
          })
        }
      </div>
    </section>
  )
}

export default ModalEditor