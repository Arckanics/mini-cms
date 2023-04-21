import React from 'react'
import { useDispatch } from 'react-redux'
import { setImgKey } from '../../../../redux/reducers/lexicalSlice'

const Image = ({src,altText,decorateKey}) => {
  const dispatch = useDispatch()
  return (
    <img
      src={src}
      alt={altText}
      onClick={() => dispatch(setImgKey(decorateKey))}
    />
  )
}

export default Image