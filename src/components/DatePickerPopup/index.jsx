import React from 'react';
import Popup from '../Popup';
import styles from './DatePickerPopup.module.scss';


export default function DatePickerPopup(props) {

  const inRange = {
    startDate: props.startDate,
    endDate: props.endDate,
    dayInRange: function (date, startDate = this.startDate, endDate = this.endDate) {
      return (startDate && endDate) ?
        (date > startDate && date < endDate) ? true : false
        : null
    }
  }


  return (
    <div className={styles.popup}>
      <Popup inRange={inRange} src={'left'} setDate={props.setDate[0]} currentDate={props.startDate} weekDays={props.weekDays} months={props.months} />
      <Popup inRange={inRange} src={'right'} setDate={props.setDate[1]} currentDate={props.endDate} weekDays={props.weekDays} months={props.months} />
    </div>
  )
}
