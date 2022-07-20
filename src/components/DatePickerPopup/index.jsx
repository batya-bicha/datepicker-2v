import React from 'react';
import Popup from '../Popup';
import styles from './DatePickerPopup.module.scss';


export default function DatePickerPopup(props) {
  return (
    <div className={styles.popup}>
      <Popup src={'left'} setDate={props.setDate[0]} currentDate={props.startDate} weekDays={props.weekDays} months={props.months} />
      <Popup src={'right'} setDate={props.setDate[1]} currentDate={props.endDate} weekDays={props.weekDays} months={props.months} />
    </div>
  )
}
