import React from 'react';
import LeftDatePicker from '../LeftDatePicker';
import RightDatePicker from '../RightDatePicker';
import DatePickerPopup from '../DatePickerPopup';
import styles from './RangePicker.module.scss';


const weekDays = ['Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat', 'Sun'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


export default function RangePicker() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [start, setStart] = React.useState();
  const [end, setEnd] = React.useState();


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
        weekDays={weekDays}
        months={months}
      />
      <span className={styles.middleText}>to</span>
      <RightDatePicker
        setDate={setEndDate}
        endDate={end}
        weekDays={weekDays}
        months={months}
      />
      {isOpen &&
        <DatePickerPopup
          setDate={[setStartDate, setEndDate]}
          // date={date}
          startDate={start}
          endDate={end}
          weekDays={weekDays}
          months={months}
        />}
    </div>
  )
}


//TODO исправить МАЙ! 
//TODO добавить стили при выборе дня +
//TODO возвращать данные при выборе дня в INPUT +
//TODO добавить стили при вводе даты на выбранные дни c помощью пропс (MonthDay) +
//TODO сделать обработку startDate > endDate? -
//TODO сделать переключатель месяцев +
//TODO сделать открытие/закртие календаря +