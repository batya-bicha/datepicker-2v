import React from 'react';
import MonthDay from '../MonthDay';
import styles from './Calendar.module.scss';


export default function Calendar({ headerDate, currentDate, setCurrentDate, weekDays, inRange }) {
  const [date, setDate] = React.useState(new Date());


  React.useEffect(() => {
    setDate(headerDate || new Date())
  }, [currentDate, headerDate]);


  const selectDate = (day, month, year) => {
    const convertToFormat = [day, month, year].join('.');
    setCurrentDate(convertToFormat);
  }

  const renderMonthDays = () => {
    const firstWeekDay = (new Date(date.getFullYear(), date.getMonth(), 1).getDay() - 1) === -1 ? 6 : (new Date(date.getFullYear(), date.getMonth(), 1).getDay() - 1);
    const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const monthDays = [];


    for (let i = 0; i < firstWeekDay; i++) {
      monthDays.push(<div key={i + 'empty'}></div>)
    }

    for (let i = 0; i < daysInMonth; i++) {
      new Date().getDate() === i + 1 && new Date().getMonth() === date.getMonth() && new Date().getFullYear() === date.getFullYear()
        ? monthDays.push(<MonthDay key={i} date={date} inRange={inRange} day={i + 1} month={date.getMonth()} year={date.getFullYear()} classActive={'active'} selectDate={selectDate} />)
        : currentDate?.getDate() === i + 1 && currentDate?.getMonth() === headerDate.getMonth() && currentDate?.getFullYear() === headerDate.getFullYear()
          ? monthDays.push(<MonthDay key={i} date={date} inRange={inRange} day={i + 1} month={date.getMonth()} year={date.getFullYear()} classSelected={'selected'} selectDate={selectDate} />)
          : monthDays.push(<MonthDay key={i} date={date} inRange={inRange} day={i + 1} month={date.getMonth()} year={date.getFullYear()} selectDate={selectDate} />)
    }

    return monthDays;
  }


  return (
    <div className={styles.calendar}>
      <div className={styles.weekDays}>
        {weekDays.map(i =>
          <div key={i}>
            {i.slice(0, 1)}
          </div>
        )}
      </div>
      <div className={styles.monthDays}>
        {renderMonthDays()}
      </div>
    </div>
  )
}
