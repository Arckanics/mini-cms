import React, { createRef, useEffect } from 'react'

const Button = ({ children, btnCls, divCls, click, disabled = false }) => {

  const btnRef = createRef()

  useEffect(() => {
    btnRef.current.disabled = disabled
    console.log(btnRef.current);
    return () => btnRef = null
  },[])

  return (
    <div className={divCls}>
      <button className={btnCls} onClick={click} ref={btnRef}>{ children }</button>
    </div>
  )
}

export default Button