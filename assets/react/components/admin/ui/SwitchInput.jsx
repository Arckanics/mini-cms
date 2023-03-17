// ui boolean representation

import React from 'react'

const SwitchInput = ({ cls = "", value }) => {
  
  return (
    <div className={'input-switch' + (value ? ' true': ' false') + ` ${cls}`} >
      <div className='input-switch-button'></div>
    </div>
  )
}

export default SwitchInput