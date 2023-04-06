import React from 'react'

const Image = ({src,altText,onClick}) => {
  return (
    <img
      src={src}
      alt={altText}
      onClick={onClick}
    />
  )
}

export default Image