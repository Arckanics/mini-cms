import React, { useEffect, useState } from "react";
import { Calendar, NavPrev, NavNext, Close } from "../../../../icon/icon-ui/";

const DatePicker = ({ change, value }) => {
  const currVal = {
    day: value.getDay(),
    date: value.getDate(),
    month: value.getMonth(),
    year: value.getFullYear(),
  };
  const drawDate = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const [ref, setRef] = useState(null);
  const [dateState, setDateState] = useState(new Date(value.getTime()));

  useEffect(() => {
    openCal()
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
      outPut.push(
        <div key={"dPickEmpty-" + count} className="case empty"></div>
      );
      count++;
    }
    displayDate.setMonth(displayDate.getMonth() + 1);
    displayDate.setDate(0);
    const fYear = displayDate.getFullYear()
    const fMonth = displayDate.getMonth()
    for (let i = 1; i <= displayDate.getDate(); i++) {
      if (
        i == currVal.date &&
        currVal.month == fMonth &&
        currVal.year == fYear
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

  const openCal = e => {
    !e  
    ? () => {
      const par = document.querySelector(".modal-editor");
      const windowRect = par.getBoundingClientRect();
      const cal = ref.querySelector(".calendar");
      const calendarRect = cal.getBoundingClientRect();

      const result =
        windowRect.x +
        windowRect.width -
        6 -
        calendarRect.x -
        calendarRect.width;
      if (result < 0) {
        console.log(result);
        cal.style.transform = `translateX(${result}px)`;
      }
    } 
    : setRef(e.target)
  }

  return (
    <div
      className="input-calendar"
      onFocus={openCal}
      onBlur={() => setRef(null)}
      tabIndex={-1}
    >
      <div className="date-txt">{value.toLocaleDateString("fr-FR")}.</div>
      <div className="calendar-icon">
        <Calendar cls="icon" />
      </div>
      {ref !== null ? (
        <div className="calendar">
          <div className="calendar-current">
            <div className="text">
              {value.toLocaleDateString("fr-FR", drawDate)}
            </div>
            <div
              className="btn danger"
              onClick={() => {
                setTimeout(() => ref.blur(), 150);
                setRef(null);
              }}
            >
              <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" >
                <path d="M480 618 270 828q-9 9-21 9t-21-9q-9-9-9-21t9-21l210-210-210-210q-9-9-9-21t9-21q9-9 21-9t21 9l210 210 210-210q9-9 21-9t21 9q9 9 9 21t-9 21L522 576l210 210q9 9 9 21t-9 21q-9 9-21 9t-21-9L480 618Z" />
              </svg>
            </div>
          </div>
          <div className="month-year">
            <div className="calendar-month">
              <div className="btn-nav primary" onClick={() => setMonth(-1)}>
                <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"><path d="M539 794 341 596q-5-5-7-10t-2-11q0-6 2-11t7-10l199-199q9-9 21.5-9t21.5 9q9 9 8.5 22t-9.5 22L406 575l177 177q9 9 9 21t-9 21q-9 9-22 9t-22-9Z"/></svg>
              </div>
              <div>
                {dateState.toLocaleDateString("fr-FR", { month: "long" })} {' '}
                {dateState.toLocaleDateString("fr-FR", { year: "numeric" })}
              </div>
              <div className="btn-nav primary" onClick={() => setMonth(1)}>
                <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"><path d="M354 794q-8-10-8.5-22t8.5-21l176-176-177-177q-8-8-7.5-21.5T354 355q10-10 21.5-9.5T396 355l199 199q5 5 7 10t2 11q0 6-2 11t-7 10L397 794q-9 9-21 8.5t-22-8.5Z"/></svg>
              </div>
            </div>
          </div>
          <div className="day-names">
            <div className="case">Lun</div>
            <div className="case">Mar</div>
            <div className="case">Mer</div>
            <div className="case">Jeu</div>
            <div className="case">Ven</div>
            <div className="case">Sam</div>
            <div className="case">Dim</div>
          </div>
          <div className="calendar-days">{setDays()}</div>
        </div>
      ) : null}
    </div>
  );
};

export default DatePicker;
