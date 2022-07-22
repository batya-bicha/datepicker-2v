import React from 'react';
import styles from './MonthDay.module.scss';


export default function MonthDay(props) {

  return (
    <div
      onClick={() => props.selectDate(props.day, props.month, props.year)}
      className={styles.monthDay + ' '
        + (props.classActive ? styles[props.classActive] + ' ' : ' ')
        + (props.classSelected ? styles[props.classSelected] : ' ')
      }
    >
      {props.day}
    </div>
  )
}
