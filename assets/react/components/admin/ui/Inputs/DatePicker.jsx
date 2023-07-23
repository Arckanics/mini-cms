import React, { useEffect, useState } from "react";
import { Calendar } from "../../../../icon/icon-ui/";

const DatePicker = ({ change, value }) => {
  value.setHours(0, 0, 0, 0);
  const drawDate = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const [ref, setRef] = useState(null);
  const [dateState, setDateState] = useState(new Date());


  const preventOverflow = () => {
    const domEl = ref;
    const par = document.querySelector(".modal-editor");
    const windowRect = par.getBoundingClientRect();
    const cal = par.querySelector(".calendar");
    const calendarRect = domEl.getBoundingClientRect();


    const overflowRight = (parent, children, el) => {
      const limit = parent.width + parent.x;
      const pads = Number(window.getComputedStyle(el.parentNode).paddingLeft.replace(/\D/g,'')) * 2

      const box = el.scrollWidth + children.x + pads + 4;
      return limit - box
    }

    const result = overflowRight(windowRect, calendarRect, cal);


    if (result < 0) {
      cal.classList.add('floating')
    }
  }

  useEffect(() => {
    ref && preventOverflow()
  }, [ref])

  const openCal = e => {
    setRef(e.target);
  };

  const changeDate = v => {
    const nDate = dateState;
    nDate.setDate(v);
    ref.blur();
    setRef(null);
    change(nDate);
  };

  const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

  const setDays = () => {
    const outPut = [];
    const displayDate = new Date(dateState.getTime());

    displayDate.setDate(1);

    for (let i = 0; i < displayDate.getDay(); i++) {
      outPut.push(<div key={"dPickEmpty-" + i} className="case empty"></div>);
    }

    const eod = daysInMonth(displayDate.getMonth(), displayDate.getFullYear());

    for (let i = 1; i <= eod; i++) {
      displayDate.setDate(i);
      const activeDate = displayDate.getTime() === value.getTime();
      outPut.push(
        <div
          key={"dPick-" + i}
          onClick={() => changeDate(i)}
          className={"case" + (activeDate ? " active" : "")}
        >
          {i}
        </div>
      );
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
      onFocus={openCal}
      onBlur={() => setRef(null)}
      tabIndex={-1}
    >
      <div className="date-txt">{value.toLocaleDateString("fr-FR")}</div>
      <div className="calendar-icon">
        <Calendar cls="icon" />
      </div>
      {ref !== null ? (
        <div className="calendar">
          <div className="calendar-current">
            <div className="text">
              {value.toLocaleDateString("fr-FR", drawDate)}
            </div>
            <div className="btn danger" onClick={() => ref.blur()}>
              <svg
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 96 960 960"
              >
                <path d="M480 618 270 828q-9 9-21 9t-21-9q-9-9-9-21t9-21l210-210-210-210q-9-9-9-21t9-21q9-9 21-9t21 9l210 210 210-210q9-9 21-9t21 9q9 9 9 21t-9 21L522 576l210 210q9 9 9 21t-9 21q-9 9-21 9t-21-9L480 618Z" />
              </svg>
            </div>
          </div>
          <div className="month-year">
            <div className="calendar-month">
              <div className="btn-nav primary" onClick={() => setMonth(-1)}>
                <svg
                  className="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 96 960 960"
                >
                  <path d="M539 794 341 596q-5-5-7-10t-2-11q0-6 2-11t7-10l199-199q9-9 21.5-9t21.5 9q9 9 8.5 22t-9.5 22L406 575l177 177q9 9 9 21t-9 21q-9 9-22 9t-22-9Z" />
                </svg>
              </div>
              <div>
                {dateState.toLocaleDateString("fr-FR", { month: "short" })}
              </div>
              <div className="btn-nav primary" onClick={() => setMonth(1)}>
                <svg
                  className="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 96 960 960"
                >
                  <path d="M354 794q-8-10-8.5-22t8.5-21l176-176-177-177q-8-8-7.5-21.5T354 355q10-10 21.5-9.5T396 355l199 199q5 5 7 10t2 11q0 6-2 11t-7 10L397 794q-9 9-21 8.5t-22-8.5Z" />
                </svg>
              </div>
            </div>
            <div className="calendar-year">
              <div className="btn-nav primary" onClick={() => setYear(-1)}>
                <svg
                  className="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 96 960 960"
                >
                  <path d="M539 794 341 596q-5-5-7-10t-2-11q0-6 2-11t7-10l199-199q9-9 21.5-9t21.5 9q9 9 8.5 22t-9.5 22L406 575l177 177q9 9 9 21t-9 21q-9 9-22 9t-22-9Z" />
                </svg>
              </div>
              <div>
                {dateState.toLocaleDateString("fr-FR", { year: "numeric" })}
              </div>
              <div className="btn-nav primary" onClick={() => setYear(1)}>
                <svg
                  className="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 96 960 960"
                >
                  <path d="M354 794q-8-10-8.5-22t8.5-21l176-176-177-177q-8-8-7.5-21.5T354 355q10-10 21.5-9.5T396 355l199 199q5 5 7 10t2 11q0 6-2 11t-7 10L397 794q-9 9-21 8.5t-22-8.5Z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="day-names">
            {["lun", "mar", "mer", "jeu", "ven", "sam", "dim"].map((v, k) => (
              <div key={k} className="case">
                {v}
              </div>
            ))}
          </div>
          <div className="calendar-days">{ref ? setDays() : null}</div>
        </div>
      ) : null}
    </div>
  );
};

export default DatePicker;
