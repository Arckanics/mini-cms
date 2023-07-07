import React, { useState } from 'react'

function TxtLabelInput({ id, value, label, placeholder, type, inputCls, divCls = 'input-wrap p-2', labelCls = 'block p-2', onChange, autoComplete = null }) {

  return (
    <div className={divCls}>
      {
        label 
        ? <label htmlFor={id} className={labelCls}>{label}</label>
        : null
      }
      <input type={type} id={id} className={inputCls} 
      name={id} value={value ? value : ""} 
      onChange={onChange} placeholder={placeholder} autoComplete={autoComplete} />
    </div>
  )
}

export default TxtLabelInput