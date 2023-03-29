import React from 'react'


const BtnFormatText = ({command, active, item, name}) => {
  let Item = item
  return (
    <button
      onClick={command}
      className={'toolbar-item' + (active ? ' active' : '')}
      name={name}
      >
        <Item cls='icon' />
    </button>)
}
export default BtnFormatText