import React from 'react';
import Calendar from '../Calendar';
import Header from '../Header';
import styles from './Popup.module.scss';


export default function Popup(props) {
  const [headerDate, setHeaderDate] = React.useState(props.currentDate);


  React.useEffect(() => {
    setHeaderDate(props.currentDate || new Date());
  }, [props.currentDate])


  const setNewDate = (date) => {
    setHeaderDate(date);
  }


  return (
    <div className={styles.popup}>
      <Header
        setHeaderDate={setNewDate}
        currentDate={props.currentDate}
        months={props.months}
      />
      <Calendar
        inRange={props.inRange}
        headerDate={headerDate}
        currentDate={props.currentDate}
        toggleSelectDate={props.toggleSelectDate}
        weekDays={props.weekDays}
        endDay={props.endDay}
        startDay={props.startDay}
      />
    </div>
  )
}
