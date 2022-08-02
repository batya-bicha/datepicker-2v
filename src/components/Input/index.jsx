import React from 'react';
import { dateHelper } from '../../date.helper';
import styles from './Input.module.scss';


export default function Input(props) {
  const [date, setDate] = React.useState('');
  const [inputFocus, setInputFocus] = React.useState(false);


  React.useEffect(() => {
    const correctDay = dateHelper.getCorrectDay(props.currentDate);
    const correctMonth = dateHelper.getCorrectMonth(props.currentDate);
    setDate(props.currentDate ? dateHelper.setCurrentDateFormat(correctDay, correctMonth, props.currentDate) : '');
  }, [props.currentDate])


  const changeText = (e) => {
    setDate(e.target.value);
    return e.target.value.length === 10 && e.target.checkValidity() ? props.setDate(e.target.value, true) : null;
  }


  return (
    <div className={styles.container + ' ' + (inputFocus ? styles.focusInput : ' ')}>
      <p className={styles.text + ' ' + (inputFocus ? styles.focusText : ' ')}>
        {props.text} Date
      </p>
      <input
        className={styles.date}
        onChange={(e) => changeText(e)}
        onFocus={() => setInputFocus(prevState => !prevState)}
        onBlur={() => setInputFocus(prevState => !prevState)}
        value={date}
        placeholder="dd.mm.yyyy"
        type="text"
        name="date"
        autoComplete="off"
        title="Используйте числовой формат даты"
        pattern="[0-9]{2}\.[0-9]{2}\.[0-9]{4}"
        maxLength={10}
      />
    </div>
  )
}
