import React from 'react'

const NumberInput = ({ cls, inpCls, change, value }) => {
  return (
    <div className={cls + ' input-number-wrap flex justify-items-stretch flex-nowrap relative'}>
      <span className='arrow-btn' target="down">-</span><input type='number' className={inpCls + ' colsize-10'} onChange={change} value={value + 1} /><span className='arrow-btn' target="up">+</span>
    </div>
  )
}

export default NumberInput