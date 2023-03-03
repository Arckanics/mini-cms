import React from 'react'

const PagesContainer = ({children , title}) => {
  return (
    <div className="content-full">
      <div className='title mb-8'>{title}</div>
      { children }
    </div>
  )
}

export default PagesContainer