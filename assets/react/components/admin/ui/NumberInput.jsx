import React from 'react'

const NumberInput = ({ cls, inpCls, change, value }) => {
  return (
    <div className={cls + ' input-number-wrap flex flex-nowrap'}>
      <input type='number' className={inpCls + ' colsize-8'} onChange={change} value={value} /><div className='flex flex-col arrow-btn-group colsize-2' ><span className='arrow-btn' target="up">+</span><span className='arrow-btn' target="down">-</span></div>
    </div>
  )
}

export default NumberInput