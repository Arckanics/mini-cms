import React from 'react'
import Calendar from '../../../icon/icon-ui/Calendar'

const DatePicker = ({ change, value }) => {
  return (
    <div className='input-calendar' tabIndex={-1}>
      <div className='date-txt'>{(value.toLocaleDateString('fr-fr'))}</div>
      <div className='calendar'>
        <Calendar cls={'icon'} />
      </div>
    </div>
  )
}

export default DatePicker