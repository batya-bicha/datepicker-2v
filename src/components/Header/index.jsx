import React from 'react';
import styles from './Header.module.scss';


export default function Header({ months, src, currentDate = new Date(), setCurrentDate }) {

  const changeMonth = () => {
    const convertToFormat = src === 'left'
      ? [currentDate.getDate(), currentDate.getMonth() - 1, currentDate.getFullYear()].join('.')
      : [currentDate.getDate(), currentDate.getMonth() + 1, currentDate.getFullYear()].join('.');
    setCurrentDate(convertToFormat)
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
        {months[currentDate?.getMonth()] + ' ' + currentDate?.getFullYear()}
      </div>
    </div>
  )
}
