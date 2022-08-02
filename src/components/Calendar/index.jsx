import React from 'react';
import MonthDay from '../MonthDay';
import { dateHelper } from '../../date.helper';
import styles from './Calendar.module.scss';


//! function usePrevios(value) {
//   const prevValueRef = React.useRef(null);

//   React.useEffect(() => {
//     prevValueRef.current = value;
//   });

//   return prevValueRef.current;
// }


export default function Calendar({ testSetDate, headerDate, currentDate, setCurrentDate, weekDays, inRange, endDay, startDay }) {
  const [date, setDate] = React.useState(new Date());
  const [toggleDate, setToggleDate] = React.useState(true);
  //! const [prevStartDay, setPrevStartDay] = React.useState();
  // const [prevEndDay, setPrevEndDay] = React.useState();
  // const prevProps = usePrevios([prevStartDay, prevEndDay]);


  React.useEffect(() => {
    setDate(headerDate || new Date());
  }, [currentDate, headerDate]);


  const selectDate = (day, month, year) => {
    const convertToFormat = [day, month, year].join('.');
    const provenStartDay = toggleDate ? day : null;
    const provenEndDay = !toggleDate ? day : null;

    setToggleDate(prevState => !prevState);
    //! setPrevStartDay(provenStartDay);
    // setPrevEndDay(provenEndDay);

    // if (Number.isInteger(prevProps.current[1]) ? prevProps.current[1] < day : false) {
    //   testSetDate[1](convertToFormat);
    //   setToggleDate(!toggleDate);
    // } else if (prevProps.current[0] > day) {
    //   testSetDate[0](convertToFormat);
    //   setToggleDate(!toggleDate);
    // }

    toggleDate ? testSetDate[0](convertToFormat) : testSetDate[1](convertToFormat);

    //todo start > end && end < start -> set startDay

  }


  const renderMonthDays = () => {
    const firstWeekDay = dateHelper.getFirstWeekDay(date);
    const daysInMonth = dateHelper.getDaysInMonth(date);
    const monthDays = [];


    for (let i = 0; i < firstWeekDay; i++) {
      monthDays.push(<div key={i + 'empty'}></div>)
    }


    for (let i = 0; i < daysInMonth; i++) {
      dateHelper.checkSelectedDay(currentDate, headerDate, startDay, endDay, i)
        ? monthDays.push(
          <MonthDay
            key={i}
            inRange={inRange}
            day={i + 1}
            month={date.getMonth()}
            year={date.getFullYear()}
            classSelected={'selected'}
            selectDate={selectDate}
          />
        )
        : dateHelper.checkCurrentDay(date, i)
          ? monthDays.push(
            <MonthDay
              key={i}
              inRange={inRange}
              day={i + 1}
              month={date.getMonth()}
              year={date.getFullYear()}
              classActive={'active'}
              selectDate={selectDate}
            />
          )
          : monthDays.push(
            <MonthDay
              key={i}
              inRange={inRange}
              day={i + 1}
              month={date.getMonth()}
              year={date.getFullYear()}
              selectDate={selectDate}
            />
          )
    }


    return monthDays;
  }


  return (
    <div className={styles.calendar}>
      <div className={styles.weekDays}>
        {weekDays.map(i =>
          <div key={i}>
            {i.slice(0, 1)}
          </div>
        )}
      </div>
      <div className={styles.monthDays}>
        {renderMonthDays()}
      </div>
    </div>
  )
}
