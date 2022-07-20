import React from 'react';
import Input from '../Input';
import styles from './RightDatePicker.module.scss';


export default function RightDatePicker(props) {
  return (
    <div className={styles.calendar}>
      <Input setDate={props.setDate} text={'End'} currentDate={props.endDate} />
    </div>
  )
}
