import React, { useState } from 'react'

function TxtLabelInput({ id, value, label, placeholder, type, inputCls, divCls = 'input-wrap p-2', labelCls = 'block p-2', onChange }) {
  const [isActive, setActive] = useState(false)
  const handleFocus = () => {
    setActive(!isActive);
  }
  return (
    <div className={(divCls + (isActive ? " active" : ""))}>
      {
        label 
        ? <label htmlFor={id} className={labelCls}>{label}</label>
        : null
      }
      <input type={type} id={id} className={inputCls} name={id} value={value ? value : ""} onFocus={handleFocus} onBlur={handleFocus} onChange={onChange} placeholder={placeholder} />
    </div>
  )
}

export default TxtLabelInput