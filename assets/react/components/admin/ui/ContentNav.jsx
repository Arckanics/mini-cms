import React from 'react'
import { capitalize } from '../../Functions/app'

const ContentNav = ({ header, data }) => {
  return (
    <section className='content-nav'>
      <div className='content-nav-header'>
        {
          header.map((h,k) => <div key={k} className={`header-field colsize-${h.colSize}`}>{capitalize(h.name)}</div>)
        }
      </div>
      <div className='content-inner flex flex-col gap-3 py-3 justify-between overflow-auto overflow-x-hidden'>
        
      </div>
    </section>
  )
}

export default ContentNav