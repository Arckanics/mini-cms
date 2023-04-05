import React from 'react'

const Image = ({src,altText}) => {
  return (
    <img
      src={src}
      alt={altText}
    />
  )
}

export default Image