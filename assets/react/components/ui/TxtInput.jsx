import React from 'react'

function TxtInput({ id, value, label, placeholder, type, inputCls }) {
  return (
    <div className='p-2'>
      <label htmlFor={id} className='block p-2'>{label}</label>
      <input type={type} id={id} className={inputCls} name={id} value={value} placeholder={placeholder} />
    </div>
  )
}

export default TxtInput