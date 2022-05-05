import Head from 'next/head';
import { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <h2>21 días de yoga</h2>
      <h3>
        Trabajando la ansiedad y la presión que genera la etapa
        preuniversitaria.
      </h3>

      <div className={styles.emailForm}>
        <Link href='/inscripcion'>
          <a className={styles.participateBtn}>Quiero ser parte!</a>
        </Link>
      </div>
    </div>
  );
}
