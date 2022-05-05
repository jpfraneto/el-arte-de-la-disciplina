import React from 'react';
import { alumnos } from '../../data/alumnos';
import styles from '../../styles/Alumnos.module.css';
import Link from 'next/link';

const Alumnos = () => {
  return (
    <div>
      <h1>Alumnos</h1>
      <div className={styles.alumnosContainer}>
        {alumnos.map((al, index) => {
          return (
            <Link href={`/alumnos/${al.slug}`} key={index} passHref>
              <div className={styles.alumnoElement}>
                <h2>{al.name}</h2>
                <h3>{al.age}</h3>
                <h4>
                  {al.location} - {al.region}
                </h4>
              </div>
            </Link>
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
