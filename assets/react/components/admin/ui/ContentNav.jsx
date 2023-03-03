import React from 'react'
import { capitalize, isArray } from '../../../Functions/app'

const ContentNav = ({ header, data }) => {

  const setView = (value, set = 'value') => {
    switch (set) {
      case 'bool':
      case 'boolean':
        return value ? 'true' : 'false';
      case 'value':
      case 'number':
      default:
        return value;
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
              header.map(({ tag, draw, colSize }, k) => <div key={k} className={`row-field colsize-${colSize}`}>{setView(field[tag],draw)}</div>)
            }
            <div className={`row-field colsize-1`}>{capitalize('actions')}</div>
          </div>) : null
        }
      </div>
    </section>
  )
}

export default ContentNav