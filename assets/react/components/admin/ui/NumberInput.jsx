import React from 'react'

const NumberInput = ({ cls, inpCls, change, value }) => {
  return (
    <div className={cls + ' flex flex-nowrap'}>
      <input type='number' className={inpCls + ' colsize-9'} onChange={change} value={value} /><div className='flex flex-col arrow-btn-group colsize-1' ><span className='arrow-btn'>-</span><span className='arrow-btn'>+</span></div>
    </div>
  )
}

export default NumberInput