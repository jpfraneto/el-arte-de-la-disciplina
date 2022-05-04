import React from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className={styles.mainNav}>
      <Link href='/'>
        <h1>El arte de la disciplina</h1>
      </Link>
      <nav>
        <Link href='/programa'>
          <a>Programa</a>
        </Link>
        <Link href='/alumnos'>
          <a>Alumnos</a>
        </Link>
        <Link href='/calendario'>
          <a>Calendario</a>
        </Link>
        <Link href='/jp'>
          <a>jp</a>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
