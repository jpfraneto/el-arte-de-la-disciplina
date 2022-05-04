import React from 'react';
import { dates } from '../../data/dates';
import Link from 'next/link';

export async function getStaticPaths() {
  return {
    paths: dates.map(date => ({
      params: {
        date: date.fecha,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const thisDate = dates.filter(x => {
    return x.fecha === context.params.date;
  });
  return {
    props: { date: thisDate[0] },
  };
}

const ByDate = ({ date }) => {
  return (
    <div>
      <h1>{date.yogatype}</h1>
      <h2>{date.profesor}</h2>
      <Link href='/calendario'>
        <a>Atrás</a>
      </Link>
    </div>
  );
};

export default ByDate;
