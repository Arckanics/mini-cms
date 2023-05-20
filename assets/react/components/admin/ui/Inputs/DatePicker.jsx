import React, { useEffect, useState } from "react";
import { Calendar, NavPrev, NavNext, Close } from "../../../../icon/icon-ui/";

const DatePicker = ({ change, value }) => {
  value = new Date(value.getTime())
  value.setHours(0, 0, 0, 0);
  const currVal = {
    day: value.getDay(),
    date: value.getDate(),
    month: value.getMonth(),
    year: value.getFullYear(),
  };
  const days = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
  const drawDate = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const [ref, setRef] = useState(null);
  const [dateState, setDateState] = useState(new Date(value.getTime()));

  useEffect(() => {
    ref === null ? setTimeout(() => {
      ref.blur()
      setRef(null)
      setDateState(new Date(value.getTime()))
    }, 150) : null;
    if (ref !== null) {
      const par = document.querySelector('.modal-editor')
      const windowRect = par.getBoundingClientRect()
      const cal = ref.querySelector('.calendar')
      const calendarRect = cal.getBoundingClientRect()

      const result = (windowRect.x + windowRect.width - 6) - calendarRect.x - calendarRect.width
      if (result < 0) {
        console.log(result);
        cal.style.transform = `translateX(${result}px)`
      }
    }
  }, [ref]);

  const changeDate = v => {
    const nDate = dateState;
    nDate.setDate(v);
    change(nDate);
    setRef(null);
  };

  const setDays = () => {
    let count = 0;
    const outPut = [];
    const displayDate = new Date(dateState.getTime());
    displayDate.setDate(1);
    for (let i = 1; i !== displayDate.getDay(); i++) {
      outPut.push(<div key={"dPickEmpty-" + count} className="case empty"></div>);
      count++;
    }
    displayDate.setMonth(displayDate.getMonth() + 1);
    displayDate.setDate(0);
    for (let i = 1; i <= displayDate.getDate(); i++) {
      if (
        i == currVal.date &&
        currVal.month == displayDate.getMonth() &&
        currVal.year == displayDate.getFullYear()
      ) {
        outPut.push(
          <div
            key={"dPick-" + count}
            onClick={() => changeDate(i)}
            className="case active"
          >
            {i}
          </div>
        );
      } else {
        outPut.push(
          <div
            key={"dPick-" + count}
            onClick={() => changeDate(i)}
            className="case"
          >
            {i}
          </div>
        );
      }
      count++;
    }
    return outPut;
  };

  const setMonth = v => {
    let month = dateState.getMonth() + v;
    const nDate = new Date(dateState.getTime());
    nDate.setMonth(month);
    setDateState(nDate);
  };

  const setYear = v => {
    let year = dateState.getFullYear() + v;
    const nDate = new Date(dateState.getTime());
    nDate.setFullYear(year);
    setDateState(nDate);
  };

  return (
    <div
      className="input-calendar"
      onFocus={e => setRef(e.target)}
      onBlur={() => setRef(null)}
      tabIndex={-1}
    >
      <div className="date-txt">{value.toLocaleDateString("fr-FR")}.</div>
      <div className="calendar-icon">
        <Calendar cls="icon" />
      </div>
      {ref !== null ?
      <div className="calendar">
          <div className="calendar-current">
            <div className="text">
              {value.toLocaleDateString("fr-FR", drawDate)}
            </div>
            <div className="btn danger" onClick={() => {
                setTimeout(() => ref.blur(), 150)
                setRef(null)
              }}>
              <Close cls="icon" />
            </div>
          </div>
          <div className="month-year">
            <div className="calendar-month">
              <div className="btn-nav primary" onClick={() => setMonth(-1)}>
                <NavPrev cls="icon" />
              </div>
              <div>
                {dateState.toLocaleDateString("fr-FR", { month: "long" })}
              </div>
              <div className="btn-nav primary" onClick={() => setMonth(1)}>
                <NavNext cls="icon" />
              </div>
            </div>
            <div className="calendar-year">
              <div className="btn-nav primary" onClick={() => setYear(-1)}>
                <NavPrev cls="icon" />
              </div>
              <div>
                {dateState.toLocaleDateString("fr-FR", { year: "numeric" })}
              </div>
              <div className="btn-nav primary" onClick={() => setYear(1)}>
                <NavNext cls="icon" />
              </div>
            </div>
          </div>
          <div className="day-names">
            {days.map((d, i) => (
              <div key={i} className="case">
                {d}.
              </div>
            ))}
          </div>
          <div className="calendar-days">{setDays()}</div>
      </div>
      : null
      }
    </div>
  );
};

export default DatePicker;
