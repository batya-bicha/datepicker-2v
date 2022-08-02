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
        setCurrentDate={props.setDate}
        months={props.months}
      />
      <Calendar
        inRange={props.inRange}
        headerDate={headerDate}
        currentDate={props.currentDate}
        testSetDate={props.testSetDate}

        setCurrentDate={props.setDate}
        weekDays={props.weekDays}
        endDay={props.endDay}
        startDay={props.startDay}
      />
    </div>
  )
}
