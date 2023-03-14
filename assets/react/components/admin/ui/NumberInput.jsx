import React from 'react'

const NumberInput = ({ cls, inpCls, change, value }) => {
  return (
    <div className={cls + ' input-number-wrap flex justify-items-stretch flex-nowrap relative'}>
      <span className='arrow-btn' target="down" onClick={(e) => change(e,value-1)} >-</span><input type='number' className={inpCls + ' colsize-10'} onChange={(e) => change(e, e.target.value)} value={value} /><span className='arrow-btn' target="up" onClick={(e) => change(e,value+1)}>+</span>
    </div>
  )
}

export default NumberInput