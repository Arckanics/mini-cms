// ui boolean representation

import React from 'react'

const SwitchInput = ({ cls = "", value, change }) => {
  
  return (
    <div className={'input-switch' + (value ? ' true': ' false') + ` ${cls}`} onClick={(e) => change(e)}>
      <div className='input-switch-button'></div>
    </div>
  )
}

export default SwitchInput