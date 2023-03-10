import React from 'react'
import { useSelector } from 'react-redux'
import { capitalize, isArray } from '../../../Functions/app'
import Success from '../../../icon/icon-ui/Success'
import Close from '../../../icon/icon-ui/Close'


const ContentNav = ({ header, data }) => {

  const setView = (value, set = 'value', tag) => {
    
    switch (true) {
      case new RegExp(/^object\..+/g).test(set):
        let name = set.split('.')[set.split('.').length-1]
        return useSelector((state) => state.ajax.data[`${tag}s`])[Number(value)-1][name]
      case new RegExp(/^bool/g).test(set):
        return value ? <Success cls='h-5 w-5 m-auto icon success' /> : <Close cls='h-5 w-5 m-auto icon false' />
      default:
        return value
    }
  }

  return (
    <section className='content-nav'>
      <div className='content-nav-header'>
        {
          header.map((h, k) => <div key={k} className={`header-field colsize-${h.colSize}`}>{capitalize(h.name)}</div>)
        }
        <div className={`header-field colsize-1`}>{capitalize('actions')}</div>
      </div>
      <div className='content-inner flex flex-col overflow-auto overflow-x-hidden'>
        {
          data && isArray(data) ? data.map((field, k) => <div key={k} className='content-row'>
            {
              header.map(({ tag, draw, colSize }, k) => <div key={k} className={`row-field colsize-${colSize}`}>{setView(field[tag],draw,tag)}</div>)
            }
            <div className={`row-field colsize-1`}>{capitalize('actions')}</div>
          </div>) : null
        }
      </div>
    </section>
  )
}

export default ContentNav