import React from 'react'

const CSRFInput = () => {
  return (
    <input type="hidden" name="_token" value={getToken()} />
  )
}

export default CSRFInput