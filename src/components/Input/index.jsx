import React from 'react';
import styles from './Input.module.scss';


export default function Input(props) {
  const [date, setDate] = React.useState('');
  const [inputInfo, setInputInfo] = React.useState();


  React.useEffect(() => {
    const correctDay = props.currentDate?.getDate() < 10 ? '0' + props.currentDate?.getDate() : props.currentDate?.getDate();
    const correctMonth = props.currentDate?.getMonth() < 9 ? '0' + (props.currentDate?.getMonth() + 1) : (props.currentDate?.getMonth() + 1);
    setDate(props.currentDate ? [correctDay, correctMonth, props.currentDate.getFullYear()].join('.') : '')
  }, [props.currentDate])


  const changeText = (e) => {
    setDate(e.target.value);
    return e.target.value.length === 10 ? props.setDate(e.target.value, true) : null
  }


  return (
    <div className={styles.container}>
      <p className={styles.text}>
        {props.text} Date
      </p>
      <input
        className={styles.date}
        onChange={(e) => changeText(e)}
        value={date}
        placeholder="dd.mm.yyyy"
        type="text"
        name="date"
      />
    </div>
  )
}

//todo сделать проверку на ввод данных в формате XX.XX.XXXX
//todo ДАННЫЕ ПРИ ВВОДЕ ЗАПИСЫВАТЬ В ПЕРЕМЕННЫЕ И УСТАНАВЛИВАТЬ КАК АКТУАЛЬНУЮ ДАТУ 
//todo и передавать данные в POPUP и устанавливать как актуальные 