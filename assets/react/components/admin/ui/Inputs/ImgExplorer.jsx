import React, { useState } from 'react'

const ImgExplorer = ({ label , labelCls, divCls, id, value }) => {

  const [target, setTarget] = useState(null)

  return (
    <div className={divCls}>
      {
        label 
        ? <label htmlFor={(id ? id : null)} className={labelCls}>{label}</label>
        : null
      }
      <div tabIndex={-1} id={(id ? id : null)} className='relative' onFocus={(e) => setTarget(e.target)}>
        { 
          !value 
          ? <div className='btn secondary' >Choisir une image</div>
          : null
        }
        {
          target 
          ? <div className='imgExplorer'>
            
          </div>
          : null
        }
      </div>
    </div>
  )
}

export default ImgExplorer