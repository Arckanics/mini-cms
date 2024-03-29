import React from 'react'

const ImageFileInput = ({cls, addCls, browse, id, change, imgBrowse}) => {
  return (
    <div className={cls}>
      <button className={browse} onClick={imgBrowse}>Parcourir</button>
      <label htmlFor={id} className={addCls}>+</label>
      <input 
        type='file' 
        className='hidden'
        id={id}
        accept="image/png, image/jpeg"
        multiple={false}
        onChange={(e) => change(e.nativeEvent)}
      />
    </div>
  )
}

export default ImageFileInput