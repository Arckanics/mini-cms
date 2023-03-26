import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { capitalize } from '../../../Functions/app'
import Close from '../../../icon/icon-ui/Close'
import Info from '../../../icon/icon-ui/Info'
import Success from '../../../icon/icon-ui/Success'
import Warning from '../../../icon/icon-ui/Warning'
import Danger from '../../../icon/icon-ui/Danger'
import { notifyClose, notifyKeep } from '../redux/reducers/notificationSlice'

const Toast = () => {
  const data = useSelector((state) => state.notification)
  const dispatch = useDispatch()
  const { msg, type, status } = data
  const icons = {
    'Info': <Info cls="h-5 w-5" />,
    'Success': <Success cls="h-5 w-5" />,
    'Warning': <Warning cls="h-5 w-5" />,
    'Danger': <Danger cls="h-5 w-5" />,
  }

  const close = () => dispatch(notifyClose())

  return (
    <div className={`toast ${type} ${status}`} 
      onMouseEnter={() => dispatch(notifyKeep({event: 'stay'}))} 
      onMouseLeave={() => dispatch(notifyKeep({event: 'close', func: setTimeout(() => dispatch(notifyClose()), 1400)}) )}>
      <div className='toast-title'>
        <div className='toast-title-icon'>
          {
            icons[capitalize(type)]
          }
        </div>
        <div className='toast-btn'><button onClick={close}><Close cls="h-5 w-5" /></button></div>
      </div>
      <div className='toast-content'>
        { msg }
      </div>
    </div>
  )
}

export default Toast