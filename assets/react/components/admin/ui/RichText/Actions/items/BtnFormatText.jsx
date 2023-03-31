import React from 'react'


const BtnFormatText = ({command, active, item, name}) => {
  let Item = item
  return (
    <button
      title={name}
      onClick={command}
      className={'toolbar-item' + (active ? ' active' : '')}
      name={name}
      >
        { Item && <Item cls='icon' /> }
    </button>)
}
export default BtnFormatText