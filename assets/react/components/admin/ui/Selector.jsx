import React, { useState } from 'react'
import Expand from '../../../icon/icon-ui/Expand'
import { capitalize } from '../../../Functions/app'

const Selector = ({ cls, list, active, iconCls, children, action }) => {
  const [toggle, setToggle] = useState(false)
  const [lastEvent, setLastEvent] = useState(null)

  const landing = list.find(i => i.id === active)
  const avaible = list.filter(i => i.id !== active)

  const toggleSelect = (e) => {
    e.stopPropagation();
    let $el = e.target
    while ($el.classList.contains('selector') == false) {
      $el = $el.parentNode
    }
    if ((e.type === 'click' && lastEvent === 'click') || e.type !== 'click') {
      setToggle(!toggle)
      lastEvent === 'click' && toggle === true ? $el.blur() : null
    } 
    setLastEvent(e.type);
  }

  const changeValue = (e,v) => {
    toggleSelect(e);
    action(v);
  }



  return (
    <div className={cls ? 'selector ' + cls : 'selector'} onFocus={toggleSelect} onBlur={toggleSelect} tabIndex={-1}>
      { children }
      <div className='opt active' value={landing.id} onClick={toggle ? toggleSelect : null}>
        <div className='txt'>{capitalize(landing.title)}</div><Expand cls={iconCls}/>
      </div>
      {
        toggle ? <div className='opt-wrapper'>
          {
            avaible.map(({id,title},k) => 
              <div key={k} className='opt' value={id} onClick={(e) => changeValue(e,id)} >
                <div className='txt'>{capitalize(title)}</div>
              </div>
            )
          }
        </div> : null
      }
    </div>
  )
}

export default Selector