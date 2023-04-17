import React from 'react'
import Checked from '../../../../icon/icon-ui/Checked'

const Checkbox = ({ cls, change, checked, children }) => {
  return (
    <div className={"input-checkbox " + cls} onClick={(e) => change(e)}>
      { checked ? <div className='input-checkbox-true'><Checked /></div> : <div className='input-checkbox-false'></div> }
      { children }
    </div>
  )
}

export default Checkbox