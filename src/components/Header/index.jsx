import React from 'react';
import { dateHelper } from '../../date.helper';
import styles from './Header.module.scss';


export default function Header({ months, setHeaderDate, currentDate }) {
  const [date, setDate] = React.useState(new Date());


  React.useEffect(() => {
    setDate(currentDate || new Date());
  }, [currentDate])


  const changeMonth = (month) => {
    const convertToFormat = month === 'prevMonth'
      ? dateHelper.getPrevMonth(date)
      : dateHelper.getNextMonth(date)
    setDate(convertToFormat);
    setHeaderDate(convertToFormat);
  }


  return (
    <div className={styles.header}>
      <div
        onClick={() => changeMonth('prevMonth')}
        className={styles.img}
      >
        <img
          src={'/img/left_arrow.svg'}
          alt={'left'}
        />
      </div>
      <div className={styles.month}>
        {months[date?.getMonth()] + ' ' + (date?.getFullYear())}
      </div>
      <div
        onClick={() => changeMonth('nextMonth')}
        className={styles.img}
      >
        <img
          src={'/img/right_arrow.svg'}
          alt={'right'}
        />
      </div>
    </div>
  )
}
