import React, { useState } from 'react'
import Expand from '../../../icon/icon-ui/Expand'

const Selector = ({ cls, list, active, iconCls, children }) => {
  const [toggle, setToggle] = useState(false)

  const landing = list.find(i => i.id === active);
  const avaible = list.filter(i => i.id !== active)

  const toggleSelect = (e) => {
    e.stopPropagation()
    setToggle(!toggle);
  }

  return (
    <div className={cls} onFocus={toggleSelect} onBlur={toggleSelect} html-type="select" tabIndex={-1}>
      { children }
      <div className='opt active' value={landing.id}>
        <div className='txt'>{landing.title}</div><Expand cls={iconCls}/>
      </div>
      {
        toggle ? <div className='opt-wrapper'>
          {
            avaible.map((i,k) => 
              <div key={k} className='opt' value={i.id}>
                <div className='txt'>{i.title}</div>
              </div>
            )
          }
        </div> : null
      }
    </div>
  )
}

export default Selector