import React, { useEffect, useState } from 'react'
import { Calendar, NavPrev, NavNext } from '../../../../icon/icon-ui/'


const DatePicker = ({ change, value }) => {
  value.setHours(0,0,0,0);
  const currVal = {
    day: value.getDay(),
    date: value.getDate(),
    month: value.getMonth(),
    year: value.getFullYear(),
  }
  const days = ["Lun","Mar","Mer","Jeu","Ven","Sam","Dim"]
  const drawDate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', }
  const [dateState, setDateState] = useState(new Date(value.getTime()))

  const changeDate = (v) => {
    const nDate = dateState
    nDate.setDate(v)
    change(nDate)
  }

  const setDays = () => {
    let count = 0;
    const outPut = []
    const displayDate = new Date(dateState.getTime())
    displayDate.setDate(1)
    for (let i = 1; i !== displayDate.getDay(); i++) {
      outPut.push(<div key={('dPick-'+count)} className='case empty'></div>)
      count++
    }
    displayDate.setMonth(displayDate.getMonth()+1)
    displayDate.setDate(0)
    for (let i = 1; i <= displayDate.getDate(); i++) {
      if (i == currVal.date && currVal.month == displayDate.getMonth() && currVal.year == displayDate.getFullYear()) {
        outPut.push(<div key={('dPick-'+count)} onClick={() => changeDate(i)} className='case active'>{i}</div>)
      } else {
        outPut.push(<div key={('dPick-'+count)} onClick={() => changeDate(i)} className='case'>{i}</div>)
      }
      count++
    }
    return outPut;
  }

  const setMonth = (v) => {
    let month = dateState.getMonth() + v
    const nDate = new Date(dateState.getTime())
    nDate.setMonth(month)
    setDateState(nDate)
  }

  const setYear = (v) => {
    let year = dateState.getFullYear() + v
    const nDate = new Date(dateState.getTime())
    nDate.setFullYear(year)
    setDateState(nDate)
  }

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
          <div className='calendar-month'>
            <div className='btn-nav primary' onClick={() => setMonth(-1)}>
              <NavPrev cls="icon" />
            </div>
            <div>{dateState.toLocaleDateString("fr-FR", {month: "long"})}</div>
            <div className='btn-nav primary' onClick={() => setMonth(1)}>
              <NavNext cls="icon" />
            </div>
          </div>
          <div className='calendar-year'>
            <div className='btn-nav primary' onClick={() => setYear(-1)}>
              <NavPrev cls="icon" />
            </div>
            <div>{dateState.toLocaleDateString("fr-FR", {year: "numeric"})}</div>
            <div className='btn-nav primary' onClick={() => setYear(1)}>
              <NavNext cls="icon" />
            </div>
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