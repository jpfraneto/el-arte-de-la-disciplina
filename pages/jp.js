import React from 'react';
import styles from '../styles/Jp.module.css';

const Jp = () => {
  return (
    <div className={styles.jpcontainer}>
      <h1>jp</h1>
      <p>
        Soy quien está a cargo de inventar este lugar. Si es que quieres
        conocerme mejor, te invito a visitar mi página web:{' '}
        <a target='_blank' href='https://www.jpfraneto.com'>
          www.jpfraneto.com
        </a>
      </p>
    </div>
  );
};

export default Jp;
