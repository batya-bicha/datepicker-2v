import React from 'react';
import Popup from '../Popup';
import { dateHelper } from '../../date.helper';
import styles from './DatePickerPopup.module.scss';


export default function DatePickerPopup(props) {
  const [toggleDate, setToggleDate] = React.useState(props.dateFromInput);


  React.useEffect(() => {
    setToggleDate(props.dateFromInput);
  }, [props.dateFromInput])


  const inRange = {
    startDate: props.startDate,
    endDate: props.endDate,
    dayInRange: function (date, startDate = this.startDate, endDate = this.endDate) {
      const hasSelectedDates = dateHelper.checkInRangeCondition(date, startDate, endDate);

      return (startDate && endDate) ?
        hasSelectedDates ? true : false
        : null
    }
  }

  //* 
  const toggleSelectDate = (date) => {
    console.log(toggleDate)
    toggleDate ? props.setDate[0](date) : props.setDate[1](date);
    setToggleDate(prevState => !prevState);
  }


  return (
    <div className={styles.popup}>
      <Popup
        inRange={inRange}
        toggleSelectDate={toggleSelectDate}
        currentDate={props.startDate}
        startDay={props.startDate}
        endDay={props.endDate}
        weekDays={props.weekDays}
        months={props.months}
      />
      <Popup
        inRange={inRange}
        toggleSelectDate={toggleSelectDate}
        currentDate={props.endDate}
        startDay={props.startDate}
        endDay={props.endDate}
        weekDays={props.weekDays}
        months={props.months}
      />
    </div>
  )
}
