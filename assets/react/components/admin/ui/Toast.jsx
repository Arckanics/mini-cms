import React from 'react'
import { useSelector } from 'react-redux'
import { capitalize } from '../../../Functions/app'
import Close from '../../../icon/icon-ui/Close'
import Info from '../../../icon/icon-ui/Info'
import Success from '../../../icon/icon-ui/Success'
import Warning from '../../../icon/icon-ui/Warning'
import Danger from '../../../icon/icon-ui/Danger'

const Toast = () => {
  const data = useSelector((state) => state.notification)
  const { msg, type } = data
  const icons = {
    'Info': <Info cls="h-5 w-5" />,
    'Success': <Success cls="h-5 w-5" />,
    'Warning': <Warning cls="h-5 w-5" />,
    'Danger': <Danger cls="h-5 w-5" />,
  }
  return (
    <div className={'toast '+type}>
      <div className='toast-title'>
        <div className='toast-title-icon'>
          {
            icons[capitalize(type)]
          }
        </div>
        <div className='toast-btn'><button><Close cls="h-5 w-5" /></button></div>
      </div>
      <div className='toast-content'>
        { msg } test TXT
      </div>
    </div>
  )
}

export default Toast