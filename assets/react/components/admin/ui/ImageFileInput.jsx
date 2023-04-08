import React from 'react'

const ImageFileInput = ({cls, addCls, browse, id}) => {
  return (
    <div className={cls}>
      <button className={browse}>Parcourir</button>
      <label htmlFor={id} className={addCls}>+</label>
      <input type='file' className='hidden' id={id} accept="image/png, image/jpeg"/>
    </div>
  )
}

export default ImageFileInput