import React from 'react';
import Input from '../Input';
import styles from './DatePickerInput.module.scss';


export default function DatePickerInput({ setDate, date, text }) {
  return (
    <div className={styles.calendar}>
      <Input
        setDate={setDate}
        text={text}
        currentDate={date}
      />
    </div>
  )
}
