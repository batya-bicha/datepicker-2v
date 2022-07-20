import React from 'react';
import MonthDay from '../MonthDay';
import styles from './Calendar.module.scss';


export default function Calendar({ currentDate = new Date(), setCurrentDate, weekDays, months }) {
  const [date, setDate] = React.useState(new Date());


  const selectDate = (day, month, year) => {
    const convertToFormat = [day, month, year].join('.');
    setCurrentDate(convertToFormat);
  }

  const inRange = () => {
    
  }

  const renderMonthDays = () => {
    const firstWeekDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay() - 1;
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const monthDays = [];

    for (let i = 0; i < firstWeekDay; i++) {
      monthDays.push(<div key={i + 'empty'}></div>)
    }

    for (let i = 0; i < daysInMonth; i++) {
      date.getDate() === i + 1 && date.getMonth() === currentDate.getMonth()
        ? monthDays.push(<MonthDay key={i} day={i + 1} month={currentDate.getMonth()} year={currentDate.getFullYear()} classActive={'active'} selectDate={selectDate} />)
        : currentDate.getDate() === i + 1
          ? monthDays.push(<MonthDay key={i} day={i + 1} month={currentDate.getMonth()} year={currentDate.getFullYear()} classSelected={'selected'} selectDate={selectDate} />)
          : monthDays.push(<MonthDay key={i} day={i + 1} month={currentDate.getMonth()} year={currentDate.getFullYear()} selectDate={selectDate} />)
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
