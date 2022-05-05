import React from 'react';
import { alumnos } from '../../data/alumnos';
import styles from '../../styles/Alumnos.module.css';
import Link from 'next/link';

const Alumnos = () => {
  return (
    <div>
      <h1>Alumn@s</h1>
      <div className={styles.alumnosContainer}>
        {alumnos.map((al, index) => {
          return (
            <div className={styles.alumnoElement}>
              <h6>
                <span className={styles.name}>{al.name}</span> · {al.age} años ·{' '}
                {al.location} - {al.region}{' '}
              </h6>
            </div>
          );
        })}
        <Link href={`/inscripcion`} passHref>
          <div className={`${styles.alumnoElement} ${styles.nuevoAlumno}`}>
            <h2>Quiero Inscribirme!</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Alumnos;
