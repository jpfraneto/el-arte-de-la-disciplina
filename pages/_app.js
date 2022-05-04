import '../styles/globals.css';
import Head from 'next/head';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>El Arte de la Disciplina</title>
        <meta
          name='description'
          content='El Arte de la Disciplina, Yoga Online'
        />
      </Head>
      <Navbar />
      <div className='restContainer'>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
