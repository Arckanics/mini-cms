import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { capitalize, isArray } from '../../../Functions/app'
import Success from '../../../icon/icon-ui/Success'
import Close from '../../../icon/icon-ui/Close'
import NumberInput from './NumberInput'
import Checkbox from './Checkbox'


const ContentNav = ({ header, data }) => {
  const [ search, updateSearch ] = useState(null);

  useEffect(() => {
    const sFields = {}
    header.map((h) => sFields[h.tag] = { value: "", active: false})
    updateSearch({...sFields});
  }, [])

  const setView = (value, set = 'value', tag) => {
    
    switch (true) {
      case new RegExp(/^object\..+/g).test(set):
        let name = set.split('.')[set.split('.').length-1]
        return capitalize(useSelector((state) => state.ajax.data[`${tag}s`])[Number(value)-1][name])
      case new RegExp(/^bool/g).test(set):
        return value ? <Success cls='h-6 w-6 m-auto icon success' /> : <Close cls='h-6 w-6 m-auto icon false' />
      case new RegExp(/^num/g).test(set):
      case new RegExp(/^str/g).test(set):
      default:
        return typeof value === 'string' ? capitalize(value) : value
    }
  }

  const searchHandleChange = ( e, field, value ) => {
    e.stopPropagation()
    switch (field) {
      case 'sort':
        value = value < 0 || value == '' ? 0 : value > data.length - 1 ? data.length - 1 : value
        break;
      default:
        value = value.toString()
        break;
    }
    updateSearch({...search, [field] : {...search[field] , value: value}})
  }

  const toggleFilter = (e, checked) => {
    e.stopPropagation();
    updateSearch({...search, [checked] : {...search[checked] , active: !search[checked].active}})
  }

  return (
    <section className='content-nav'>
      <div className='content-nav-header'>
        {
          header.map((h, k) => <div key={k} className={`header-field colsize-${h.colSize}`}>{capitalize(h.name)}</div>)
        }
        <div className={`header-field colsize-2`}>{capitalize('actions')}</div>
      </div>
      <div className='content-nav-search'>
        {
          search ? 
            header.map((h, k) => {
              let Input;
              switch (true) {
                case new RegExp(/^num/gi).test(h.draw):
                  Input = <NumberInput 
                  cls={`secondary colsize-10`} 
                  inpCls="input-number secondary" 
                  change={(e, value) => searchHandleChange(e, h.tag, value)} 
                  value={Number(search[h.tag].value)} 
                  name={h.name}
                />
                break;
                default:
                  Input = <input type='text' className='input-txt secondary colsize-10' onChange={(e) => searchHandleChange(e, h.tag, e.target.value)} placeholder={capitalize(h.name)} value={search[h.tag].value} />
              }

              return <div key={k} className={`search-field colsize-${h.colSize} flex justify-items-stretch flex-nowrap`}>
              <Checkbox cls='secondary' checked={search[h.tag].active} change={(e) => toggleFilter(e, h.tag)}/>
              { Input }
            </div>
            }) :
            null
        }
        <div className={`header-field colsize-2`}></div>
      </div>
      
      <div className='content-inner flex flex-col overflow-auto overflow-x-hidden'>
        {
          data && isArray(data) ? data.map((field, k) => <div key={k} className='content-row'>
            {
              header.map(({ tag, draw, colSize }, k) => <div key={k} className={`row-field colsize-${colSize}`}>{setView(field[tag],draw,tag)}</div>)
            }
            <div className={`row-field colsize-2`}>{capitalize('actions')}</div>
          </div>) : null
        }
      </div>
    </section>
  )
}

export default ContentNav