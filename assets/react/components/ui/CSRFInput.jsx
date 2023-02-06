import React from 'react'

const CSRFInput = () => {
  const getToken = () => {
    return document.head.querySelector('meta[name=_token]').getAttribute('value')
  }
  return (
    <input type="hidden" name="token" value={getToken()} />
  )
}

export default CSRFInput