import React from 'react';
import LeftDatePicker from '../LeftDatePicker';
import RightDatePicker from '../RightDatePicker';
import DatePickerPopup from '../DatePickerPopup';
import styles from './RangePicker.module.scss';


export default function RangePicker() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [start, setStart] = React.useState();
  const [end, setEnd] = React.useState();


  const weekDays = React.useRef(['Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat', 'Sun']);
  const months = React.useRef(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']);


  const handlerPopup = (e) => {
    return e.target.className.includes('RangePicker') || e.target.className.includes('Input') ? setIsOpen(prevState => !isOpen) : null;
  }


  const setStartDate = (date, bool) => {
    const currentDate = date.split('.');
    const formattedDate = bool ? (new Date(currentDate[2], currentDate[1] - 1, currentDate[0])) : (new Date(currentDate[2], currentDate[1], currentDate[0]));
    setStart(formattedDate);
  }


  const setEndDate = (date, bool) => {
    const currentDate = date.split('.');
    const formattedDate = bool ? (new Date(currentDate[2], currentDate[1] - 1, currentDate[0])) : (new Date(currentDate[2], currentDate[1], currentDate[0]));
    setEnd(formattedDate);
  }


  return (
    <div
      className={styles.rangePicker}
      onClick={(e) => handlerPopup(e)}
    >
      <LeftDatePicker
        setDate={setStartDate}
        startDate={start}
        weekDays={weekDays.current}
        months={months.current}
      />
      <span className={styles.middleText}>to</span>
      <RightDatePicker
        setDate={setEndDate}
        endDate={end}
        weekDays={weekDays.current}
        months={months.current}
      />
      {isOpen &&
        <DatePickerPopup
          setDate={[setStartDate, setEndDate]}
          startDate={start}
          endDate={end}
          weekDays={weekDays.current}
          months={months.current}
        />}
    </div>
  )
}
