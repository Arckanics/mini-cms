import React from 'react'
import Close from '../../../icon/icon-ui/Close'

const ModalEditor = ({ data, schema, title }) => {
  return (
    <section className='modal-editor'>
      <div className='title-bar'>
        <div className='title-bar-txt'>{title}</div>
        <div className='title-bar-close'><Close cls="w-6 h-6" /></div>
      </div>
    </section>
  )
}

export default ModalEditor