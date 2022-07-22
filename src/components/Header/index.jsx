import React from 'react';
import styles from './Header.module.scss';


export default function Header({ months, src, setHeaderDate, currentDate }) {
  const [date, setDate] = React.useState(new Date());


  React.useEffect(() => {
    setDate(currentDate || new Date())
  }, [currentDate])


  const changeMonth = () => {
    const convertToFormat = src === 'left'
      ? new Date(date?.getFullYear(), date?.getMonth() - 1, date?.getDate())
      : new Date(date?.getFullYear(), date?.getMonth() + 1, date?.getDate())
    setDate(convertToFormat);
    setHeaderDate(convertToFormat);
  }


  return (
    <div className={styles.header}>
      <div
        onClick={() => changeMonth()}
        className={styles.img}
        style={src === 'right' ? { order: 1 } : null}
      >
        <img
          src={`/img/${src}_arrow.svg`}
          alt={src}
        />
      </div>
      <div className={styles.month}>
        {months[date?.getMonth()] + ' ' + (date?.getFullYear())}
      </div>
    </div>
  )
}


//! ВЫВОДИТЬ МЕСЯЦ В ПРИОРИТЕТЕ С ИНПУТА!!!!!!!!!!!!!!!!!