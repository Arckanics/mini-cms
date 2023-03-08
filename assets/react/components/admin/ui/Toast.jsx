import React from 'react'
import { useSelector } from 'react-redux'
import Close from '../../../icon/icon-ui/Close'

const Toast = () => {
  const data = useSelector((state) => state.notification)
  const { msg, type } = data
  return (
    <div className={'toast '+type}>
      <div className='toast-btn'><button><Close cls="h-6 w-6" /></button></div>
      <div className='toast-content'>
        { msg } test TXT
      </div>
    </div>
  )
}

export default Toast