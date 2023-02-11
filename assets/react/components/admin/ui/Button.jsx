import React from 'react'

const Button = ({ children, btnCls, divCls }) => {
  return (
    <div className={divCls}>
      <button className={btnCls}>{ children }</button>
    </div>
  )
}

export default Button