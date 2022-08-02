import React from 'react';
import Popup from '../Popup';
import { dateHelper } from '../../date.helper';
import styles from './DatePickerPopup.module.scss';


export default function DatePickerPopup(props) {

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


  return (
    <div className={styles.popup}>
      <Popup
        inRange={inRange}
        testSetDate={props.setDate}

        setDate={props.setDate[0]}
        currentDate={props.startDate}
        startDay={props.startDate}
        endDay={props.endDate}
        weekDays={props.weekDays}
        months={props.months}
      />
      <Popup
        inRange={inRange}
        testSetDate={props.setDate}

        setDate={props.setDate[1]}
        currentDate={props.endDate}
        startDay={props.startDate}
        endDay={props.endDate}
        weekDays={props.weekDays}
        months={props.months}
      />
    </div>
  )
}
