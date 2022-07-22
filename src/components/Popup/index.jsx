import React from 'react';
import Calendar from '../Calendar';
import Header from '../Header';
import styles from './Popup.module.scss';


export default function Popup(props) {
  const [headerDate, setHeaderDate] = React.useState(props.currentDate);


  React.useEffect(() => {
    setHeaderDate(props.currentDate || new Date())
  }, [props.currentDate])

  
  const setNewDate = (date) => {
    setHeaderDate(date);
  }

  return (
    <div className={styles.popup}>
      <Header setHeaderDate={setNewDate} currentDate={props.currentDate} setCurrentDate={props.setDate} months={props.months} src={props.src} />
      <Calendar headerDate={headerDate} currentDate={props.currentDate} setCurrentDate={props.setDate} weekDays={props.weekDays} months={props.months} />
    </div>
  )
}
