import React, { useState } from 'react'

function TxtInput({ id, value, label, placeholder, type, inputCls, divCls = 'input-wrap p-2', labelCls = 'block p-2' }) {
  const [isActive, setActive] = useState(false)
  const handleFocus = () => {
    setActive(!isActive);
  }
  return (
    <div className={(divCls + (isActive ? " active" : ""))}>
      <label htmlFor={id} className={labelCls}>{label}</label>
      <input type={type} id={id} className={inputCls} name={id} value={value} onFocus={handleFocus} onBlur={handleFocus} placeholder={placeholder} />
    </div>
  )
}

export default TxtInput