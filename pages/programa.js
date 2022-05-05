import React from 'react';
import styles from '../styles/Programa.module.css';

const Programa = () => {
  return (
    <div className={styles.programaContainer}>
      <h1>Programa</h1>
      <p>
        El arte de la disciplina es un programa de 3 semanas que tiene los
        siguientes objetivos:
      </p>
      <div>
        <ul>
          <li>Desarrollar mayor claridad mental.</li>
          <li>Aumentar la capacidad de lidiar con la presión.</li>
          <li>Manejo de la ansiedad.</li>
          <li>
            Mayor confianza en el proceso personal y el conocimiento que posees
            en todo momento de tu vida.
          </li>
        </ul>
      </div>

      <p>
        Ocuparemos la tecnología ancestral del yoga como medio para lograr estos
        objetivos.
      </p>
      <p>
        Habrán clases todos los días Lunes, miércoles y viernes de Kundalini
        Yoga, a las 19:30.
      </p>
      <p>
        Martes, Jueves y Domingo haremos una meditación de entre 10 a 20 minutos
        en conjunto por zoom.
      </p>
      <p>
        El programa es gratuito, y todo su desarrollo se hará a través de
        plataformas online. Con esto se busca generar inclusividad y permitir
        ser parte del proceso a alumnos de todo Chile.
      </p>
    </div>
  );
};

export default Programa;
