import React, { useEffect, useState } from 'react'
import Calendar from '../../../../icon/icon-ui/Calendar'

const DatePicker = ({ change, value }) => {
  const days = ["Lun","Mar","Mer","Jeu","Ven","Sam","Dim"]
  const displayDate = new Date(value.getTime());
  const drawDate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', }
  const [dateState, setDateState] = useState({
    day: displayDate.getDay(),
    date: displayDate.getDate(),
    month: displayDate.getMonth(),
    year: displayDate.getFullYear()
  })

  const setDays = () => {
    const outPut = []
    const {day,date,month,year} = dateState
    displayDate.setDate(1)
    for (let i = 1; i !== displayDate.getDay(); i++) {
      outPut.push(<div></div>)
    }
    displayDate.setMonth(month+1)
    displayDate.setDate(0)
    for (let i = 1; i <= displayDate.getDate(); i++) {
      if (i == date && displayDate.getMonth() == month && displayDate.getFullYear() == year) {
        outPut.push(<div className='case active'>{i}</div>)
      } else {
        outPut.push(<div className='case'>{i}</div>)
      }
    }
    return outPut;
  }

  setDays()

  return (
    <div className='input-calendar' tabIndex={-1}>
      <div className='date-txt'>{value.toLocaleDateString("fr-FR")}.</div>
      <div className='calendar-icon'>
        <Calendar cls={'icon'} />
      </div>
      <div className='calendar'>
        <div>
          <div className='calendar-current'>
            {value.toLocaleDateString("fr-FR", drawDate)}
          </div>
        </div>
        <div className='day-month-select'>
          <div className='calendar-year'>
            {displayDate.toLocaleDateString("fr-FR", {year: "numeric"})}
          </div>
          <div className='calendar-month'>
            {displayDate.toLocaleDateString("fr-FR", {month: "long"})}
          </div>
        </div>
        <div className='day-names'>
          {days.map((d,i) => <div key={i+(Math.random()*100)} className='case'>{d}.</div>)}
        </div>
        <div className='calendar-days'>
          {setDays()}
        </div>
      </div>
    </div>
  )
}

export default DatePicker