import React from 'react'

const PagesContainer = ({children , title, inDesign = true}) => {
  return (
    <div className="content-full">
      <div className={'title mb-8' + (!inDesign ? ' out-design' : '')}>{title}</div>
      { children }
    </div>
  )
}

export default PagesContainer