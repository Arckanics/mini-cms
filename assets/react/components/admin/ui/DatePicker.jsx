import React from 'react'
import Calendar from '../../../icon/icon-ui/Calendar'

const DatePicker = ({ change, value }) => {
  const date = value
    ? value.toLocaleDateString('fr-fr')
    : new Date().toLocaleDateString('fr-fr')
  return (
    <div className='input-calendar' tabIndex={-1}>
      <div className='date-txt'>{date}</div>
      <div className='calendar'>
        <Calendar cls={'icon'} />
      </div>
    </div>
  )
}

export default DatePicker