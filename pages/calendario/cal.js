import React from 'react';
import styles from '../../styles/Calendar.module.css';
import { dates } from '../../data/dates';
import Link from 'next/link';

const Calendario = () => {
  return (
    <div className={styles.calendarContainer}>
      {dates.map((x, index) => (
        <CalendarDay key={index} day={x} />
      ))}
    </div>
  );
};

const CalendarDay = ({ day }) => {
  if (!day.hayClase)
    return (
      <div className={`${styles.dayCard} ${styles.restDay}`}>
        <h2>Rest</h2>
      </div>
    );
  return (
    <Link href={`/calendario/${day.fecha}`} passHref>
      <div className={styles.dayCard}>
        <h2>{day.fecha}</h2>
        <p>{day.yogatype.toUpperCase()}</p>
        <h5>{day.profesor}</h5>
      </div>
    </Link>
  );
};

export default Calendario;
