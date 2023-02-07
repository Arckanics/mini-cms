import React from 'react'

const CSRFInput = () => {
  const getToken = () => {
    let token = document.head.querySelector('meta[name=_token]')
    let key = token.getAttribute('value')
    token.remove()
    return key
  }
  return (
    <input type="hidden" name="_token" value={getToken()} />
  )
}

export default CSRFInput