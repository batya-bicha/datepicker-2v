import React from 'react';
import Calendar from '../Calendar';
import Header from '../Header';
import styles from './Popup.module.scss';


export default function Popup(props) {

  return (
    <div className={styles.popup}>
      <Header currentDate={props.currentDate} setCurrentDate={props.setDate} months={props.months} src={props.src} />
      <Calendar currentDate={props.currentDate} setCurrentDate={props.setDate} weekDays={props.weekDays} months={props.months} />
    </div>
  )
}
