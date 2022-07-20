import React from 'react';
import Input from '../Input';
import styles from './LeftDatePicker.module.scss';


export default function LeftDatePicker(props) {
  return (
    <div className={styles.calendar}>
      <Input setDate={props.setDate} text={'Start'} currentDate={props.startDate}/>
    </div>
  )
}
