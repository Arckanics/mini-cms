import React from 'react'

const Button = ({ children, btnCls, divCls, click }) => {
  return (
    <div className={divCls}>
      <button className={btnCls} onClick={click}>{ children }</button>
    </div>
  )
}

export default Button