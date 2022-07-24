import React from 'react';
import styles from './MonthDay.module.scss';


export default function MonthDay({ date, inRange, selectDate, day, month, year, classActive, classSelected }) {
  const [dayInRange, setDayInRange] = React.useState(false);


  React.useEffect(() => {
    setDayInRange(inRange.dayInRange(new Date(year, month, day)))
  }, [date])

  return (
    <div
      onClick={() => selectDate(day, month, year)}
      className={styles.monthDay + ' '
        + (classActive ? styles[classActive] + ' ' : ' ')
        + (classSelected ? styles[classSelected] : ' ')
        + (dayInRange ? styles.range : ' ')
      }
    >
      {day}
    </div>
  )
}
