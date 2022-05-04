import React from 'react';
import { dates } from '../../data/dates';
import styles from '../../styles/cal2.module.css';

const Cal = () => {
  return (
    <div className={styles.calendarContainer}>
      <h1>Calendario</h1>
      {dates.map(date => (
        <CalElement day={date} />
      ))}
    </div>
  );
};

const CalElement = ({ day }) => {
  if (!day.hayClase)
    return (
      <div className={`${styles.restDayCard} ${styles.dayCard}`}>
        <h2>Descanso!</h2>
      </div>
    );
  return (
    <div className={styles.dayCard}>
      <h2>
        {day.index} - {day.dia} - {day.fecha}
      </h2>
      <p>{day.yogatype.toUpperCase()} YOGA</p>
      <h5>{day.profesor}</h5>
    </div>
  );
};

export default Cal;
