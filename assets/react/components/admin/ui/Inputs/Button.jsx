import React, { createRef, useEffect } from 'react'

const Button = ({ children, btnCls, divCls, click, disabled }) => {


  return (
    <div className={divCls}>
      { disabled 
        ? <button className={btnCls} onClick={click} disabled>{ children }</button>
        : <button className={btnCls} onClick={click} >{ children }</button>
      }
    </div>
  )
}

export default Button