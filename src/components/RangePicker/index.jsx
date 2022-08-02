import React from 'react';
import DatePickerInput from '../DatePickerInput';
import DatePickerPopup from '../DatePickerPopup';
import { dateHelper } from '../../date.helper';
import styles from './RangePicker.module.scss';


const weekDays = ['Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat', 'Sun'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


const useClickOutside = (ref, callback) => {
  const handleClick = e => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};


export default function RangePicker() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [start, setStart] = React.useState();
  const [end, setEnd] = React.useState();


  const clickRef = React.useRef();
  useClickOutside(clickRef, setIsOpen);


  const handlerPopup = (e) => {
    return e.currentTarget.className.includes('RangePicker') ? setIsOpen(true) : null;
  }

  //* ?????
  const setStartDate = (date, bool) => {
    const currentDate = date.split('.');
    const formattedDate = bool
      ? dateHelper.getInputDate(currentDate)
      : dateHelper.getCalendarDate(currentDate);
    setStart(formattedDate);
  }

  //* ?????
  const setEndDate = (date, bool) => {
    const currentDate = date.split('.');
    const formattedDate = bool
      ? dateHelper.getInputDate(currentDate)
      : dateHelper.getCalendarDate(currentDate);
    setEnd(formattedDate);
  }


  return (
    <div
      ref={clickRef}
      className={styles.rangePicker}
      onClick={(e) => handlerPopup(e)}
    >
      <DatePickerInput
        setDate={setStartDate}
        date={start}
        text="Start"
      />
      <span className={styles.middleText}>to</span>
      <DatePickerInput
        setDate={setEndDate}
        date={end}
        text="End"
      />
      {isOpen &&
        <DatePickerPopup
          setDate={[setStartDate, setEndDate]}
          startDate={start}
          endDate={end}
          weekDays={weekDays}
          months={months}
        />}
    </div>
  )
}
